import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Routes from './routes/routes';
import ScrollToTop from './routes/ScrollToTop';

import { ThemeContext } from "./theme/ThemeContext";
import { ChakraProvider, Box, Grid, Flex, Image } from "@chakra-ui/react";

import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = animated(Box);

const App = () => {
  const { mmvTheme } = useContext(ThemeContext);

  // Transition between routes
  const location = useLocation();


  // determine if the current route has a /redirect/ if so do not show header
  const splitRoute = location.pathname.split("/");
  const isRedirectRoute = splitRoute[1].includes("redirect");

  return (
    <ChakraProvider resetCSS={true} theme={mmvTheme}>
      <ScrollToTop />
      <Grid minH="100vh" gridTemplateRows={"auto 1fr auto"}>
          <Header />
          <MainContainer>
            <Routes />
          </MainContainer>
        <Footer />
      </Grid>
    </ChakraProvider>
  );
};


export default App;
