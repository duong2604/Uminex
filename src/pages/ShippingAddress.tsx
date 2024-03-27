import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { toast } from "react-toastify";
import { addShippingAddress } from "../features/product/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ShippingAddress() {
  const { shippingAddress } = useSelector((state: RootState) => state.cart);

  const [country, setCountry] = useState(shippingAddress?.country || "");
  const [username, setUsername] = useState(shippingAddress?.username || "");
  const [email, setEmail] = useState(shippingAddress?.email || "");
  const [phone, setPhone] = useState(shippingAddress?.phone || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [state, setState] = useState(shippingAddress?.state || "");
  const [code, setCode] = useState(shippingAddress?.code || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!country || !username || !email || !phone || !city || !state || !code) {
      return toast.error("Please input all fields.");
    }

    dispatch(
      addShippingAddress({
        country,
        username,
        email,
        phone,
        city,
        state,
        code,
      }),
    );

    // navigate("/payment");
  };

  return (
    <div className=" mb-5 px-[6rem] py-5">
      <h2 className="my-5 mb-[2rem] text-center text-xl font-bold">Delivery</h2>
      <div className="flex gap-5 ">
        <div className="flex w-1/2 flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Country</label>
            <input
              className="rounded-md border-2 p-2 focus:outline-none"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="">Username</label>
              <input
                className="rounded-md border-2 p-2 focus:outline-none"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                className="rounded-md border-2 p-2 focus:outline-none"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Phone</label>
            <input
              className="rounded-md border-2 p-2 focus:outline-none"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="">City</label>
            <input
              className="w-full rounded-md border-2 p-2 focus:outline-none"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="">State</label>
              <input
                className="rounded-md border-2 p-2 focus:outline-none"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-2">
              <label htmlFor="">Zip code</label>
              <input
                className="rounded-md border-2 p-2 focus:outline-none"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full rounded-[30px] border-2 bg-[#2B38D1] p-2 text-white hover:bg-[#475569] focus:outline-none"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="mb-2 text-center font-semibold">Shipping Method</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2  border-2 bg-slate-200 p-2 ">
              <input
                id="normal"
                name="shipping"
                type="radio"
                className="hover:cursor-pointer"
              />
              <label className="hover:cursor-pointer" htmlFor="normal">
                Normal Delivery
              </label>
            </div>
            <div className="flex items-center gap-2 border-2 bg-slate-200 p-2 ">
              <input
                id="express"
                name="shipping"
                type="radio"
                className="hover:cursor-pointer"
              />
              <label htmlFor="express" className="hover:cursor-pointer">
                Express Delivery
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
