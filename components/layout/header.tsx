import { useRouter } from "next/router";
import { useCallback, useState, useEffect, useContext } from "react";
// import { GetWhitelistedContext } from '../context/getWhitelisted';
import Button from "../atoms/button";
import SocialLink from "../atoms/link";
// import InfoModal from "../modals/infoModal";
import Link from "next/link";

const Header = () => {
  // const { getWhitelisted, modalTitle, infoModal } = useContext(GetWhitelistedContext);
  const router = useRouter();

  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const [currentMenuLink, setCurrentMenuLink] = useState(0);

  const menuLinksAll: Array<{ name: string; id: string }> = [
    { name: "Play 2 earn game", id: "mainScreen" },
    { name: "About", id: "secondScreen" },
    { name: "Lands", id: "escapeToTheMoon" },
    { name: "Planets", id: "lands" },
    { name: "Play 2 earn", id: "characters" },
    { name: "NFT", id: "nft" },
    { name: "Game features", id: "features" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Team", id: "team" },
    { name: "Partners", id: "partners" },

    { name: "Executive Summary", id: "executiveSummary" },
    { name: "mission", id: "mission" },
    { name: "Play-To-Earn", id: "playToEarn" },
    { name: "Token", id: "token" },
    { name: "Economic Model", id: "economicModel" },
    { name: "game Market", id: "gameMarket" },
    { name: "Marketplace", id: "marketplace" },
    { name: "Fund allocation", id: "fundAllocation" },
    { name: "Conclusion", id: "conclusion" },
  ];

  const menuLinks: Array<{ button: string; link: string }> = [
    // { button: "Play 2 earn game", link: "main" },
    { button: "About", link: "secondScreen" },
    { button: "Lands", link: "escapeToTheMoon" },
    { button: "Planets", link: "lands" },
    { button: "Play 2 earn", link: "characters" },
    { button: "NFT", link: "nft" },
    { button: "Game features", link: "features" },
    { button: "Roadmap", link: "roadmap" },
    // { button: "Blog", link: "blog" },
    { button: "Team", link: "team" },
    // { button: "Whitepaper", link: "/whitepaper" },
  ];
  const listOfLinks: Array<{ el: any; link: string }> = [
    { el: "telegram", link: "https://t.me/REVOLUTIONMOONEARTH7" },
    { el: "discord", link: "https://discord.gg/moonearth" },
    { el: "reddit", link: "https://www.reddit.com/user/MoonEarth_io/" },
    {
      el: "twitter",
      link: "https://twitter.com/Moonearth_io?toEpZhBUvExxC5sSA4fB1mA&s=09",
    },
    {
      el: "instagram",
      link: "https://instagram.com/moonearth.io?utm_medium=copy_link",
    },
    {
      el: "linkedin",
      link: "https://www.linkedin.com/company/revolution-moon-earth",
    },
    {
      el: "facebook",
      link: "https://www.facebook.com/Revolution-Moon-Earth-105124885465064/",
    },
    {
      el: "youtube",
      link: "https://www.youtube.com/channel/UC__VbL_SH7K20FtmuNH1bXQ",
    },
  ];

  const openUserMenu = useCallback(() => {
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu]);

  const closeUserMenu = useCallback(
    () => setIsActiveUserMenu(false),
    [setIsActiveUserMenu]
  );

  const toggleUserMenu = useCallback(() => {
    isActiveUserMenu ? closeUserMenu() : openUserMenu();
  }, [isActiveUserMenu, openUserMenu, closeUserMenu]);

  // const headerHeight = 0;
  const [currentPoint, setCurrentPoint] = useState("");

  const onScroll = useCallback(
    (e: any) => {
      if (
        (document.getElementById("escapeToTheMoon")?.getBoundingClientRect()
          .top || 0) -
          document.getElementById("header")!.offsetHeight <=
          0 &&
        window.innerWidth > 1024
      ) {
        document.getElementById("header")!.style.background = "#1D1D1D";
      } else if (
        (document.getElementById("secondScreen")?.getBoundingClientRect().top ||
          0) -
          document.getElementById("header")!.offsetHeight <=
          0 &&
        window.innerWidth <= 1024
      ) {
        document.getElementById("header")!.style.background = "#1D1D1D";
      } else {
        document.getElementById("header")!.style.background = "none";
      }
      if (
        (document.getElementById("secondScreen")?.getBoundingClientRect().top ||
          0) -
          document.getElementById("header")!.offsetHeight <=
        0
      ) {
        document.getElementById("header")!.style.position = "fixed";
      } else {
        document.getElementById("header")!.style.position = "absolute";
      }
      for (let detail of menuLinksAll) {
        //@ts-ignore
        const elm: HTMLElement = document.getElementById(detail.id);
        if (elm) {
          const top = elm.getBoundingClientRect().top;
          const beforeHeader = top <= 0 - 120;
          if (beforeHeader) continue;
          const topBeforeCenterOfScreen = top <= window.innerHeight / 2;
          if (topBeforeCenterOfScreen) {
            setCurrentPoint(detail.id);
            // console.log(detail.id)
            break;
          }
        }
      }
    },
    [menuLinksAll]
  );

  //@ts-ignore
  // const preventDefault = (event) => event.preventDefault();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    menuLinksAll.map((item, index) => {
      if (item.id === currentPoint) setCurrentMenuLink(index);
    });
  }, [currentPoint, menuLinksAll]);

  return (
    <>
      {/* <InfoModal title={modalTitle} infoModal={infoModal} /> */}
      <div
        id="header"
        className={`flex w-full justify-between absolute transition-all items-center transition duration-500 top-0 left-0 z-20 xl:px-8 xl:py-6 p-4 mm:px-4 mm:py-5`}
      >
        <Link href="/#mainScreen">
          <a>
            <img className="w-24 mm:w-auto" src="/images/logo.svg" alt="" />
          </a>
        </Link>
        <div className="fixed left-10 top-[60%] justify-center items-center -rotate-90 origin-left lg:flex hidden">
          <p className="font-prompt uppercase tracking-02em text-xs-xl mr-16">
            {menuLinksAll[currentMenuLink].name}
          </p>
          <img className="rotate-90 mr-16" src="/images/line.svg" alt="" />
          <div className="w-2 h-2 rounded-full 3xl:border-8 border-4 border-white"></div>
        </div>
        <div className="flex items-center">
          <a
            href="https://discord.gg/moonearth"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="mr-8 lg:block hidden"
              // nClick={() => {
              // getWhitelisted()

              // }}
            >
              Sign up for Whitelist
            </Button>
          </a>
          <div className="" onClick={toggleUserMenu}>
            <img
              className="cursor-pointer hover:opacity-50"
              src={`/images/sandwich.svg`}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${
            isActiveUserMenu ? "flex" : "hidden"
          } h-screen flex-col px-4 pt-6 absolute lg:w-1/3 w-full bg-black right-0 top-0 z-10`}
        >
          <div className="flex self-end" onClick={toggleUserMenu}>
            <img
              className="cursor-pointer hover:opacity-50"
              src={`/images/cross.svg`}
              alt=""
            />
          </div>
          <div className="flex flex-col mt-12 items-center">
            {menuLinks.map((item, index) => (
              <a
                key={index}
                onClick={() => {
                  toggleUserMenu();
                  router.push(`/#${item.link}`);
                }}
                href={`#${item.link}`}
                className={`pb-5 lg:pb-6 last:pb-0 font-prompt uppercase hover:text-white/50 text-lg-xs-s tracking-02em lg:text-lg-s font-normal `}
              >
                {item.button}
              </a>
            ))}
            <Link href="/whitepaper">
              <a
                onClick={() => toggleUserMenu()}
                className={`pb-5 lg:pb-6 last:pb-0 font-prompt uppercase hover:text-white/50 text-lg-xs-s tracking-02em lg:text-lg-s font-normal `}
              >
                WHITEPAPER
              </a>
            </Link>
            <a
              href="https://raritysniper.com/nft-drops-calendar"
              target="_blank"
              className={`pb-5 lg:pb-6 last:pb-0 font-prompt uppercase hover:text-white/50 text-lg-xs-s tracking-02em lg:text-lg-s font-normal `}
              rel="noreferrer"
            >
              NFT Drops
            </a>
          </div>
          <div
            className={`flex lg:hidden items-center justify-center cursor-pointer relative mt-[37px]`}
          >
            <a
              href="https://discord.gg/moonearth"
              target="_blank"
              rel="noreferrer"
            >
              <Button
              // onClick={() => {
              //   getWhitelisted()

              // }}
              >
                Sign up for Whitelist
              </Button>
            </a>
          </div>

          <div className="flex md:justify-evenly justify-between h-full items-end pb-4">
            {listOfLinks.map((item, index) => (
              <SocialLink
                el={item.el}
                link={item.link}
                key={index}
                isFooter={false}
                className={""}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
