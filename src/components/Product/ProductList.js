import useStyle from "./productStyle";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Product from "./Product";
import { useState } from "react";
import { connectAdvanced, useSelector } from "react-redux";
const min = (firstEl, secondEl) => (firstEl < secondEl ? firstEl : secondEl);
const ProductList = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const { city: cityOption, state: stateOption } = useSelector(
    (state) => state.reducer.filterOptions
  );
  let maxProductsCount = 4;
  const matches3Items = useMediaQuery("(max-width:1066px)");
  const matches2Items = useMediaQuery("(max-width:840px)");
  const matches1Item = useMediaQuery("(max-width:600px)");
  if (matches3Items) maxProductsCount--;
  if (matches2Items) maxProductsCount--;
  if (matches1Item) maxProductsCount--;
  products = products.filter(
    ({ address: { city, state } }) =>
      (!cityOption || city === cityOption) &&
      (!stateOption || state === stateOption)
  );
  const classes = useStyle();
  if (products.length === 0) return <></>;
  const sliceProducts = () => {
    if (products.length <= maxProductsCount) return products;
    // const endIndex = min(products.length + 1, startIndex + 4);
    // return [
    //   ...products.slice(startIndex, endIndex),
    //   ...products.slice(0, 4 - (endIndex - startIndex)),
    // ];
    const sliced = [];
    for (let i = 0; i < maxProductsCount; i++) {
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
        {slicedProducts.map((product, i) => (
          <Grid item key={i}>
            <Product {...product} />
          </Grid>
        ))}
        {products.length > maxProductsCount && (
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default ProductList;
