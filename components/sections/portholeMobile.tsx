import Img from "../atoms/img";

export default function PortholeMobile() {
  return (
    <>
      <div className="w-full lg:hidden h-auto">
        <Img
          src="/images/portholeMobile.webp"
          alt="porthole"
          layout="responsive"
          width="100%"
          height="100%"
        />
      </div>
      <div className="lg:hidden w-full">
        <div className="md:max-w-[89%] mx-auto text-center z-5 px-4 grid">
          <p className="font-raitor font-normal ms:text-2xl-h">
            Human civilization <br /> is over
          </p>
          <p className="font-prompt font-normal text-thin-l ms:text-base mt-3">
            Earth has been hit by three meteorites, causing chaos all over.
            Floods, earthquakes, tsunamis, and wildfires continue to spread
            across the post-apocalyptic world, causing billions of deaths.{" "}
          </p>
        </div>
        <div className="md:max-w-[89%] mx-auto text-center z-5 px-4 grid mt-6">
          <p className="font-raitor font-normal ms:text-2xl-h ">
            To survive, the rest of the people board spaceships and head out to
            the Moon
          </p>
          <p className="font-prompt font-normal text-thin-l ms:text-base mt-3 ">
            On arrival, scientists and explorers take up the challenge of
            building a new home. Humans are now at the mercy of geeks they used
            to bully. Will society be able to make a home from the barren dunes
            of the Moon? Will they conquer the Moon and expand to other planets?{" "}
          </p>
        </div>
        <div className="max-w-[89%] mx-auto z-5 px-4 grid mt-6">
          <p className="font-raitor font-normal ms:text-2xl-h text-center">
            Join the adventure and find out for yourself
          </p>
        </div>
      </div>
    </>
  );
}
