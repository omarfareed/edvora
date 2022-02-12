import { Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
// import Product from "./components/Product/Product";
import ProductList from "./components/Product/ProductList";
import useStyle from "./components/Product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { EdvoraActions } from "./store/evdoraSlice";
import Filter from "./components/Filter/Filter";
const filterProductsByName = (products) => {
  const filteredProducts = {};
  products.forEach((product) => {
    if (filteredProducts[product.product_name])
      filteredProducts[product.product_name].push(product);
    else filteredProducts[product.product_name] = [product];
  });
  return filteredProducts;
};
const productsLink = "https://assessment-edvora.herokuapp.com/";
function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  const { product_name: productNameOption } = useSelector(
    (state) => state.reducer.filterOptions
  );
  useEffect(async () => {
    const data = await (
      await fetch(productsLink, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    dispatch(EdvoraActions.initializeProducts(data));
    console.log(data);
  }, []);
  const classes = useStyle();
  const filteredProducts = filterProductsByName(products);
  // return <ProductList />;
  return (
    <Grid container className={classes.mainContainer}>
      {/* filter section */}
      <Grid item xs={2.5}>
        <Filter />
      </Grid>
      <Grid item>
        <Grid container direction="column" rowSpacing="2.5rem">
          <Grid
            item
            variant="h1"
            component={Typography}
            className={classes.edvoraHeader}
          >
            Edvora
          </Grid>
          <Grid
            item
            variant="h3"
            className={classes.productsHeader}
            component={Typography}
          >
            Products
          </Grid>
          {/* <Grid item>
            <ProductList products={products} />
          </Grid>
          <Grid item>
            {/* <ProductList products={products.splice(1, 4)} /> */}
          {/*</Grid> */}
          {!productNameOption &&
            Object.keys(filteredProducts).map((productName) => (
              <ProductList products={filteredProducts[productName]} />
            ))}
          {productNameOption && (
            <ProductList products={filteredProducts[productNameOption]} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
