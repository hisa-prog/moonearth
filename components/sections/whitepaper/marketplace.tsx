import Title from "../../atoms/title";

const Marketplace = () => {
  return (
    <div
      id="marketplace"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="marketplace" text="Marketplace" />
      <div className="col-span-full opacity-70">
        Smart contracts will regulate item auctions and transactions in the
        marketplace. This open marketplace will allow players to freely trade
        in-game content. <br />
        Other advantages of this marketplace include the automated integration
        of economic concepts of supply and demand into the system, allowing the
        community to determine the appropriate price of user-generated assets.
        However, the fundamental power of this market is that producers of such
        assets may now gain true concrete real-world value from the material
        they create.
      </div>
    </div>
  );
};

export default Marketplace;
