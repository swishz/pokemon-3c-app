import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Home from "components/Home";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
