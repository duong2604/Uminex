import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";

const brandsList = ["Apple", "Samsung", "Xiaomi", "Oppo"];
const priceTags = [100, 200, 300, 500, 1000];

const Sidebar = ({
  setBrands,
  brands,
  setPrice,
}: {
  brands: string[];
  setBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onBrandChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    brand: string,
  ) => {
    if (e.target.checked) {
      setBrands([...brands, brand]);
    } else {
      const state = brands.filter((b) => b !== brand);
      setBrands(state);
    }
  };

  const onPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    price: number,
  ) => {
    if (e.target.checked) {
      setPrice(price);
    }
  };

  return (
    <Stack>
      <p className=" py-5 text-xl font-bold">Products Filter</p>
      <div className="border-b-2">
        <h2 className="font-semibold">Brand</h2>
        <Stack>
          <FormGroup>
            {brandsList.map((brand, index) => (
              <FormControlLabel
                key={index}
                className="hover:bg-slate-200"
                control={
                  <Checkbox
                    defaultChecked={false}
                    size="small"
                    onChange={(e) => onBrandChange(e, brand)}
                  />
                }
                label={brand}
              />
            ))}
          </FormGroup>
        </Stack>
      </div>
      <div className="border-b-2">
        <h2 className="font-semibold">Price</h2>
        <Stack>
          <div className="hover:cursor-pointer">
            <input
              type="radio"
              name="price"
              id="all"
              defaultChecked
              className="mr-2 hover:cursor-pointer"
              onChange={() => setPrice(0)}
            />
            <label
              className="font-medium hover:cursor-pointer"
              htmlFor="all"
            >{`All Price`}</label>
          </div>
          {priceTags.map((price, index: number) => {
            return (
              <div key={index} className="hover:cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  id={`${index}`}
                  className="mr-2 hover:cursor-pointer"
                  onChange={(e) => onPriceChange(e, price)}
                />
                <label
                  className="font-medium hover:cursor-pointer"
                  htmlFor={`${index}`}
                >{`Over ${price}$`}</label>
              </div>
            );
          })}
        </Stack>
      </div>
      <div className="border-b-2">
        <h2 className="font-semibold">Color</h2>
        <Stack>
          <FormControlLabel
            className="hover:bg-slate-200"
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Black"
          />
          <FormControlLabel
            className="hover:bg-slate-200"
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Blue"
          />
          <FormControlLabel
            className="hover:bg-slate-200"
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Red"
          />
        </Stack>
      </div>
      <div className="border-b-2">
        <h2 className="font-semibold">Stock</h2>
        <Stack>
          <FormControlLabel
            className="hover:bg-slate-200"
            control={<Checkbox defaultChecked={false} size="small" />}
            label="Out of stock"
          />
          <FormControlLabel
            className="hover:bg-slate-200"
            control={<Checkbox defaultChecked={false} size="small" />}
            label="In stock"
          />
        </Stack>
      </div>
    </Stack>
  );
};
export default Sidebar;
