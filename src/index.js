import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./theme/ThemeContext";
import App from "./App";
import './Geral.css';

ReactDOM.render(
    <BrowserRouter>
      <ThemeContextProvider>
        {/* <EditorContextProvider> */}
        <App />
        {/* </EditorContextProvider> */}
      </ThemeContextProvider>
    </BrowserRouter>,
  document.querySelector("#root")
);
