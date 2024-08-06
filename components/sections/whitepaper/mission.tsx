import Title from "../../atoms/title";

const Mission = () => {
  return (
    <div
      id="mission"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center  mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="mission" text="Mission" />
      <div className="col-span-full opacity-70">
        Moon earth revolution is an online and NFT land-based Play-To-Earn
        gaming firm dedicated to providing our clients with the greatest gaming
        experience possible while also making money.
        <br /> <br />
        Our objective is to provide a profoundly immersive game world in which
        users collaborate to develop space colonies and communities with no
        central authority. We want to disrupt incumbent game makers by giving
        players actual ownership of the LAND in the form of non-fungible tokens
        (NFTs) and rewarding participation with our utility token (RME).
        <br /> <br />
        The centralized ownership and management of user-generated material in
        the present gaming market limit creative rights and ownership.
        <br /> <br />
        Moon earth revolution wants to make gaming enjoyable and exciting while
        providing its clientele with a one-of-a-kind socializing and business
        experience. We promise our customers a diverse assortment of characters,
        communities, stories, and gaming experiences. Because of our unwavering
        commitment to innovation and creativity, Moon earth revolution will
        never bore you.
      </div>
    </div>
  );
};

export default Mission;
