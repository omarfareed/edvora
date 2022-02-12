import useStyle from "./productStyle";
import { Button, Grid, Typography } from "@mui/material";
import Product from "./Product";
import { useState } from "react";
import { connectAdvanced, useSelector } from "react-redux";
const min = (firstEl, secondEl) => (firstEl < secondEl ? firstEl : secondEl);
const ProductList = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const { city: cityOption, state: stateOption } = useSelector(
    (state) => state.reducer.filterOptions
  );
  products = products.filter(
    ({ address: { city, state } }) =>
      (!cityOption || city === cityOption) &&
      (!stateOption || state === stateOption)
  );
  const classes = useStyle();
  if (products.length === 0) return <></>;
  const sliceProducts = () => {
    if (products.length <= 4) return products;
    // const endIndex = min(products.length + 1, startIndex + 4);
    // return [
    //   ...products.slice(startIndex, endIndex),
    //   ...products.slice(0, 4 - (endIndex - startIndex)),
    // ];
    const sliced = [];
    for (let i = 0; i < 4; i++) {
      sliced.push(products[(startIndex + i) % products.length]);
    }
    return sliced;
  };
  const slicedProducts = sliceProducts();
  return (
    <Grid item>
      <Typography variant="h3" color="#FFF">
        {products[0]?.brand_name}
      </Typography>
      <div className={classes.line} />
      <Grid
        container
        className={classes.productListContainer}
        columnSpacing="2rem"
      >
        {slicedProducts.map((product) => (
          <Grid item>
            <Product {...product} />
          </Grid>
        ))}
        {products.length > 4 && (
          <Grid
            item
            component={Button}
            onClick={() =>
              setStartIndex((startIndex) => (startIndex + 1) % products.length)
            }
            sx={{ alignSelf: "center" }}
          >
            <svg
              width="12"
              height="35"
              viewBox="0 0 12 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 17.5L1 34"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default ProductList;
