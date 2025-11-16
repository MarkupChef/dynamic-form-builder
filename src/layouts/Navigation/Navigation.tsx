import { ROUTES } from "@/config/routes.ts";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={ROUTES.root} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.forms} end>
            My Forms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
