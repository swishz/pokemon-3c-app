import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className="header-image" src={"images/pokebola.png"} alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default Header;
