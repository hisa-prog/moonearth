import { useEffect, useState } from "react";
import TeamMemberCard from "../atoms/teamMemberCard";

const Team = () => {
  const teamMembers: Array<{
    img: string;
    name: string;
    career: string;
    links: Array<{ icon: string; link: string }>;
  }> = [
    {
      img: "/images/team/besso.webp",
      name: "Besso m",
      career: "CEO",
      links: [
        {
          icon: "linkedin",
          link: "https://linkedin.com/",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/",
        },
      ],
    },
    {
      img: "/images/team/craig.webp",
      name: "Craig",
      career: "Chief growth officer",
      links: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/craig-henderson-5a7509bb/",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/H507C",
        },
      ],
    },
    {
      img: "/images/team/talha.webp",
      name: "Talha Malik",
      career: "Project Manager",
      links: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/talha-malik-18b3035b",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/maliktalhajaved?t=uxHhIk2DK8KpkFt0d4HONg&s=09",
        },
      ],
    },
    {
      img: "/images/team/topson.webp",
      name: "Temitope S. Falade",
      career: "Graphic design and animation",
      links: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/temitope-falade-578107120",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/Topson_noble?t=bs6qUsHYb_mi9JASvdMSCQ&s=09",
        },
      ],
    },
    {
      img: "/images/team/abdulrahman.webp",
      name: "abdulrahman rabiu",
      career: "Support / business developer",
      links: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/abdulrahman-yakubu-a993a5233",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/abrayadh",
        },
      ],
    },
    {
      img: "/images/team/abhayrajsinh1.webp",
      name: "Abhayrajsinh Gohil",
      career: "Chief Blockchain Officer",
      links: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/abhayrajsinh-gohil-47b636154",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/mxxnwolf",
        },
      ],
    },
    {
      img: "/images/team/oliver2.webp",
      name: "Oliver Bou Eid",
      career: "Visual Effects & Cinematic Artist",
      links: [
        {
          icon: "instagram",
          link: "https://www.instagram.com/olivervisualfx/",
        },
        {
          icon: "imdb",
          link: "https://www.imdb.com/name/nm4158442/?ref_=nv_sr_srsg_0",
        },
      ],
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("team")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
      // if(window.scrollY <= height + window.innerHeight * 2) setIsVisible(false)
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <>
      <div
        id="team"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover lg:px-16 px-4 pb-[100px] lg:pb-32"
      >
        <p
          className={`${
            typeof window !== "undefined" && window.innerWidth > 768
              ? isVisible
                ? "animatedTitle animatedTitleTeam visible"
                : "invisible"
              : ""
          }
         col-span-4 md:col-start-4 md:col-span-2 lg:col-start-5 lg:col-span-4 xxl:col-start-6 xxl:col-span-2 
        max-w-fit 3xl:col-start-5 3xl:col-span-4 5xl:col-start-6 5xl:col-span-2
        font-raitor font-normal xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase 5xl:ml-0 3xl:ml-[22%] xxl:ml-0 xl:ml-[22%] lg:ml-[20%] md:ml-[12%] lg:mb-16 mb-3`}
        >
          Team
        </p>
        <div className="col-span-4 md:col-span-8 lg:col-span-12 grid grid-cols-2 sm:flex sm:flex-wrap 2xl:mx-auto 2xl:max-w-[1440px] justify-center gap-y-4 gap-x-4 lg:gap-x-9">
          {teamMembers.map((item, index) => (
            <TeamMemberCard
              img={item.img}
              name={item.name}
              career={item.career}
              links={item.links}
              key={`team_${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
