import "swiper/css";
import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import PlanetSlide from "../atoms/planetSlide";
import { useModal } from "../layout/modalLayout";
import SlideModal from "../modals/slideModal";

SwiperCore.use([Navigation]);

const planets: Array<{
  name: string;
  img: string;
  title: string;
  listOfParagraphs: Array<string>;
  includes?: Array<{ text: string }>;
}> = [
  {
    name: "Moon",
    img: "/images/slider/moon.webp",
    title: `The Moon is the sole natural satellite of Earth and the closest inhabitable body to planet earth. Naturally, it's the first alternative humans could think of after losing their native planet. Despite its proximity, it is a lifeless desert covered in craters and dunes of black sand, which poses a challenge to scientists and researchers.`,
    listOfParagraphs: [
      `The Moon is the sole natural satellite of Earth and the closest inhabitable body to planet earth. Naturally, it's the first alternative humans could think of after losing their native planet. Despite its proximity, it is a lifeless desert covered in craters and dunes of black sand, which poses a challenge to scientists and researchers.
      `,
      ` In Moon Earth Revolution, the Moon stands for new hope for humanity. All players can purchase portions/pieces of LAND (ERC-721 standard for NFTs); every piece of LAND on the Moon has its unique rarity in fertility or deposits of rare minerals.`,
    ],
  },
  {
    name: "Mercury",
    img: "/images/slider/mercury.webp",
    title: `Mercury has the shortest and fastest orbit around the Sun, and its temperature swings dramatically as it turns. It's an extreme world. Despite the enormous heat experienced by the planet as it rotates, places that are constantly shadowed, such as some polar craters, may have ice deposits.
      `,
    listOfParagraphs: [
      `Mercury has the shortest and fastest orbit around the Sun, and its temperature swings dramatically as it turns. It's an extreme world. Despite the enormous heat experienced by the planet as it rotates, places that are constantly shadowed, such as some polar craters, may have ice deposits.`,
      ` Temperature swings from day to night make it impossible for life as we know it to thrive on Mercury. Also, Mercury has notorious Gamma rays produced in neutron stars and pulsars, supernova explosions, and regions around black holes.
      `,
      ` 
      If humans can colonize the Moon, next in line is this tiny planet. It boasts vast uninhabited plains with many mineral deposits ripe for humans to mine.`,
    ],
  },
  {
    name: "Venus",
    img: "/images/slider/venus.webp",
    title: `Venus is sometimes referred to as Earth's sister planet because of its size, mass, and composition. Venus has a similar-sized iron core to Earth. On Venus, scientists discovered phosphine. `,
    listOfParagraphs: [
      `Venus is sometimes referred to as Earth's sister planet because of its size, mass, and composition. Venus has a similar-sized iron core to Earth. On Venus, scientists discovered phosphine.`,
      `This gas is produced on Earth by bacteria that dwell in oxygen-free conditions. It implies that we may have discovered evidence of living things in the clouds of our neighboring planet.`,
      `Venus is home to a variety of mineral-rich ores! Materials made of Venetian minerals are more reflective than any mirror and can be used for optics, subatomic microscopes, and telescopes.`,
    ],
  },
  {
    name: "Earth",
    img: "/images/slider/earth.webp",
    title: `Once home to humans, now it's a lonely planet with nothing but memories and a few raw materials essential for humanity to thrive in her new colonies far from Earth. `,
    listOfParagraphs: [
      `Once home to humans, now it's a lonely planet with nothing but memories and a few raw materials essential for humanity to thrive in her new colonies far from Earth. 
      `,
      ` Among these resources is pliable DNA, utilized in building just about any life form. Water, raw carbon, and farmland are all necessary materials the Earth still provides.`,
    ],
  },
  {
    name: "Mars",
    img: "/images/slider/mars.webp",
    title: `Mars, a cold, dry, dusty planet with a thin atmosphere, is the fourth planet from the Sun. Mars is a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was once far more active.`,
    listOfParagraphs: [
      `Mars, a cold, dry, dusty planet with a thin atmosphere, is the fourth planet from the Sun. Mars is a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was once far more active.  
      `,
      ` Mars is essential in Moon Earth Revolution as it is the only planet aside from the Earth with microbes (Martian micro-dragons) capable of healing. Land NFTs of planets Mars sure come at a premium!`,
    ],
  },
  {
    name: "Jupiter",
    img: "/images/slider/jupiter.webp",
    title: `Jupiter is larger than all the other planets put together. It takes about 12 Earth years to orbit the Sun and rotates once every 10 hours, which is more than twice as quickly as Earth; its colorful cloud bands can be observed with a modest telescope.`,
    listOfParagraphs: [
      `Jupiter is larger than all the other planets put together. It takes about 12 Earth years to orbit the Sun and rotates once every 10 hours, which is more than twice as quickly as Earth; its colorful cloud bands can be observed with a modest telescope.
      `,
      ` Some astronomers believe Jupiter's moon Europa may be hiding an ocean of warm water—and potentially even life—below its icy cover.`,
      `
      Jupiter has rare essential elements like Dark Matter, AntiMatter, and Atium. All of which are capable of healing, extending life, creating rain clouds, and or manipulating time. The race to explore Jupiter could be the "California Gold Rush."
      `,
    ],
  },
  {
    name: "Saturn",
    img: "/images/slider/saturn.webp",
    title: `The second-largest planet in our solar system, Saturn, is located at a distance of six planets from the Sun. Saturn, a gas giant like Jupiter, is a large globe composed of hydrogen and helium.`,
    listOfParagraphs: [
      `The second-largest planet in our solar system, Saturn, is located at a distance of six planets from the Sun. Saturn, a gas giant like Jupiter, is a large globe composed of hydrogen and helium.
      `,
      ` Although other planets also have rings, none are as magnificent or intricate as Saturn's. Numerous moons orbit Saturn as well.`,
      `Saturn houses magical elements like White Adamantium, a super-strong element 100,000 times stronger than steel. Battle-thirsty players will have a swell time mining this unique planet.`,
    ],
  },
  {
    name: "Uranus",
    img: "/images/slider/uranus.webp",
    title: `In our solar system, Uranus, the seventh planet from the Sun, has the third-largest diameter. Despite first believing it to be either a comet or a star, astronomer William Herschel discovered Uranus in 1781, making it the first planet to be spotted with a telescope.`,
    listOfParagraphs: [
      `In our solar system, Uranus, the seventh planet from the Sun, has the third-largest diameter. Despite first believing it to be either a comet or a star, astronomer William Herschel discovered Uranus in 1781, making it the first planet to be spotted with a telescope.
      `,
      ` Dilithium, a gaseous form of power capable of powering spacecraft at the speed of light. To blow your mind, Uranus also contains water and radioactive elements like Uranium and Plutonium.`,
    ],
  },
  {
    name: "Neptune",
    img: "/images/slider/neptune.webp",
    title: `The eighth and farthest known Solar planet from the Sun is Neptune. It is the third-most massive, fourth-largest by diameter, and densest giant planet in the Solar System. `,
    listOfParagraphs: [
      `The eighth and farthest known Solar planet from the Sun is Neptune. It is the third-most massive, fourth-largest by diameter, and densest giant planet in the Solar System. `,
      `Neptune contains Dark matter, Antimatter, and Helium-3. `,
    ],
  },
  {
    name: "Pluto",
    img: "/images/slider/pluto.webp",
    title: `Pluto is a dwarf planet in the Kuiper belt, a ring of worlds beyond Neptune's orbit. The farthest planet from Earth and its Moon. It takes a lot to journey out to this remote planet. Still, Moon Earth makes it worthwhile by giving it crucial minerals like Plutothium, Plutonium, Uranium, Metal oxides, and a host of other mineral elements like Gold, silver, and Platinum.`,
    listOfParagraphs: [
      `Pluto is a dwarf planet in the Kuiper belt, a ring of worlds beyond Neptune's orbit. The farthest planet from Earth and its Moon. It takes a lot to journey out to this remote planet. Still, Moon Earth makes it worthwhile by giving it crucial minerals like Plutothium, Plutonium, Uranium, Metal oxides, and a host of other mineral elements like Gold, silver, and Platinum.`,
    ],
  },
];

