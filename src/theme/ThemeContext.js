import React, { createContext, useState, useEffect } from "react";
import generateMmvTheme from "../theme/mmvTheme";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [themeConfig, setThemeConfig] = useState(() => {
    const localData = localStorage.getItem("themeConfig");
    return localData
      ? JSON.parse(localData)
      : { color: "light", fontSize: "md" };
  });

  useEffect(() => {
    localStorage.setItem("themeConfig", JSON.stringify(themeConfig));
  }, [themeConfig]);

  const changeThemeFontSize = (size) => {
    setThemeConfig({ ...themeConfig, fontSize: size });
  };

  const fontSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
  };

  const mmvTheme = generateMmvTheme(themeConfig);

  return (
    <ThemeContext.Provider
      value={{
        mmvTheme,
        themeConfig,
        fontSizes,
        changeThemeFontSize,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
