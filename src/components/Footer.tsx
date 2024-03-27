import { IconsFooter } from "../utils/icons";
import payment from "../assets/payment.png";

const items = [
  {
    icon: <IconsFooter.satellite />,
    title: "FAST DELIVERY",
    desc: "Across West & East India",
  },
  {
    icon: <IconsFooter.payment />,
    title: "SAFE PAYMENT",
    desc: "100% Secure Payment",
  },
  {
    icon: <IconsFooter.discount />,
    title: "ONLINE DISCOUNT",
    desc: "Add Multi-buy Discount",
  },
  {
    icon: <IconsFooter.message />,
    title: "HELP CENTER",
    desc: "Dedicated 24/7 Support",
  },
  {
    icon: <IconsFooter.note />,
    title: "CURATED ITEMS",
    desc: "From Handpicked Sellers",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#f1f5f6] pt-5 text-[14px]">
      <div className="border-b-1 grid grid-cols-2 items-center sm:grid-cols-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-2 flex flex-col items-center gap-[15px] px-[10px] text-center"
          >
            <button className="text-3xl text-[#2b38d1]">{item.icon}</button>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden items-center justify-between gap-[2rem] px-[3rem] py-[60px] text-justify text-[#515d66] sm:flex">
        <div className="flex flex-col gap-[22px]">
          <h4 className="mb-[30px] font-semibold">ABOUT THE STORE</h4>
          <div className="">
            <p>Got Question? Call us 24/7</p>
            <a className="mt-1 text-2xl text-[#2b38d1]" href="#">
              +222-1800-262
            </a>
          </div>
          <div>
            <p>268 St, South New York/NY 98944, United States</p>
            <p>Customersupport@example.com</p>
            <p>Aloshopify@alothemes.com</p>
          </div>
        </div>
        <div className="">
          <h4 className="mb-[30px] font-semibold uppercase ">INFORMATION</h4>
          <div className="flex flex-col gap-[14px]">
            <a className="decoration-solid hover:underline" href="#">
              Blog Us
            </a>
            <a className="decoration-solid hover:underline" href="#">
              About Us
            </a>
            <a className="decoration-solid hover:underline" href="#">
              Delivery Information
            </a>
            <a className="decoration-solid hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="decoration-solid hover:underline" href="#">
              FeedBack
            </a>
          </div>
        </div>
        <div className="">
          <h4 className=" mb-[30px] font-semibold">QUICK LINKS</h4>
          <div className="mb-[70px] flex flex-col gap-[14px]">
            <a className="decoration-solid hover:underline" href="#">
              Store Location
            </a>
            <a className="decoration-solid hover:underline" href="#">
              Orders Tracking
            </a>
            <a className="decoration-solid hover:underline" href="#">
              FAQs
            </a>
          </div>
        </div>
        <div className="  flex w-[450px] flex-col gap-[20px] px-[10px]">
          <h4 className="mb-[30px] font-semibold">NEWSLETTER SIGN UP</h4>
          <p>
            Join 20.000+ subscribers and get a new discount coupon on every
            Saturday. Updates information on Sales and Offers.
          </p>
          <div>
            <input
              type="text"
              placeholder="Your email address..."
              className="h-[50px] w-[250px] rounded-[50px] border  px-4 py-[20px] outline-none focus:border-[#2b38d1]"
            />
            <button className="ml-[15px] h-[46px] w-[126px] rounded-[50px] bg-[#2b38d1] px-[6px]  py-[1px] font-[700] text-[#ffff] hover:bg-[#212529]">
              Subscribe
            </button>
          </div>
          <p>Subscribe for Uminex and get 20% off your first purchase.</p>
        </div>
      </div>
      <div className="mb-5 mt-6 grid grid-cols-1 items-center px-[3rem] sm:grid-cols-2 sm:px-[6rem]">
        <h3 className="mb-3 text-center">
          Copyright ©{" "}
          <span className="font-semibold text-[#2b38d1]">Uminex</span> all
          rights reserved. Powered by{" "}
          <span className="font-semibold text-[#2b38d1]">Danny Duong.</span>
        </h3>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <span className="text-[12px] sm:text-[14px]">Payment Method:</span>
          <div>
            <img className="sm:h-[35px]" src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
