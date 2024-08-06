import Link from "../atoms/link";

const Links = ({ isFooter = true }) => {
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

  return (
    <div
      className={`${
        isFooter
          ? "flex items-center justify-between mm:gap-x-2 md:gap-x-5"
          : "grid items-center"
      } `}
    >
      {listOfLinks.map((item, index) => (
        <Link
          el={item.el}
          link={item.link}
          key={`link_${index}`}
          isFooter={isFooter}
          className={""}
        />
      ))}
    </div>
  );
};
export default Links;
