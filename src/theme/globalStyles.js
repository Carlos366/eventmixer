const globalStyles = {
  body: {
    fontFamily: "body",
    overflowX: "hidden",
    bgColor: "main.bg",
    color: "main.body",
    fontSize: "md",
    margin: 0,
    padding: 0,
    transition: "background 0.5s ease-in-out",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "primary.500",
    fontWeight: "500 !important",
  },
  h1: {
    fontSize: "1.875em !important",
  },
  h2: {
    fontSize: "1.5em !important",
  },
  h3: {
    fontSize: "1.25em !important",
  },
  h4: {
    fontSize: "1.125em !important",
  },
  p: {
    a: {
      color: "primary.400",
      textDecoration: "underline",
      transition: "all 0.5s ease-in-out",
      "&:hover, &:active": {
        textDecoration: "none",
      },
    },
  },
  "h1, h2, h3": {
    paddingBottom: "1.75rem",
  },
  ".Toastify__toast": {
    borderRadius: "14px",
    boxShadow: "default",
    padding: 6,
  },
  img: {
    imageRendering: "-webkit-optimize-contrast",
  },
};

export default globalStyles;
