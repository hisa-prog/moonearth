import OrbitsImage from "../../atoms/orbitsImage";
import Title from "../../atoms/title";

const EconomicModel = () => {
  const economicModelList = [
    "The global gaming market is expected to reach: USD 171.96 billion3 by 2025",
    "The mobile gaming segment is expected to gain momentum and exhibit a compounded annual growth rate (CAGR) of 7.3% over the next eight years, owing to increasing smartphone penetration globally",
    "The online segment is expected to expand at a CAGR of 8.6% from 2020 to 2025. This may be linked to rising internet penetration and increased online betting, gambling, and social network gaming.",
    "The Asia Pacific market is predicted to grow, with a market value of USD 86.84 billion by 2025. Emerging markets such as China, India, and South Korea provide attractive growth potential for market augmentation, which may be ascribed partly to these nations' increasing smartphone and Internet usage.",
  ];

  return (
    <div
      id="economicModel"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.8} id="economicModel" text="Economic Model" />
      <div className="col-span-full opacity-70 mb-6">
        The current gaming industry offers Moon earth revolution a unique chance
        to capitalize on both PC/Mac and mobile platforms, as the ability to
        move power and earning potential into the hands of players in the
        booming UGC gaming market will add considerable value to their gameplay
        experience.
      </div>
      <div className="col-span-full opacity-[0.85]">
        {economicModelList.map((item, index) => (
          <div key={index} className="flex items-center mb-3 lg:mb-2 last:mb-0">
            <OrbitsImage />
            <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EconomicModel;
