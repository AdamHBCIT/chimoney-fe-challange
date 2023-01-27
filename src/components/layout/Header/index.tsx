import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full min-h-[4rem] h-16 flex items-center shadow">
      <nav className="container flex justify-between">
        <ul>
          <li>
            <NavLink to="/" className="border-0 font-bold">
              🥕 Chimoney Challange
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/create">Create Meal</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
