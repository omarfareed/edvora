import { Card, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
// import Product from "./components/Product/Product";
import ProductList from "./components/Product/ProductList";
import useStyle from "./components/Product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { EdvoraActions } from "./store/evdoraSlice";
import Filter from "./components/Filter/Filter";
import { useTheme } from "@emotion/react";
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
  const theme = useTheme();
  // const matchesDownLG = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const matchesDownLG = useMediaQuery("(max-width:1300px)")
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
  }, []);
  const classes = useStyle();
  const filteredProducts = filterProductsByName(products);
  // return <ProductList />;
  return (
    <Grid
      container
      direction={matchesDownLG ? "column" : "row"}
      alignItems={matchesDownLG ? "center" : "normal"}
      className={classes.mainContainer}
    >
      {/* filter section */}
      {matchesDownLG && (
        <Grid
          item
          variant="h1"
          component={Typography}
          className={classes.edvoraHeader}
        >
          Edvora
        </Grid>
      )}
      <Grid item>
        <Filter />
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems={matchesDownLG ? "center" : "normal"}
          direction="column"
          rowSpacing="2.5rem"
        >
          {!matchesDownLG && (
            <Grid
              item
              variant="h1"
              component={Typography}
              className={classes.edvoraHeader}
            >
              Edvora
            </Grid>
          )}
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
            Object.keys(filteredProducts).map((productName, i) => (
              <ProductList key={i} products={filteredProducts[productName]} />
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
