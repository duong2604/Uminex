import { Link, useSearchParams } from "react-router-dom";
import { IconsHeader } from "../utils/icons";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { CartItem } from "../types/data.types";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { debounce } from "lodash";

const Header = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useSearchParams("");

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const quantity = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0,
  );

  const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      search.set("query", e.target.value);
      setSearch(search, {
        replace: true,
      });
    } else {
      search.delete("query");
      setSearch(search, {
        replace: true,
      });
    }
  }, 1500);

  useEffect(() => {
    setCount(quantity);
  }, [cartItems]);

  return (
    <div className="min-w-screen m-0 p-0 text-[14px]">
      <div className="border-b-1 flex h-10 items-center justify-center border bg-[#2b38d1] py-4 text-white sm:justify-between sm:bg-none sm:px-[6rem]">
        <span className="">
          You are a student and students get 20% discount.
        </span>
        <div className="hidden items-center justify-center gap-[20px] lg:flex">
          <span>Store Locator</span>
          <span>Order Tracking</span>
          <span>FAQs</span>
          <IconsHeader.dividerVertical />
          <div className="flex items-center justify-center gap-1">
            <img
              className="h-3 w-4"
              src="https://demo-uminex.myshopify.com/cdn/shop/t/6/assets/flag_en.png?v=14076981825125011091681891950"
              alt=""
            />
            <span> English</span>
            <button>
              <IconsHeader.arrowDown size={"1.5rem"} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span> United States(USD $)</span>{" "}
            <button>
              <IconsHeader.arrowDown size={"1.5rem"} />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:border-b-1 m-0 flex h-[85px] flex-col items-center p-0 sm:flex-row sm:justify-between sm:px-[6rem]">
        <div className="flex items-center justify-between">
          <div className="sm:hidden">
            <MenuIcon />
          </div>
          <Link to={"/"} className="flex w-full items-center justify-center">
            <img
              className="w-1/2 py-4 sm:w-full sm:py-0 lg:w-[145px]"
              src="https://demo-uminex.myshopify.com/cdn/shop/files/Logo_fb7c7c58-1b8f-455e-8b97-56d607743b37_145x@2x.png?v=1679893103"
              alt=""
            />
          </Link>
          <Link to={`/cart`} className="sm:hidden">
            <div className="relative">
              <IconsHeader.cart size={`2.5rem`} />
              <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
                {count}
              </span>
            </div>
          </Link>
        </div>
        <div className="m-0 flex items-center justify-center p-0 font-semibold">
          <div className="flex h-[46px] items-center justify-center rounded-md border-2 text-center">
            <div className="hidden w-[210px] items-center justify-between sm:flex">
              <span className="ml-2 mr-8 lg:w-[100px]">All Categories</span>
              <button className="text-2xl">
                <IconsHeader.arrowDown />
              </button>
              <IconsHeader.dividerVertical size={`1.5rem`} />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="px-[50px] font-normal outline-none sm:w-[430px] sm:px-0"
                onChange={onSearchChange}
              />
            </div>
          </div>
          <button className="ml-[-2px] h-[46px] w-[100px] rounded-br-lg rounded-tr-lg bg-[#2b38d1] text-lg text-white hover:bg-[#212529]">
            Search
          </button>
        </div>

        <div className="ml-4 hidden items-center justify-center gap-3 sm:flex">
          <Link
            to={`/login`}
            className="hidden items-center justify-center sm:flex"
          >
            <button>
              <IconsHeader.user size={`2.5rem`} />
            </button>
            <div>
              <span className="font-light">Login </span>
              <p className="font-bold">Account</p>
            </div>
          </Link>
          <button className="relative">
            <IconsHeader.heart size={`2.5rem`} />
            <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
              0
            </span>
          </button>
          <Link to={`/cart`}>
            <div className="relative">
              <IconsHeader.cart size={`2.5rem`} />
              <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
                {count}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-b-1 hidden h-[48px] items-center justify-between border px-[6rem] font-semibold lg:flex">
        <button className="flex h-full items-center justify-center gap-2  hover:border-t-4 hover:border-t-blue-500 hover:pb-1 hover:transition-all">
          <IconsHeader.menu size={`1.8rem`} />
          <span> Browse All Categories</span>
        </button>
        <div className="flex gap-8 ">
          <Link className="hover:text-red-500 " to={""}>
            Home
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Shop
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Products
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Pages
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Blog
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Contact us
          </Link>
          <Link className="text-[#dd3842]" to={""}>
            Buy Uminex!
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <IconsHeader.discount size={`1.8rem`} />
          <span>Sale $20 Off Your First Order.</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
