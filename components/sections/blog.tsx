import { useEffect, useState } from "react";
import BlogCard from "../atoms/blogCard";
import Button from "../atoms/button";

const Blog = () => {
  const news: Array<{ img: string; text: string; date: string }> = [
    {
      img: "/images/blog/1.webp",
      text: "the rise of the play 2 earn gaming economy",
      date: "April 6, 2022",
    },
    {
      img: "/images/blog/2.webp",
      text: "shift in perception about nft pay-per-play gaming",
      date: "February 25, 2022",
    },
    {
      img: "/images/blog/3.webp",
      text: "future of the play 2 earn NFT gAMES",
      date: "February 23, 2022",
    },
    {
      img: "/images/blog/1.webp",
      text: "the rise of the play 2 earn gaming economy",
      date: "February 21, 2022",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("blog")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <>
      <div
        id="blog"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-center bg-cover lg:px-8 px-4 pb-[100px] lg:pb-32"
      >
        <p
          className={`${
            typeof window !== "undefined" && window.innerWidth > 768
              ? isVisible
                ? "animatedTitle visible"
                : "invisible"
              : ""
          }
         col-span-2 md:col-start-4 md:col-span-2 lg:col-start-5 lg:col-span-4 xl:col-start-6 xl:col-span-2
        max-w-fit font-raitor font-normal xl:text-4xl-l lg:text-4xl-m text-2xl-xs uppercase xxl:ml-4 xl:ml-0 lg:ml-[26%] md:ml-[20%] lg:mb-20 mb-3`}
        >
          Blog
        </p>
        <div className="lg:col-start-2 lg:col-span-10 md:col-span-8 col-span-4 grid lg:grid-cols-10 md:grid-cols-8 grid-cols-4 gap-4">
          {news.map((item, index) => (
            <BlogCard
              img={item.img}
              text={item.text}
              date={item.date}
              key={index}
            />
          ))}
        </div>

        <div className="lg:col-start-6 lg:col-span-2 md:col-span-4 md:col-start-3 col-span-4 flex justify-center mt-8">
          <Button className={"md:max-w-max w-full"} onClick={() => {}}>
            Read all posts
          </Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
