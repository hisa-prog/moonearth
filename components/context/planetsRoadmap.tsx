import React, { useState, useEffect } from "react";

interface Props {
  children: any;
}

interface IPlanetRoadmap {
  time: string;
  status: boolean;
  year: number;
  img: string;
  description: Array<{ text: string }>;
  padding: string;
  col?: string;
  exception?: boolean;
}

const planets: IPlanetRoadmap[] = [
  {
    time: "Q4",
    status: true,
    year: 2021,
    img: "/images/roadmap/earth.webp",
    description: [
      { text: "Startup development" },
      { text: "Market research" },
      { text: "R&D confirmation of the feasibility of the project" },
      { text: "Team Building" },
    ],
    col: "col-start-2",
    padding: "pt-4 xxl:pt-8",
  },
  {
    time: "Q1",
    status: true,
    year: 2022,
    img: "/images/roadmap/mercury.webp",
    description: [
      { text: "Securing strategic partners & Advisor" },
      { text: "Marketing strategy" },
      { text: "Brand development" },
    ],
    padding: "pt-0",
  },
  {
    time: "Q2",
    status: true,
    year: 2022,
    img: "/images/roadmap/venus.webp",
    description: [
      { text: "Website development" },
      { text: "NFT smart contract development" },
    ],
    padding: "pt-0",
  },
  {
    time: "Q3",
    status: true,
    year: 2022,
    img: "/images/roadmap/mars.webp",
    description: [
      { text: "NFT designing and development" },
      { text: "Website updates" },
      { text: "Partnership with Crowdcreate" },
      { text: "​​Partnership with Plan 9" },
      { text: "Upcoming Game studio partnership ****" },
      { text: "Moon Paper development" },
      { text: "NFT Minting Site Live" },
      { text: "Team expansion" },
      { text: "Social Media marketing" },
      { text: "Partnerships Expansion" },
      { text: "Social media development, promotions, and growth " },
      { text: "Starting AMA sessions" },
      { text: "PR campaigns" },
    ],
    padding: "pt-0",
  },
  {
    time: "Q4",
    status: true,
    year: 2022,
    img: "/images/roadmap/pluto.webp",
    description: [{ text: "Minting of LAND NFTs" }],
    padding: "pt-4",
  },
  {
    time: "Q3",
    status: false,
    year: 2024,
    img: "/images/roadmap/neptune.webp",
    description: [
      { text: "Launch Full 3D game with NFT integration" },
      { text: "Enable cross-chain trading for Marketplace" },
    ],
    padding:
      "5xl:pt-16 3xl:pt-4 xxl:pt-20 2xl:pt-36 lg:pt-0 1lg:pt-12 col-start-4",
  },
  {
    time: "Q2",
    status: false,
    year: 2024,
    img: "/images/roadmap/mars2.webp",
    description: [{ text: "Game Alpha version release" }],
    padding:
      "5xl:pt-16 3xl:pt-4 xxl:pt-16 2xl:pt-32 lg:pt-0 1lg:pt-12 col-start-6",
  },
  {
    time: "Q1",
    status: false,
    year: 2024,
    img: "/images/roadmap/uranus.webp",
    description: [
      {
        text: "MVP (game) development",
      },
      { text: "In-Game assets development" },
      { text: "Access to in-game wallet function development" },
    ],
    padding:
      "5xl:pt-16 3xl:pt-4  xxl:pt-16 2xl:pt-32 lg:pt-0 1lg:pt-12 col-start-8",
  },
  {
    time: "Q1",
    status: true,
    year: 2023,
    img: "/images/roadmap/saturn.webp",
    description: [
      { text: "Game intro launch" },
      { text: "In-game token distribution Round 1" },
      { text: "Token contract audit" },
      { text: "Initial DAO constitutions" },
      { text: "First DEX listing" },
      { text: "Staking and LP pools live" },
      { text: "Genesis NFT Sale" },
      { text: "Development of in-game marketplace" },
      { text: "Main Gaming Framework Development" },
      { text: "​​CEX listing" },
    ],
    padding:
      "5xl:pt-20 3xl:pt-4 lg:-pt-4 1lg:pt-0 1lg:top-8 2xl:pt-16 relative 2xl:top-8 3xl:-top-4 col-start-10",
    exception: true,
  },
];

