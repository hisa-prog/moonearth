import React, { useState } from "react";

interface Props {
  children: any;
}

export interface ISummaryApi {
  id: string;
  visible: boolean;
}

const TitleContext = React.createContext<{
  isVisible: any;
  setIsVisible: any;
}>({
  isVisible: [],
  setIsVisible: (arg: ISummaryApi[]) => {},
});

const TitleContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState([
    {
      id: "conclusion",
      visible: false,
    },
    {
      id: "economicModel",
      visible: false,
    },
    {
      id: "fundAllocation",
      visible: false,
    },
    {
      id: "executiveSummary",
      visible: false,
    },
    {
      id: "gameMarket",
      visible: false,
    },
    {
      id: "playToEarn",
      visible: false,
    },
    {
      id: "nft",
      visible: false,
    },
    {
      id: "marketplace",
      visible: false,
    },
    {
      id: "mission",
      visible: false,
    },
  ]);

  return (
    <TitleContext.Provider
      value={{
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;

export { TitleContext };
