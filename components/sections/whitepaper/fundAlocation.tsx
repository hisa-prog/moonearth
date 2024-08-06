import Title from "../../atoms/title";

const dataList = [
  {
    percent: 75,
    title: "Game & Ecosystem Development",
  },
  {
    percent: 2.5,
    title: "Advisor",
  },
  {
    percent: 5,
    title: "Marketing",
  },
  {
    percent: 17.5,
    title: "Team",
  },
];

const FundAllocation = () => {
  return (
    <div
      id="fundAllocation"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="fundAllocation" text="Fund allocation" />
      <div className="col-span-full grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-x-5">
        {dataList.map((item, index) => {
          return (
            <div key={`fundAllocation_${index}`} className="mb-4 lg:mb-0">
              <div className="opacity-70 relative sm:max-w-[199px] sm:max-h-[199px] 3xl:w-[236px] 2xl:max-w-[236px] 2xl:max-h-[236px]">
                <div className="text-4xl-l font-raitor absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                  {item.percent}%
                </div>
                <img
                  src="/images/ellipse.svg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="text-center max-w-[199px] mt-4 mx-auto font-raitor text-xs-xl">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundAllocation;
