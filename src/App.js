
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Link, useLocation, BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from './pages/signin';
import Signup from './pages/signup';

import Home from './pages/home';
import theme from './theme';

import fireapp from './firebase'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>

          <Routes>
            <Route index path="/" element={<Signin/>} />
            <Route index path="/signup" element={<Signup/>} />
            <Route index path="/home" element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;