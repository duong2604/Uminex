interface Poster {
  title: string;
  name: string;
  img: string;
  desc: string;
  text: string;
}

const Poster = ({ img, title, name, desc, text }: Poster) => {
  return (
    <div className="relative h-1/2 w-full cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="w-full rounded-lg object-cover transition-all hover:scale-105 sm:h-[185px]"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute left-10 top-10 text-left text-[22px] font-medium uppercase text-white">
        <div>
          <h3 className="text-[18px]">{title}</h3>
          <h3 className="text-[18px]">
            <span className="text-[#ffe603]">{name}</span> {text}
          </h3>
        </div>
        <p className="mt-4 text-[12px]">{desc}</p>
      </div>
    </div>
  );
};
export default Poster;
