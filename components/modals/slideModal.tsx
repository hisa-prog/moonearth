import Image from "next/image";
import OrbitsImage from "../atoms/orbitsImage";
import ModalLayout from "../layout/modalLayout";

export interface ISlideModal {
  slideModal: any;
  name: string;
  listOfParagraphs: Array<string>;
  // includes: Array<{
  //     text: string
  // }>;
  index: number;
  img: string;
}

const includes = [
  "Moonstone - Building material ",
  "Regolith (Moon soil) - Fertilizer for growing 	crops ",
  "Water - Basic life resource ",
  "Oxygen - Basic life resource",
];

const SlideModal = ({
  slideModal,
  name,
  listOfParagraphs,
  // includes,
  index,
  img,
}: ISlideModal) => {
  return (
    <ModalLayout {...slideModal}>
      <div className="bg-bgSlideModal 3xl:w-[1440px] xxl:w-[912px] xl:w-[912px] lg:w-[890px]  md:w-[580px] w-[325px] lg:min-h-[468px] rounded-30px px-6 py-8 lg:p-8 z-50 flex flex-col-reverse  lg:grid lg:grid-cols-2-40/60 grid-cols-1 lg:gap-8 relative">
        <div className="flex flex-col justify-between">
          <img className={`w-full z-10`} src={img} alt={name + " planet"} />
          <div className="flex gap-x-4 items-center justify-center lg:self-center mb-4">
            <p className="lg:text-center xl:text-auto font-prompt text-thin-m lg:text-thin-l uppercase tracking-02em text-white/70">
              {index + " of"}
            </p>
            <img className="" src="/images/lineOnSlider.svg" alt="" />
            <p className="lg:text-center xl:text-auto font-prompt text-thin-m lg:text-thin-l uppercase tracking-02em text-white/70">
              10 planets
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:pr-8">
          <div className="flex justify-between mb-5">
            <p className="font-raitor font-normal text-2xl-h">{name}</p>
            <img
              src="/images/closeIcon.svg"
              alt={"close"}
              className="relative z-10 cursor-pointer w-6"
              onClick={(e) => {
                slideModal.close();
              }}
            />
          </div>
          {listOfParagraphs?.map((item: any, index: number) => {
            return (
              <p
                key={`index_${index}`}
                className="font-prompt font-normal text-white/70 text-lg-xs mb-1"
              >
                {item}
              </p>
            );
          })}
          {name === "Moon" ? (
            <>
              <p className="font-prompt font-normal text-white/70 text-lg-xs mt-4 mb-2">
                Some of these rarities may include:
              </p>
              {includes?.map((item, index) => (
                <div key={index} className="flex items-center mb-1 last:mb-0">
                  {/* <img className="" src="/images/orbits.svg" alt="orbits" /> */}
                  <OrbitsImage />
                  <p className="font-prompt font-normal text-white/70 text-lg-xs pl-2">
                    {item}
                  </p>
                </div>
              ))}
              <div className="font-prompt font-normal text-white/70 text-lg-xs mt-4">
                Team up with friends to form alliances to dominate in fights for
                resources, territorial conquest, and political authority. You
                will have the potential to affect the fate of this new colony
                while also earning prizes for your actions.
              </div>
            </>
          ) : null}
          <div className="absolute hidden lg:block left-0 top-0">
            <Image
              src="/images/orbitsModal.webp"
              alt="orbits"
              width={468}
              height={489}
              objectFit="cover"
            />
          </div>
          {/* <img className="absolute hidden lg:block left-0 top-0" src="/images/orbitsModal.webp" alt="orbits" /> */}
          <img
            className="absolute block lg:hidden right-0 bottom-0"
            src="/images/orbitusModalMobile.webp"
            alt="orbits"
            loading="lazy"
          />
        </div>
      </div>
    </ModalLayout>
  );
};
export default SlideModal;
