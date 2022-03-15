const buttonStyles = {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "1rem",
    transition: "all 0.5s ease-in-out",
    py: 6,
  },
  defaultProps: {
    variant: "solid",
  },
  // 3. We can add a new visual variant
  variants: {
    "with-shadow": {
      bg: "red.400",
      boxShadow: "0 0 2px 2px #efdfde",
    },
    "solid-white": {
      bg: "white",
      boxShadow: "default",
    },
    // 4. We can override existing variants
    primary: (props) => ({
      px: 8,
      color: "#ffffff",
      bg: "primary.500",
      boxShadow: "default",
      ":hover, :active": {
        bg: "primary.400",
      },
      ":hover[disabled]:hover": {
        bg: "primary.500",
      },
    }),
    solid: {
      boxShadow: "default",
    },
    transparent: (props) => ({
      bg: "transparent",
      p: 4,
      _hover: {
        bg: "rgba(0, 0, 0, 0.15)",
      },
      _active: {
        bg: "rgba(0, 0, 0, 0.15)",
      },
    }),
  },
};

export default buttonStyles;
