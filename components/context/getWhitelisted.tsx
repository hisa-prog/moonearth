import React, { useState } from "react";
// import Web3 from "web3";
import ABI from "../../uitls/abi.json";
import { AbiItem } from "web3-utils";
import { useModal } from "../layout/modalLayout";
import WalletConnectProvider from "@walletconnect/web3-provider";

interface Props {
  children: any;
}

type ContextType = {
  getWhitelisted: () => void;
  modalTitle: string;
  infoModal: { isOpen: boolean; open: () => void; close: () => void } | null;
};

export const GetWhitelistedContext = React.createContext<ContextType>({
  getWhitelisted: () => {},
  modalTitle: "",
  infoModal: null,
});

declare let window: any;
let Web3: any;

const GetWhitelistedProvider = ({ children }: Props) => {
  const [modalTitle, setModalTitle] = useState("");
  const infoModal = useModal();

  const providerWalletConnect = new WalletConnectProvider({
    infuraId: "6860c8330f19440e8fc89a8724780538", // Required
    rpc: {
      4: "https://rinkeby.infura.io/v3/6860c8330f19440e8fc89a8724780538",
    },
    chainId: 4,
  });

  const connectWallet = async () => {
    try {
      const data = await providerWalletConnect.enable();
      if (data.length > 0) {
        console.log("Got addresses: ", data, providerWalletConnect);
      }
      return providerWalletConnect;
    } catch (error) {
      console.log("Err connect: ", error);
    }
  };

  async function getWhitelisted() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // // код для мобильных устройств
      try {
        Web3 = require("web3");
        const provider: any = await connectWallet();
        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        console.log(chainId);
        if (chainId !== 4) {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
          });
        }
        const contract = new web3.eth.Contract(
          ABI.abi as AbiItem[],
          "0x7eCc833A83CCC33eD8d4c8F63Ff49d8aF4F7E628"
        );
        const result = await contract.methods
          .checkIfWhitelisted(provider.accounts[0])
          .call();
        if (result) {
          setModalTitle("Already whitelisted");
          infoModal.open();
          return;
        }
        await contract.methods.getWhitelisted().send({
          from: provider.accounts[0],
        });
        setModalTitle("You are whitelisted!");
        infoModal.open();
      } catch (error) {
        console.log(error);
        alert(error);
      }
    } else {
      // код для обычных устройств
      Web3 = require("web3");
      if (typeof window.ethereum === "undefined") {
        setModalTitle("Please install MetaMask browser extension to interact");
        infoModal.open();
        return;
      }
      const web3 = new Web3(window.ethereum);

      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const chainId = await web3.eth.getChainId();
      if (chainId !== 4) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
        });
      }
      const contract = new web3.eth.Contract(
        ABI.abi as AbiItem[],
        "0x7eCc833A83CCC33eD8d4c8F63Ff49d8aF4F7E628"
      );
      const result = await contract.methods
        .checkIfWhitelisted(account[0])
        .call();
      if (result) {
        setModalTitle("Already whitelisted");
        infoModal.open();
        return;
      }
      await contract.methods.getWhitelisted().send({
        from: account[0],
      });
      setModalTitle("You are whitelisted!");
      infoModal.open();
    }
  }

  return (
    <GetWhitelistedContext.Provider
      value={{
        getWhitelisted,
        infoModal,
        modalTitle,
      }}
    >
      {children}
    </GetWhitelistedContext.Provider>
  );
};
export default GetWhitelistedProvider;
