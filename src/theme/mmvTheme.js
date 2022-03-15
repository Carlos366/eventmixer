import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import buttonStyles from "../theme/components/Button";

const generateMvmTheme = (config) => {
  const breakpoints = createBreakpoints({
    sm: "600px",
    md: "768px",
    lg: "1024px",
    xl: "1920px",
    xxl: "2560px",
  });

  // extending the properties of the chakra-ui theme specific to this projetc
  const themeProps = {
    breakpoints,
    colors: {
      main: {
        bg: "#FFFFFF",
        body: "#131219",
      },
      primary: {
        100: "#D4E5F5",
        200: "#ADCAEB",
        300: "#7698C4",
        400: "#456089",
        500: "#14223B",
        600: "#0E1A32",
        700: "#0A132A",
        800: "#060D22",
        900: "#03091C",
        opaque: "rgba(20, 34, 59, 0.5)",
      },
      info: {
        100: "#C7F9F1",
        200: "#92F4EC",
        300: "#59DEDD",
        400: "#2FB3BE",
        500: "#007D93",
        600: "#00617E",
        700: "#004969",
        800: "#003455",
        900: "#002646",
      },
      grey: {
        400: "#eaeaea",
        500: "#c6d3ec",
        600: "#4a4a4a",
        opaque: "rgba(177, 177, 177, 0.5)",
      },
    },
    fonts: {
      heading: '"Inter", sans-serif',
      body: '"Inter", sans-serif',
      mono: "Menlo, monospace",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    radii: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    shadows: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08), 0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.08), 0 8px 10px rgba(0, 0, 0, 0.08)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    opacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      100: "1",
    },
    styles: {
      global: {
        body: {
          fontFamily: "body",
          overflowX: "hidden",
          bgColor: "main.bg",
          color: "main.body",
          fontSize: config.fontSize,
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
      },
    },
    components: {
      Button: buttonStyles,
    },
  };

  return extendTheme(themeProps);
};
// create breakpoints to determine the sizes to do the media queries

export default generateMvmTheme;
