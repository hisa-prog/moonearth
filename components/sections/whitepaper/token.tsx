import Title from "../../atoms/title";

const Token = () => {
  return (
    <div
      id="token"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title maxWidth animationTime={1.9} id="token" text="Land Token (RME)" />
      <div className="col-span-full opacity-70 mb-8">
        RME is a critical component of the Moon earth revolution game, and we’re
        trying to build fundamental mechanisms that will make the RME token
        inextricably linked to Moon earth revolution and its value. RME will be
        an ERC-20 utility token based on the Ethereum blockchain that acts as
        the foundation for transactions within Moon earth revolution and may be
        used for the following purposes:
      </div>
      <div className="col-span-full">
        <div className="font-raitor text-2xl-h mb-1">Access</div>
        <div className="opacity-70 mb-4">
          Players pay RME to play, travel, and acquire equipment, weapons, or
          modify their Avatar attributes. Players spend RME to acquire ASSETS,
          LANDS, and through Staking. Purchasing Land NFT will be the only way
          to earn RME tokens at the beginning.
        </div>
        <div className="font-raitor text-2xl-h mb-1">Governance</div>
        <div className="opacity-70 mb-4">
          RME is a governance token that allows holders to participate in
          platform governance decisions via a DAO framework. They have the
          ability to vote on essential features in interplanetary governance, as
          well as feature prioritization on the platform Roadmap. RME owners can
          vote personally or delegate voting privileges to other players of
          their choosing.
        </div>
        <div className="font-raitor text-2xl-h mb-1">Staking</div>
        <div className="opacity-70">
          RME is staking enabled, which allows for passive money on Lands:
          staking gives you additional RME. This is also one of the methods to
          obtain game rarities and Gems, which are required for game
          progression.
        </div>
      </div>
    </div>
  );
};

export default Token;
