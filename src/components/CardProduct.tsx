import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Product } from "../types/data.types";
import { CardActionArea } from "@mui/material";
import { Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/product/cartSlice";

const CardProduct = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
    navigate("/cart");
  };

  return (
    <Card className="text-center hover:shadow-lg hover:shadow-[#2B38D1]">
      <CardActionArea>
        <Link
          to={`/products/${product.id?.toString()}`}
          className="overflow-hidden"
        >
          <CardMedia
            width={"100%"}
            component="img"
            image={product.thumbnail}
            className="transition-all hover:scale-110 h-[250px]"
          />
        </Link>
      </CardActionArea>
      <CardContent className="flex flex-col items-center">
        <h2 className="font-semibold">{product.title}</h2>
        <div>
          <div className="flex items-center gap-1 text-[12px] font-normal">
            <Rating
              name="read-only"
              value={Math.round(product.rating)}
              readOnly
              size="small"
            />
            <span>({Math.round(product.rating)} review)</span>
          </div>
          <p className="text-xl font-bold text-[#2B38D1]">{product.price}$</p>
        </div>
        <div className="w-full">
          {+product.stock > 0 ? (
            <div>
              <p>
                <span className="text-[14px] font-semibold text-[green]">
                  In stock{" "}
                </span>
                <span className="text-normal text-[14px]">
                  {" "}
                  {product.stock} products
                </span>
              </p>
              <button
                className="mt-1 w-full rounded-[30px] border bg-[#2B38D1] px-2 py-1 font-semibold text-white hover:bg-slate-600"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          ) : (
            <p className="mt-7 text-xl font-semibold text-red-500">
              Out of stock
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default CardProduct;
