import Title from "../../atoms/title";

const ExecutiveSummary = () => {
  return (
    <div
      id="executiveSummary"
      className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover items-center pt-[142px] mb-[80px] relative font-prompt px-4 md:px-8 lg:px-[9.25rem]"
    >
      <Title animationTime={1.7} id="executiveSummary" text="Game Synopsis" />
      <div className="col-span-full opacity-70 md:text-xl-m mb-8">
        Moon earth revolution is a game based in the distant future. In this
        iteration, three meteors strike our planet, the entire world is on fire,
        and the people of Earth must flee. <br /> <br />
        Earth has fallen, and human civilization as we know it is over! <br />{" "}
        <br />
        Bar a lucky few. <br /> <br />
        {`To survive, they board spaceships and head out to the Moon, our closest neighbor in the solar system. On arrival, scientists and explorers set up shop to make the Moon habitable. They take up the challenge of building a new home where humanity can thrive again. Although the odds are slim, they create nonetheless. Humanity's hopes rest on the shoulders of scientists and explorers. Yes, humans are now at the mercy of geeks they used to bully. `}
        <br /> <br />
        Moon earth revolution is a massively multiplayer online role-playing
        game (MMORPG) in which you explore, play, and earn your way across our
        solar system, beginning with the Moon. A thrilling investigation of the
        depths of Time, Space, and Human Civilization.
        <br /> <br />
        Moon earth revolution is a hybrid of classic gaming experiences and
        blockchain best practices such as DAO voting, NFT, and decentralized
        finance (DeFi).
        <br /> <br />
        The game experience on Moon earth revolution will be introduced in
        stages, with progressively complicated features in each. Players can
        perform deals and keep their digital ASSETS in multiple worlds once the
        alpha version is released.
        <br /> <br />
        {`We anticipate that the Moon earth revolution game will appeal to many people. We've selected some game schemes our developers have in mind;`}
      </div>
      <div className="col-span-full">
        <div className="font-raitor text-2xl-h mb-1">Creative freedom</div>
        <div className="opacity-70 mb-4">
          Players will be able to fully design their lands however they want.
          You could spice up your plot with gorgeous scenery and constructions
          such as a medieval village, or even a space station. These kinds of
          experiences have the potential to attract groups of in-game friends
          who have similar tastes and values.
        </div>
        <div className="font-raitor text-2xl-h mb-1">Adventure</div>
        <div className="opacity-70 mb-4">
          Fight aliens, explore previously uninhabited planets, form
          allegiances, support uprisings, or even uncover ancient alien
          civilization mysteries! Players will be able to experience exploration
          and adventure gameplay. Each new planet will be unique, presenting
          fresh opportunities to explore new lands, meet new people, and uncover
          never-before-seen mysteries!
        </div>
        <div className="font-raitor text-2xl-h mb-1">Build</div>
        <div className="opacity-70">
          Our game is great for building and crafting adventures. Players will
          be able to create avatars and customize them with different features.
          Also, there will be engaging activities such as tournaments and versus
          battles. Players can also craft weapons, special abilities, and even
          technology from different rare materials scattered all over the
          planets. Some attributes are limited to specific planets,
          necessitating the need for trade among players.
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
