import { Link } from "react-router-dom";
import classes from "./navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
