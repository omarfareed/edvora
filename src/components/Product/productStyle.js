import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  productImg: {
    width: "7rem",
    height: "7rem",
    borderRadius: "3px",
  },
  productContainer: {
    "&.MuiCard-root": {
      width: "21rem",
      height: "15rem",
      //   padding : "0rem"
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
    },
  },
  productTop: {},
  productListContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "1rem",
    padding: "2.1rem 4.4rem 1.9rem 0rem",
  },
  line: {
    border: "1px solid rgba(203, 203, 203, 0.5)",
    padding: 0,
    backgroundColor: "rgba(203, 203, 203, 0.5)",
    margin: "1rem 0",
  },
  mainContainer: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
      minHeight: "100%",
      [theme.breakpoints.down("lg")]: {
        padding: "2rem",
      },
    },
  },
  edvoraHeader: {
    "&.MuiTypography-h1": {
      fontWeight: "bold",
      fontSize: "3.5rem",
      lineHeight: "42px",
      color: "rgba(255, 255, 255, 0.87)",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontFamily: "SF Pro Display",
      margin: 0,
      padding: 0,
    },
  },
  filterContainer: {
    "&.MuiGrid-root": {
      width: "23rem",
      padding: "2.4rem 3.5rem 4.2rem 2.5rem",
      backgroundColor: "#131313",
      borderRadius: "10px",
      margin: "4rem",
    },
  },
  filterHeader: {
    "&.MuiTypography-h5": {
      fontFamily: "SF Pro Display",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px",
      color: "#A5A5A5",
    },
  },
  filterMenu: {
    "&.MuiButton-root": {
      backgroundColor: "#232323",
      "&:hover": {
        backgroundColor: "#131313",
      },
    },
  },
  select: {
    "&.MuiSelect-select": {
      color: "#FFF",
    },
    "&.MuiSelect-icon": {
      fill: "#FFF !important",
    },
  },
  productsHeader: {
    "&.MuiTypography-h3": {
      fontFamily: "SF Pro Display",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "30px",
      color: "rgba(255, 255, 255, 0.5)",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  productText: {
    fontFamily: "SF Pro Display",
    color: "#FFF",
  },
  productTextBlur: {
    fontFamily: "SF Pro Display",
    color: "rgba(255,255,255,0.6)",
  },
}));
export default useStyle;
