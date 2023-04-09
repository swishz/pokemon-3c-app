import "./homeContent.css";
import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <div className="homeContent-container">
      <div className="welcomeMessage">
        <h1>BEM-VINDOS AO PROJETO FAVORITAR POKÉMONS</h1>
      </div>
      <div className="message-redirect">
        <h2>Para visualizar a lista e começar a favoritar, clique no link abaixo:</h2>
      </div>
      <div className="button-container">
        <Link to="/list">
          <Button className="button" rightIcon={<ArrowRightIcon mx="2px" />}>
            Lista de Pokémons
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeContent;
