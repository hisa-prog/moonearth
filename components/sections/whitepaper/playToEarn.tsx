import Title from "../../atoms/title";

const PlayToEarn = () => {
  return (
    <div
      id="playToEarn"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title
        animationTime={2}
        id="playToEarn"
        whitespace
        text="Play-To-Earn Ecosystem"
      />
      <div className="col-span-full opacity-70 mb-8">
        The Moon Earth Revolution environment empowers gamers via blockchain
        technology and NFTs.
        <br />
        Virtual tokens for digital scarcity, security, and authenticity are a
        growing niche in the worldwide gaming business. Each NFT is different or
        unique; it is indivisible and cannot be substituted for another.
        <br />
        NFTs and Blockchain technology will enable our esteemed players to enjoy
        the following benefits;
      </div>
      <div className="col-span-full">
        <div className="font-raitor text-2xl-h mb-1">Trading</div>
        <div className="opacity-70 mb-4">
          Blockchain-based gaming systems have the potential to provide
          consumers complete ownership over their digital assets. They may
          freely purchase and sell stuff without fear of being ripped off or a
          platform closing and canceling the worth of their in-game products.
        </div>
        <div className="font-raitor text-2xl-h mb-1">Durability</div>
        <div className="opacity-70 mb-4">
          Tokenized digital game objects may be readily sold in main and
          secondary marketplaces governed and facilitated by blockchain
          technology. Scarcity and demand-based items are prone to fraud and
          theft, but because blockchain is a distributed record, these risks are
          mitigated.
        </div>
        <div className="font-raitor text-2xl-h mb-1">Player Ownership</div>
        <div className="opacity-70">
          Gamers are the genuine and eternal proprietors of their digital
          things, even if the game has been discontinued. Every game object may
          be traded using the marketplace, letting players choose how they wish
          to trade, sell, or give their stuff. <br />
          {`Moon earth revolution utilizes a single token (RME) system to foster a clean economy among all players. Other tradables are LANDS, ASSETS, and RME tokens, built on the ERC20 standard and will serve as the ecosystem's official currency for purchasing products and services in the game marketplace (among other rights).`}
        </div>
      </div>
    </div>
  );
};

export default PlayToEarn;
