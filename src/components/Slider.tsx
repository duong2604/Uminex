import slider4 from "../assets/images/slide/slider-4.jpg";

const Slider = () => {
  return (
    <div className="relative h-[375px] w-full cursor-pointer text-left lg:w-2/3">
      <div className="h-full w-full overflow-hidden">
        <img
          className="h-full rounded-lg object-cover transition-all hover:scale-105 sm:w-full"
          src={slider4}
          alt=""
        />
      </div>
      <div className="absolute left-10 top-20 font-semibold text-white sm:left-20 sm:top-10">
        <div className="flex flex-col">
          <span className="mb-3 text-[#ffe603]">Top Trending</span>
          <h3 className="text-[30px] sm:text-[40px]">Trending</h3>
          <h3 className="sm:text-[40px ] mb-2 text-[30px]">
            <span className="text-[#ffe603]">Your</span> New Style
          </h3>
          <p className="font-normal">Limited Time: Online Only!</p>
        </div>
        <button className="border-1 mt-[20px] rounded-[30px] border bg-[#ffff] px-[40px] py-[15px] text-[12px] uppercase text-[#212529] hover:border-none hover:bg-[#2b38d1] hover:text-white">
          Shop now
        </button>
      </div>
    </div>
  );
};
export default Slider;
