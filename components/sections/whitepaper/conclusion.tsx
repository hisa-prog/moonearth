import Title from "../../atoms/title";

const Conclusion = () => {
  return (
    <div
      id="conclusion"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[180px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="conclusion" text="Conclusion" />
      <div className="col-span-full opacity-70">
        Moon earth revolution is a perfect product to develop from the
        intersection of cutting-edge blockchain, real-time visuals, MMORPG, and
        decentralized financial technology.
        <br />
        <br />
        {`The Moon earth revolution universe is based on the MMORPG genre, which results in exciting, long-term gameplay as factions battle it out in a constantly evolving spacescape. Players stake in-game assets to expand and develop their in-game territories, explore unique and distant planets, engage in high-stakes conflict, and control the game's features and future with earned political influence. `}
        <br />
        <br />
        Bringing all these enabling technologies together creates a
        once-in-a-lifetime opportunity for the future of banking, video games,
        entertainment, real-world professions, and blockchain, where individuals
        can make money while having a good time. All of this occurs in the
        unfamiliar frontier of space, where exploration is terrifyingly cold and
        full of unwavering hope.
        <br />
        <br />
        It is an exciting moment to witness the emergence of WEB3 technologies,
        virtual reality, and online gaming and how they connect and create
        immersive environments that blur the barriers between reality and
        imagination.
      </div>
    </div>
  );
};

export default Conclusion;
