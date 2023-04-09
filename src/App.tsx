import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import List from "pages/List";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
