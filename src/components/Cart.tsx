import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  decrementQty,
  incrementQty,
  removeAllFromCart,
  removeFromCart,
} from "../features/product/cartSlice";
import { CartItem } from "../types/data.types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [confirm, setConfirm] = useState(false);

  const { cartItems } = useSelector((state: RootState) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleIncreChange = (item: any) => {
    if (item.quantity < item.stock) {
      dispatch(incrementQty({ id: item.id }));
    } else {
      toast.info("Over in current stock");
    }
  };
  const handleDecreChange = (item: any) => {
    if (item.quantity > 1) {
      dispatch(decrementQty({ id: item.id }));
    } else {
      dispatch(removeFromCart({ id: item.id }));
      toast.info("Remove one product from cart");
    }
  };

  return (
    <Stack className="mb-8 mt-[6rem] px-5 sm:mt-[3rem]">
      <h2 className="mb-4 text-center text-3xl font-semibold">Your cart</h2>
      <Stack className="mb-2 rounded-lg border-2 border-[#2B38D1] sm:hidden sm:border-0">
        {cartItems.length === 0 && (
          <div className="flex h-[200px] items-center justify-center text-center text-2xl font-medium capitalize sm:hidden">
            Your cart is empty
          </div>
        )}
        {cartItems.map((item: CartItem, index: number) => {
          return (
            <Stack
              key={index}
              direction={`row`}
              className="flex-wrap items-center justify-between border-b-2 p-2 sm:hidden sm:border-0"
            >
              <Link to={`/products/${item.id}`}>
                <img
                  className="w-[100px] object-cover sm:hidden"
                  src={item.thumbnail}
                  alt=""
                />
              </Link>
              <div className="flex flex-col gap-2 sm:hidden">
                <p>{item.title}</p>
                <p className="text-lg font-semibold text-red-500">{`$ ${item.price}`}</p>
                <ButtonGroup aria-label="outlined primary button group">
                  <Button onClick={() => handleDecreChange(item)}>-</Button>
                  <Button>{item.quantity}</Button>
                  <Button onClick={() => handleIncreChange(item)}>+</Button>
                </ButtonGroup>
                <p>
                  <span className="text-lg font-semibold">
                    {(item.quantity * item.price).toFixed(2)} $
                  </span>
                </p>
              </div>
              <div className="">
                <button
                  className="hover:text-red-500"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
              </div>
            </Stack>
          );
        })}
        <div className="flex items-center justify-between p-4 sm:hidden">
          <Link to={`/`}>
            <button className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]">
              Continue Shopping
            </button>
          </Link>
          <button
            onClick={() => dispatch(removeAllFromCart())}
            className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]"
          >
            Delete All
          </button>
        </div>
      </Stack>

      <Grid container columnSpacing={4}>
        <Grid sm={12} md={7}>
          <TableContainer component={Paper} className="hidden sm:block">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Subtotal</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="text-center">
                {cartItems.length === 0 && (
                  <>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell colSpan={5} align="center">
                        <div className="text-2xl font-medium capitalize">
                          Your cart is empty
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                )}
                {cartItems.map((item: CartItem, index: number) => {
                  return (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      key={index}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <div className="flex items-center gap-1">
                          <Link to={`/products/${item.id}`}>
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="w-[100px]"
                            />
                          </Link>
                          <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="font-semibold text-[#2B38D1]">
                              {item.price}$
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <ButtonGroup aria-label="outlined primary button group">
                          <Button onClick={() => handleDecreChange(item)}>
                            -
                          </Button>
                          <Button>{item.quantity}</Button>
                          <Button onClick={() => handleIncreChange(item)}>
                            +
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-lg font-semibold">
                          {(item.quantity * item.price).toFixed(2)} $
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <button
                          className="hover:text-red-500"
                          onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                          }
                        >
                          <DeleteOutlineOutlinedIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}

                <TableRow>
                  <TableCell colSpan={4}>
                    <div className="flex items-center justify-between">
                      <Link to={`/`}>
                        <button className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]">
                          Continue Shopping
                        </button>
                      </Link>
                      <button
                        onClick={() => dispatch(removeAllFromCart())}
                        className="rounded-[30px] border bg-[#2B38D1] px-5 py-2 font-semibold text-white hover:bg-[#212529]"
                      >
                        Delete All
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid sm={12} md={4}>
          <div className="flex flex-col justify-center gap-3 rounded-lg border border-[#2B38D1] px-[50px] py-10">
            <div className="">
              <h2 className="text-2xl font-bold">Cart Total</h2>
              <hr />
            </div>
            <div>
              <h2 className="text-xl font-bold">Coupon</h2>
              <p className="mt-2 font-normal">
                Coupon code will work on checkout page.
              </p>
              <input
                type="text"
                placeholder="coupon code"
                className="my-4 w-full rounded-[30px] border px-4 py-4 focus:outline-none"
              />
              <hr />
            </div>
            <div>
              <h2 className="my-2 text-xl font-bold">Order total</h2>
              <p className="my-2 text-xl font-bold text-[#2B38D1]">
                {cartItems
                  .reduce(
                    (acc: number, item: CartItem) =>
                      acc + item.quantity * item.price,
                    0,
                  )
                  .toFixed(2)}{" "}
                $
              </p>
              <hr />
            </div>
            <div>
              <p className="font-medium">
                Taxes and shipping calculated at checkout
              </p>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="I agree with Terms & Conditions"
                className="my-2"
                value={confirm}
                onChange={() => setConfirm(!confirm)}
              />
              <Link to={`/delivery`}>
                <button
                  type="button"
                  disabled={!confirm}
                  className={` ${confirm ? "hover:cursor-pointer hover:bg-[#212529]" : "opacity-[0.7] hover:cursor-not-allowed"} w-full rounded-[30px] border bg-[#2B38D1] py-2 font-semibold text-white `}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Cart;
