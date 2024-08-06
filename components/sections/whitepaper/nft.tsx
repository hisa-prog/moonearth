import OrbitsImage from "../../atoms/orbitsImage";
import Title from "../../atoms/title";

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

  return (
    <div
      id="nft"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="nft" text="Land NFT" maxWidth />
      <div className="col-span-full opacity-70 mb-6">
        LANDS are blockchain-backed virtual assets representing actual parcels
        of Land on different planets in our Metaverse (using the ERC-721
        standard for NFTs). Each plot of land is an NFT, representing an
        ownership stake in that planet or the Moon. Plots are limited to 1000
        per planet.
        <br />
        Owning or renting an NFT plot will be the only way to generate in-game
        tokens and also grants governance rights in that planetary DAO. <br />
        Interplanetary DAO governance is tied to the in-game token. Owners can
        submit recommendations and vote on specific game features, treasury
        usage, attributes, and development.
        <br />
        Planetary DAO members will have a say in everything that impacts that
        planet, such as governance, trading allegiances, exports, etc. This will
        affect gameplay and interplanetary connections in the same way that
        governments of individual countries do on Earth.
        <br />
        The Moon Earth Federation owns unsold land until it is purchased.
        <br />
        Each planet will have its distinct and interactive environment, offering
        chances to DAOs and players through land-based commerce, environmental
        resources, skins, gaming, and other means.
      </div>
      <div className="col-span-full">
        <div className="opacity-70 mb-3">NFT landowners will be able to:</div>
        {advantagesNft.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-3 lg:mb-2 last:mb-0 opacity-[0.85]"
          >
            <OrbitsImage />
            <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
              {item}
            </p>
          </div>
        ))}
        <div className="opacity-70 mt-6">
          Each plot contains common, rare, and legendary elements and artifacts
          that will be needed in-game, adding value to them. Additional rare and
          legendary NFTs could also be unearthed.
        </div>
      </div>
    </div>
  );
};

export default NFT;
