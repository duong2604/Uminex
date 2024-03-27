import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortSelect({
  sort,
  setSort,
}: {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort || "newest"}
        label="Sort by"
        onChange={handleChange}
        defaultValue="newest"
      >
        <MenuItem value={"none"}>None</MenuItem>
        <MenuItem value={"newest"}>Newest</MenuItem>
        <MenuItem value={"oldest"}>Oldest</MenuItem>
        <MenuItem value={"priceAsc"}>Price: Low to high</MenuItem>
        <MenuItem value={"priceDsc"}>Price: High to low</MenuItem>
      </Select>
    </FormControl>
  );
}
