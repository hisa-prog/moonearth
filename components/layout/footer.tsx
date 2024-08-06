import Link from "next/link";
import Links from "./Links";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex lg:py-10 py-4 ms:py-8 md:flex-row flex-col w-full md:justify-between justify-center 
    items-center lg:h-[156px] md:px-8 relative bg-grayBg"
    >
      <img className="mb-3 ms:mb-7 md:mb-0" src="/images/logo.svg" alt="" />
      <div className="block  text-center md:text-auto md:flex items-center gap-x-7">
        <Link href="/whitepaper">
          <a
            className="cursor-pointer text-lg-s uppercase font-prompt font-normal tracking-02em whitepaperShasow"
            // href="https://www.google.com/"
          >
            Whitepaper
          </a>
        </Link>
        <div className="md:mt-0 mt-3 ms:mt-7 md:w-fit md:px-0 w-full 3xl:h-full px-4 ms:px-8">
          <Links isFooter={true} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
