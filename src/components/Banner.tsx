import Poster from "./Poster";
import Slider from "./Slider";
import poster1 from "../assets/images/poster/poster-1.jpg";
import poster2 from "../assets/images/poster/poster-2.jpg";
import product1 from "../assets/images/product/product-1.png";
import product2 from "../assets/images/product/product-2.png";
import product3 from "../assets/images/product/product-3.png";
import product4 from "../assets/images/product/product-4.png";
import product5 from "../assets/images/product/product-5.png";
import product6 from "../assets/images/product/product-6.png";
import product7 from "../assets/images/product/product-7.png";

const posters = [
  {
    img: poster1,
    name: "ipad pro",
    title: "top offer",
    text: "128GB",
    desc: "Discount 20% on products",
  },
  {
    img: poster2,
    name: "Sport Edition",
    title: "Gamepad",
    text: "2022",
    desc: "Best choice of the year",
  },
];

const products = [
  {
    img: product1,
    name: "Macbook/PCs",
    countInStock: "13 products",
  },
  {
    img: product2,
    name: "OLED/Smart TVs ",
    countInStock: "14 products",
  },
  {
    img: product3,
    name: "Phone/Mobile",
    countInStock: "15 products",
  },
  {
    img: product4,
    name: "Macbook/PCs",
    countInStock: "13 products",
  },
  {
    img: product5,
    name: "Tablets/Ipad Pro",
    countInStock: "11 products",
  },
  {
    img: product6,
    name: "Macbook/PCs",
    countInStock: "13 products",
  },
  {
    img: product7,
    name: "Gamepad/Console",
    countInStock: "10 products",
  },
  {
    img: product1,
    name: "Heatsink PC",
    countInStock: "2 products",
  },
];

const Banner = () => {
  return (
    <div className="flex-col pt-[70px] md:mx-[6rem] md:flex md:pb-[60px] md:pt-[30px]">
      <div className="flex flex-col items-center justify-center gap-1 px-4 text-center md:flex-row">
        <Slider />
        <div className="flex flex-col gap-[5px] sm:h-[375px] lg:w-1/3">
          {posters.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <Poster {...item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden items-center justify-between px-[15px] pt-[60px] sm:flex">
        {products.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="hover:shadow-inner-lg h-[100px] w-[100px]  rounded-full bg-[#f1f5f6] transition-all hover:cursor-pointer hover:border-2 hover:border-[#2b38d1] hover:p-4  hover:shadow-[#fff]">
                <img src={item.img} alt="" />
              </div>
              <p className="mb-1 mt-[10px] text-[14px] font-semibold">
                {item.name}
              </p>
              <p className="text-[13px] text-[#515d66]">{item.countInStock}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Banner;
