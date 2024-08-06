import type { NextPage } from "next";
import Roadmap from "../components/sections/roadmap";
import Conclusion from "../components/sections/whitepaper/conclusion";
import EconomicModel from "../components/sections/whitepaper/economicModel";
import ExecutiveSummary from "../components/sections/whitepaper/executiveSummary";
import FundAllocation from "../components/sections/whitepaper/fundAlocation";
import GameMarket from "../components/sections/whitepaper/gameMarket";
import Marketplace from "../components/sections/whitepaper/marketplace";
import Mission from "../components/sections/whitepaper/mission";
import NFT from "../components/sections/whitepaper/nft";
import PlayToEarn from "../components/sections/whitepaper/playToEarn";
import Token from "../components/sections/whitepaper/token";

const Whitepaper: NextPage = () => {
  return (
    <div className="">
      <ExecutiveSummary />
      <Mission />
      <PlayToEarn />
      <NFT />
      <Token />
      <EconomicModel />
      <GameMarket />
      <Marketplace />
      <Roadmap whitepaper />
      <FundAllocation />
      <Conclusion />
    </div>
  );
};

export default Whitepaper;
