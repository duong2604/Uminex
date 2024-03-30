import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, ButtonGroup, Divider, Rating, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import CircularIndeterminate from "../components/Loading";
import { addToCart, updateQuantity } from "../features/product/cartSlice";
import { useGetProductDetailQuery } from "../features/product/productsApiSlice";

const DetailedProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useGetProductDetailQuery(+id!);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularIndeterminate />
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const handleIncrement = () => {
    if (quantity >= +product!.stock) {
      setQuantity(+product!.stock);
      toast.info("Quantity over in current stock");
    }
    if (quantity < +product!.stock) {
      setQuantity((pre) => pre + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      toast.info("Quantity is at least 1");
      setQuantity(1);
    }
    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };

  const handleClickCartBtn = () => {
    const foundedItem = cartItems.find((item: any) => item.id === product?.id);
    if (!foundedItem) {
      dispatch(addToCart({ ...product }));
      navigate("/cart");
    } else {
      dispatch(updateQuantity({ product, quantity }));
      navigate("/cart");
    }
  };

  return (
    <Grid container p={4}>
      <Grid xs={12} md={6}>
        <img src={product?.thumbnail} alt="" className="hover:cursor-pointer"/>
        <div className="flex mt-2 gap-1">
          {product && product.images && product.images.map((image, index)=>{
            return  <div key={index} className="w-[100px] border p-2 hover:cursor-pointer hover:border-blue-500">
              <img src={image} alt=""  className="w-full object-cover"/>
            </div>
          })}
          <img src="" alt="" />
        </div>
      </Grid>
      <Grid xs={12} md={6}>
        <Stack spacing={2} className="px-5">
          <div>
            <h3 className="font-bold text-3xl capitalize my-2">{product?.title}</h3>
            <p className="font-semibold text-gray-400">
              <Rating defaultValue={5} readOnly size="small" /> /{" "}
              {Math.round(product?.rating!)} reviews / Write a review
            </p>
            <Divider className="w-[95%]" />
          </div>

          <div>
            <p className="font-semibold text-red-500 text-2xl">$ {product?.price}</p>
            <p className="text-xl text-gray-500">{product?.description}</p>
            <p className="text-md text-gray-500 my-2">
              <VisibilityIcon />{" "}
              <span>15 people are viewing this right now </span>
            </p>
            <div className="flex justify-start gap-10 my-2 text-gray-500 font-medium">
              <Link to={`#`} className="hover:text-[#2B38D1]">
                <ShieldOutlinedIcon /> Shipping and Returns
              </Link>
              <Link to={`#`} className="hover:text-[#2B38D1]">
                <EmailOutlinedIcon /> Contact us
              </Link>
            </div>
            <Divider className="w-[95%]" />
          </div>
          <Stack direction={"row"} spacing={1}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={handleDecrement}>-</Button>
              <Button>{quantity}</Button>
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
            <button
              className="w-1/2 rounded-[30px] border bg-[#2B38D1] text-white hover:bg-red-500"
              onClick={handleClickCartBtn}
            >
              <AddShoppingCartIcon />
            </button>
          </Stack>
          <button className="w-full rounded-[30px] border bg-slate-700 py-2 text-white hover:bg-red-500">
            Buy it now
          </button>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default DetailedProduct;
