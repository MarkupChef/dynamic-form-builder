import { NavLink } from "react-router";
import { ROUTES } from "@/utils/constants/routes.ts";

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
