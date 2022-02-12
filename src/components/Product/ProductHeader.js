import useStyle from "./productStyle";
import { Grid, Typography } from "@mui/material";
const ProductHeader = (props) => {
  const style = useStyle();
  return (
    <Grid container  spacing={"2rem"} sx={{ backgroundColor: "#F00" }}>
      <Grid item>
        <img src={props.image} className={style.productImg} />
      </Grid>
      <Grid
        item
        xs={6}
        className={style.textContainer}
        rowSpacing="1rem"
        container
        direction="column"
      >
        <Grid item component={Typography}>
          Product Name
        </Grid>
        <Grid item component={Typography}>
          Brand Name
        </Grid>
        <Grid item component={Typography}>
          $ 29.99
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductHeader;
