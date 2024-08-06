import type { NextPage } from "next";
import MainTitle from "../components/sections/mainTitle";
import Porthole from "../components/sections/porthole";
import EscapeToTheMoon from "../components/sections/escapeToTheMoon";
import ExploreAllPlanets from "../components/sections/exploreAllPlanets";
import NFT from "../components/sections/nft";
import Roadmap from "../components/sections/roadmap";
// import Blog from '../components/sections/blog'
import Team from "../components/sections/team";
import MoonEarthCharacters from "../components/sections/moonEarthCharacters";
import GameFeatures from "../components/sections/gameFeatures";
import Partners from "../components/sections/partners";

const Home: NextPage = () => {
  return (
    <>
      <MainTitle />
      <Porthole />
      <EscapeToTheMoon />
      <ExploreAllPlanets />
      <MoonEarthCharacters />
      <NFT />
      <GameFeatures />
      <Roadmap />
      {/* <Blog /> */}
      <Team />
      <Partners />
    </>
  );
};

export default Home;
