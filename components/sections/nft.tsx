import { useEffect, useState } from "react";
import Img from "../atoms/img";
import OrbitsImage from "../atoms/orbitsImage";

const NFT = () => {
  const advantagesNft = [
    "Buy and sell land",
    "Rent out the land",
    "Advertise on their property",
    "Stake their NFT and earn passive income",
    "Participate in LP farming",
    "NFT holders will be airdropped in-game tokens",
    "Land resources can be mined and sold",
  ];

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("nft")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <>
      <div
        id="nft"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center md:px-8 px-4 pb-[100px] lg:pb-32 relative"
      >
        <div
          className="hidden lg:flex md:hidden ml-0 relative flex-col col-span-full lg:col-start-2 lg:col-span-5 h-fit w-full p-5 lg:p-10 bg-nftCard border border-nftCardBorder rounded-20px
             lg:top-0"
        >
          <div className="w-full lg:mb-8 mb-5">
            <Img
              src="/images/ntfUtilitie.webp"
              alt="ntfUtilitie"
              width="100%"
              height="50%"
              objectFit="contain"
              layout="responsive"
            />
            {/* <img className="w-full" src="/images/ntfUtilitie.webp" alt="ntfUtilitie" /> */}
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="font-raitor lg:text-3xl-h text-2xl-h">Mars</p>
            <p className="uppercase font-prompt font-normal lg:text-xs-xl text-thin-l tracking-02em">
              nft card
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4 lg:mb-3 font-raitor font-normal text-lg-md">
              Benefits for NFT landowners
            </p>
            {advantagesNft.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-3 lg:mb-2 last:mb-0"
              >
                {/* <img className="" src="/images/orbits.svg" alt="orbits" /> */}
                <OrbitsImage />
                <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-span-5 md:col-span-8 col-span-4 h-max grid lg:grid-cols-5 grid-cols-4 gap-x-4 items-center">
          <p
            className={`${
              typeof window !== "undefined" && window.innerWidth > 768
                ? isVisible
                  ? "animatedTitle visible"
                  : "invisible"
                : ""
            } 
                lg:col-span-5 col-span-4 max-w-fit font-raitor font-normal 
                xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase lg:text-left mb-6 lg:mb-8 lg:ml-0 md:ml-0`}
            style={{ "--animationTime": 2 + "s" } as any}
          >
            NFT utilities
          </p>
          <div className="col-span-4 mb-2 lg:mb-1 font-raitor text-lg-s lg:text-2xl-h">
            DAO Membership
          </div>
          <div className="col-span-4 font-prompt font-normal opacity-70 mb-4">
            Planetary DAO members will have a say in everything that impacts
            that planet, such as governance, trading allegiances, exports, etc.
            This will affect gameplay and interplanetary connections in the same
            way that governments of individual countries do on Earth. Each
            planet will have its own distinct and interactive environment,
            offering chances to DAOs and players through land-based commerce,
            environmental resources, skins, gaming, and other means.
          </div>
          <div className="col-span-4 mb-2 lg:mb-1 font-raitor text-lg-s lg:text-2xl-h">
            Rare and legendary NFTs
          </div>
          <div className="col-span-4 font-prompt font-normal opacity-70">
            Each plot contains common, rare, and legendary elements and
            artifacts that will be needed in-game, adding value to them.
            Additional rare and legendary NFTs could also be unearthed.
          </div>
        </div>
        <div
          className="md:flex mt-6 lg:hidden ml-0 relative flex-col col-span-full lg:col-start-2 lg:col-span-5 h-fit w-full p-5 lg:p-10 bg-nftCard border border-nftCardBorder rounded-20px
             lg:top-0"
        >
          <div className="w-full lg:mb-8 mb-5">
            <Img
              src="/images/ntfUtilitie.webp"
              alt="ntfUtilitie"
              width="100%"
              height="50%"
              objectFit="contain"
              layout="responsive"
            />
            {/* <img className="w-full" src="/images/ntfUtilitie.webp" alt="ntfUtilitie" /> */}
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="font-raitor lg:text-3xl-h text-2xl-h">Mars</p>
            <p className="uppercase font-prompt font-normal lg:text-xs-xl text-thin-l tracking-02em">
              nft card
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="mb-4 lg:mb-3 font-raitor font-normal text-lg-md">
              Benefits for NFT landowners
            </p>
            {advantagesNft.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-3 lg:mb-2 last:mb-0"
              >
                {/* <img className="" src="/images/orbits.svg" alt="orbits" /> */}
                <OrbitsImage />
                <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NFT;
