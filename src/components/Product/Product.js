import { Card, Grid, Typography } from "@mui/material";
import useStyle from "./productStyle";

const Product = (props) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="column"
      component={Card}
      className={classes.productContainer}
      rowSpacing="0.9rem"
      padding="1rem 1.5rem 1.2rem 1.2rem"
    >
      {/* top item */}
      <Grid
        item
        container
        spacing="2.2rem"
        // sx={{ backgroundColor: "#00F" }}
        className={classes.productTop}
      >
        {/* left item */}
        <Grid item xs={6}>
          <img
            src={props.image}
            className={classes.productImg}
            alt={props.product_name}
          />
        </Grid>
        {/* right item */}
        <Grid item xs={6} container direction="column" rowSpacing="1rem">
          <Grid item component={Typography} className={classes.productText}>
            {props.product_name}
          </Grid>
          <Grid item component={Typography} className={classes.productTextBlur}>
            {props.brand_name}
          </Grid>
          <Grid item component={Typography} className={classes.productText}>
            {`$ ${props.price}`}
          </Grid>
        </Grid>
      </Grid>
      {/* down item */}
      <Grid
        item
        container
        direction="column"
        sx={{ flexGrow: 1 }}
        justifyContent="space-between"
      >
        {/* top item */}
        <Grid item container>
          {/* left item */}
          <Grid
            item
            component={Typography}
            className={classes.productTextBlur}
            xs={6}
          >
            {`${props.address.city}/${props.address.state}`.substring(0, 15)}
          </Grid>
          {/* right item */}
          <Grid
            item
            className={classes.productTextBlur}
            component={Typography}
          >{`Date:${props.time.substring(0, 10).replace(/-/g, ":")}`}</Grid>
        </Grid>
        {/* down item */}
        <Grid item className={classes.productTextBlur} component={Typography}>
          {props.discription.substring(0, 30)}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Product;
