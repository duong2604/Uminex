import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/product/productsApiSlice";
import CardProduct from "./CardProduct";
import CircularIndeterminate from "./Loading";
import { Product } from "../types/data.types";
import { useEffect } from "react";

const Products = ({
  brands,
  price,
  sort,
  currentPage,
  limit,
  setNumOfPages,
}: {
  brands: string[];
  price: number;
  sort: string;
  currentPage: number;
  limit: number;
  setNumOfPages: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [search, _] = useSearchParams("");
  let searchParams = "";
  if (search.get("query")) {
    searchParams = search.get("query")!;
  }
  const { data, isLoading, error }: any = useGetProductsQuery({
    brands,
    price,
    sort,
    page: currentPage,
    limit,
    searchParams,
  });

  useEffect(() => {
    if (data && data.numOfPages) {
      setNumOfPages(data.numOfPages);
    }
  }, [data]);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <h2 className="text-center">Oops,Something went wrong!</h2>;
  }

  return (
    <div className="sx:grid-cols-1 grid w-full gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
      {data.products!.map((product: Product, index: number) => {
        return <CardProduct key={index} product={product} />;
      })}
    </div>
  );
};
export default Products;
