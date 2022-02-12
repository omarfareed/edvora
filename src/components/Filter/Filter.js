import FilterMenuItem from "./FilterMenuItem";
import { Typography, Card, Grid } from "@mui/material";
import useStyle from "../Product/productStyle";
import { useSelector } from "react-redux";
const filterProductsToUniqueOfField = (products, field) => {
  return [...new Set(products.map((product) => product[field]))];
};
const Filter = (props) => {
  const classes = useStyle();
  const products = useSelector((state) => state.reducer.products);
  const productNames = [
    ...new Set(products.map(({ product_name }) => product_name)),
  ];
  const productCities = [
    ...new Set(products.map(({ address: { city } }) => city)),
  ];
  const productStates = [
    ...new Set(products.map(({ address: { state } }) => state)),
  ];
  return (
    <Grid
      container
      component={Card}
      className={classes.filterContainer}
      direction="column"
      rowGap="1rem"
    >
      <Typography variant="h5" className={classes.filterHeader}>
        Filters
      </Typography>
      <div className={classes.line} />
      <FilterMenuItem
        option="product_name"
        menuItems={productNames}
        menuTitle="Product"
      />
      <FilterMenuItem
        option="city"
        menuItems={productCities}
        menuTitle="City"
      />
      <FilterMenuItem
        option="state"
        menuItems={productStates}
        menuTitle="State"
      />
    </Grid>
  );
};
export default Filter;