const ExpolreAllPlanets = () => {
  const [slider, setSlider] = useState<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numOfSlides, setNumOfSlides] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const slideModal = useModal();

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 460) {
      setNumOfSlides(1);
      setCurrentIndex(4);
      setIsMobile(true);
    } else if (width <= 1024) {
      setNumOfSlides(3);
    } else setNumOfSlides(5);
  }, []);

  useEffect(() => {
    if (slider) {
      const width = window.innerWidth;
      if (width <= 460) {
        slider?.slideTo(1);
      } else if (width <= 1024) {
        slider?.slideTo(3);
      } else {
        slider?.slideTo(5);
      }
    }
  }, [slider]);

  return (
    <>
      <SlideModal
        slideModal={slideModal}
        name={planets[currentIndex - 1]?.name}
        listOfParagraphs={planets[currentIndex - 1]?.listOfParagraphs}
        index={currentIndex}
        img={planets[currentIndex - 1]?.img}
      />
      <div
        id="lands"
        className="flex flex-col items-center justify-center bg-space bg-center bg-cover lg:px-16 pb-[120px] lg:pb-32 relative"
      >
        <div className="flex items-center justify-center relative w-full h-full">
          <Swiper
            modules={[Navigation]}
            // spaceBetween={16}
            slidesPerView={numOfSlides}
            centeredSlides={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSwiper={(swiper) => {
              //@ts-ignore
              setSlider(swiper);
            }}
            initialSlide={5}
            onSlideChange={(swiper) => {
              if (window.innerWidth >= 1280) {
                if (
                  swiper.activeIndex + 1 === planets.length + 5 ||
                  swiper.activeIndex + 1 === planets.length - 5
                ) {
                  setCurrentIndex(planets.length);
                } else
                  setCurrentIndex((swiper.activeIndex - 4) % planets.length);
              } else if (window.innerWidth >= 460) {
                if (swiper.activeIndex + 1 === planets.length + 3) {
                  setCurrentIndex(planets.length);
                } else if (swiper.activeIndex === planets.length - 3) {
                  setCurrentIndex((swiper.activeIndex - 2) % planets.length);
                } else if (swiper.activeIndex - 2 === 0) {
                  setCurrentIndex(planets.length);
                } else
                  setCurrentIndex((swiper.activeIndex - 2) % planets.length);
              } else if (window.innerWidth >= 280) {
                if (swiper.activeIndex === planets.length) {
                  setCurrentIndex(planets.length);
                } else if (swiper.activeIndex === 0) {
                  setCurrentIndex(planets.length);
                } else setCurrentIndex(swiper.activeIndex % planets.length);
              }
            }}
            loop={true}
            style={{
              width: "90%",
              paddingTop: "145px",
            }}
          >
            {planets.map((item, index) => {
              return (
                <SwiperSlide slot="container-start" key={index + 1}>
                  <PlanetSlide
                    index={index}
                    name={item.name}
                    title={item.title}
                    img={item.img}
                    openModal={() => slideModal.open()}
                    indexPlanet={currentIndex}
                    planets={planets}
                    isMobile={isMobile}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="lg:block hidden">
            <img
              src="/images/slider/sliderArrow.svg"
              alt=""
              style={{ width: "40px", height: "40px" }}
              className="transform rotate-180 cursor-pointer swiper-button-prev z-5"
            />
          </div>
          <div className="lg:block hidden ">
            <img
              src="/images/slider/sliderArrow.svg"
              alt=""
              style={{ width: "40px", height: "40px" }}
              className="cursor-pointer swiper-button-next z-5"
            />
          </div>
        </div>
        <div className="relative flex mt-8  lg:hidden">
          <div className="w-10 absolute right-0 mr-5">
            <img
              src="/images/slider/sliderArrow.svg"
              alt=""
              style={{ width: "40px", height: "40px" }}
              className="transform rotate-180 cursor-pointer swiper-button-prev"
            />
          </div>
          <div className="w-10 absolute left-0 ml-5">
            <img
              src="/images/slider/sliderArrow.svg"
              alt=""
              style={{ width: "40px", height: "40px" }}
              className="cursor-pointer swiper-button-next"
            />
          </div>
        </div>
        <div className="lg:flex items-center self-end 3xl:-mr-16 -mr-8 hidden">
          <p className="font-prompt text-xs-xl uppercase tracking-02em">
            {currentIndex + " of"}
          </p>
          <img
            className="mx-4 3xl:h-1 3xl:w-1/3"
            src="/images/lineOnSlider.svg"
            alt=""
          />
          <p className="font-prompt text-xs-xl uppercase tracking-02em">
            10 planets
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpolreAllPlanets;
