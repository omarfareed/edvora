import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyle from "../Product/productStyle";
import { useDispatch } from "react-redux";
import { EdvoraActions } from "../../store/evdoraSlice";

const FilterMenuItem = (props) => {
  const [valueOption, setValueOption] = React.useState("");
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValueOption(event.target.value);
    dispatch(
      EdvoraActions.addFilterOption({
        value: event.target.value,
        option: props.option,
      })
    );
  };

  return (
    <Box sx={{ minWidth: 120, backgroundColor: "#232323" }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFF" }} id="demo-simple-select-label">
          {props.menuTitle}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueOption}
          label={props.menuTitle}
          onChange={handleChange}
          className={classes.select}
          sx={{ color: "#FFF" }}
        >
          {props.menuItems.map((menuItem, i) => (
            <MenuItem key={i} value={menuItem}>
              {menuItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default FilterMenuItem;
