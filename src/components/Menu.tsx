import { Stack } from "@mui/material";
import { useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";

const Menu = () => {
  const [brands, setBrands] = useState([] as string[]);
  const [price, setPrice] = useState<number>(0);
  const [sort, setSort] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [numOfPages, setNumOfPages] = useState(0);

  return (
    <>
      <Stack
        direction={"row"}
        className="mx-[1rem] mb-5 mt-[2rem] md:mx-[6rem] "
        gap={2}
        justifyItems={"center"}
      >
        <div className="hidden w-1/4 md:block">
          <Sidebar setBrands={setBrands} brands={brands} setPrice={setPrice} />
        </div>
        <div className="w-full md:w-3/4 ">
          <div className="mb-4 flex items-center justify-between border-b-2">
            <p className="font-semibold">
              {" "}
              Found <span className="font-semibold text-[#2B38D1]">
                100
              </span>{" "}
              products
            </p>
            <SortSelect sort={sort} setSort={setSort} />
          </div>
          <Products
            brands={brands}
            price={price}
            sort={sort}
            setNumOfPages={setNumOfPages}
            currentPage={currentPage}
            limit={limit}
          />
        </div>
      </Stack>
      <div className="my-5 flex justify-center">
        {numOfPages < 2 ? (
          ""
        ) : (
          <Pagination setCurrentPage={setCurrentPage} numOfPages={numOfPages} />
        )}
      </div>
    </>
  );
};
export default Menu;
