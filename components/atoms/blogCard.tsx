interface IBlogCard {
  img: string;
  text: string;
  date: string;
  key: number;
  classname?: any;
}

const BlogCard = ({ img, text, date, key }: IBlogCard) => {
  return (
    <div key={key} className={`lg:col-span-5 col-span-4 flex flex-col`}>
      <img src={img} alt={`blog + ${key}`} className={`mb-5`} />
      <p className="font-raitor font-normal text-lg-md uppercase mb-3 text-left">
        {text}
      </p>
      <p className="font-prompt font-normal text-lg-xs-s text-white/60">
        {date}
      </p>
    </div>
  );
};
export default BlogCard;
