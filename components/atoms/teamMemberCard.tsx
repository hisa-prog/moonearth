import Image from "next/image";
import Link from "../atoms/link";
interface ITeamMemberCard {
  img: string;
  name: string;
  career: string;
  links: Array<{
    icon: string;
    link: string;
  }>;
}

const TeamMemberCard = ({ img, name, career, links }: ITeamMemberCard) => {
  return (
    <div className={` flex flex-col items-center justify-start`}>
      <Image width="274px" height="274px" src={img} alt={name + " img"} />
      {/* </div> */}
      <p className="font-raitor font-normal text-thin-m ms:text-xs-xl lg:text-lg-md uppercase mt-3 mb-1 text-center mx-auto max-w-[274px]">
        {name}
      </p>
      <p className="font-prompt font-normal text-thin-m ms:text-base lg:text-lg-xs-s text-white/60 mb-3 text-center mx-auto max-w-[274px]">
        {career}
      </p>
      <div className="flex">
        {links.map((item, index) => (
          <Link
            el={item.icon}
            link={item.link}
            key={index}
            isFooter={false}
            isTeam={true}
            className={" mr-3 last:mr-0"}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamMemberCard;
