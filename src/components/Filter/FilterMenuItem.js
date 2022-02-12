// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import { useState } from "react";
// import useStyle from "../Product/productStyle";

// const FilterMenuItem = (props) => {
//   const [chosenOption, setChosenOption] = useState(undefined);
//   const classes = useStyle();
//   return (
//     <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <>
//           <Button
//             variant="contained"
//             className={classes.filterMenu}
//             {...bindTrigger(popupState)}
//           >
//             {(chosenOption || props.menuTitle).split(" ").slice(0, 2).join(" ")}
//           </Button>
//           <Menu {...bindMenu(popupState)}>
//             {props.menuItems.map((menuItem, i) => (
//               <MenuItem
//                 onClick={() => {
//                   popupState.close();
//                   setChosenOption(menuItem);
//                 }}
//               >
//                 {menuItem}
//               </MenuItem>
//             ))}
//           </Menu>
//         </>
//       )}
//     </PopupState>
//   );
// };
// export default FilterMenuItem;

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
    console.log(props);
    console.log(event.target.value);
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
            <MenuItem value={menuItem}>{menuItem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default FilterMenuItem;
