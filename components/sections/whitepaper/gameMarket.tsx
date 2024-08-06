import Title from "../../atoms/title";

const GameMarket = () => {
  return (
    <div
      id="gameMarket"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="gameMarket" text="Player Market" />
      <div className="col-span-full opacity-70 mb-8">
        Ownership and remuneration are less important to players who come to
        games to play and buy stuff rather than develop and sell them. Another
        issue that directly impacts these gamers is that they spend real-world
        money to purchase stuff in-game, but have no method of recovering it.{" "}
        <br /> <br />
        {`For example, if people quit playing a game, all the stuff they purchased becomes instantly useless. If the game is shut down for whatever reason, such as a drop in popularity that makes it less profitable, all the player's in-game purchases are lost forever. This is especially true when it comes to free-to-play (F2P) games. Purchases are one-way traffic. Players pay money to acquire items in the game but have no method of recovering their worth if they no longer use them and cannot lawfully sell them to another player, so they receive no recompense if the game is removed from the market.`}
      </div>
      <div className="col-span-full">
        <div className="font-raitor text-2xl-h mb-1">Our Solution</div>
        <div className="opacity-70 mb-4">
          {` Moon earth revolution’s player-centric innovations and enhancements over current market titles will make our game the people's choice. The initial stage of this process is forming a semi-decentralized gaming community, with certain components under the developers' control and others left to the gamers themselves.`}
        </div>
      </div>
    </div>
  );
};

export default GameMarket;