const planetsMobile: IPlanetRoadmap[] = [
  {
    time: "Q4",
    status: true,
    year: 2021,
    img: "/images/roadmap/earth.webp",
    description: [
      { text: "Startup development" },
      { text: "Market research" },
      { text: "R&D confirmation of the feasibility of the project" },
      { text: "Team Building" },
    ],
    padding: "pt-12",
  },
  {
    time: "Q1",
    status: true,
    year: 2022,
    img: "/images/roadmap/mercury.webp",
    description: [
      { text: "Securing strategic partners & Advisor" },
      { text: "Marketing strategy" },
      { text: "Brand development" },
    ],
    padding: "pt-4",
  },
  {
    time: "Q2",
    status: true,
    year: 2022,
    img: "/images/roadmap/venus.webp",
    description: [
      { text: "Website development" },
      { text: "NFT smart contract development" },
    ],
    padding: "pt-0",
  },
  {
    time: "Q3",
    status: true,
    year: 2022,
    img: "/images/roadmap/mars.webp",
    description: [
      { text: "NFT designing and development" },
      { text: "Website updates" },
      { text: "Partnership with Crowdcreate" },
      { text: "​​Partnership with Plan 9" },
      { text: "Upcoming Game studio partnership ****" },
      { text: "Moon Paper development" },
      { text: "NFT Minting Site Live" },
      { text: "Team expansion" },
      { text: "Social Media marketing" },
      { text: "Partnerships Expansion" },
      { text: "Social media development, promotions, and growth " },
      { text: "Starting AMA sessions" },
      { text: "PR campaigns" },
    ],
    padding: "pt-0",
  },
  {
    time: "Q4",
    status: true,
    year: 2022,
    img: "/images/roadmap/pluto.webp",
    description: [{ text: "Minting of LAND NFTs" }],
    padding: "pt-4",
  },
  {
    time: "Q1",
    status: true,
    year: 2023,
    img: "/images/roadmap/saturn.webp",
    description: [
      { text: "Game intro launch" },
      { text: "In-game token distribution Round 1" },
      { text: "Token contract audit" },
      { text: "Initial DAO constitutions" },
      { text: "First DEX listing" },
      { text: "Staking and LP pools live" },
      { text: "Genesis NFT Sale" },
      { text: "Development of in-game marketplace" },
      { text: "Main Gaming Framework Development" },
      { text: "​​CEX listing" },
    ],
    padding: "pt-10",
    exception: true,
  },
  {
    time: "Q1",
    status: false,
    year: 2024,
    img: "/images/roadmap/uranus.webp",
    description: [
      {
        text: "MVP (game) development",
      },
      { text: "In-Game assets development" },
      { text: "Access to in-game wallet function development" },
    ],
    padding: "pt-8",
  },
  {
    time: "Q2",
    status: false,
    year: 2024,
    img: "/images/roadmap/mars2.webp",
    description: [{ text: "Game Alpha version release" }],
    padding: "pt-8",
  },
  {
    time: "Q3",
    status: false,
    year: 2024,
    img: "/images/roadmap/neptune.webp",
    description: [
      { text: "Launch Full 3D game with NFT integration" },
      { text: "Enable cross-chain trading for Marketplace" },
    ],
    padding: "pt-16",
  },
];

const PlanetsRoadmapLaptopContext = React.createContext({
  roadmapList: planets,
  setRoadmapList: (arg: IPlanetRoadmap[]) => {},
  roadmapMobileList: planetsMobile,
  setRoadmapMobileList: (arg: IPlanetRoadmap[]) => {},
});

const PlanetsRoadmapLaptopContextProvider = ({ children }: Props) => {
  const [roadmapList, setRoadmapList] = useState<IPlanetRoadmap[]>([]);
  const [roadmapMobileList, setRoadmapMobileList] = useState<IPlanetRoadmap[]>(
    []
  );

  useEffect(() => {
    setRoadmapList(planets);
    setRoadmapMobileList(planetsMobile);
  }, [planets, planetsMobile]);

  return (
    <PlanetsRoadmapLaptopContext.Provider
      value={{
        roadmapList,
        setRoadmapList,
        roadmapMobileList,
        setRoadmapMobileList,
      }}
    >
      {children}
    </PlanetsRoadmapLaptopContext.Provider>
  );
};

export default PlanetsRoadmapLaptopContextProvider;

export { PlanetsRoadmapLaptopContext };
