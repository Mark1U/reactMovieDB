import { NavLink } from "react-router";
const Header = () => {
  const navLinkClass =
    "w-64 text-center text-gray-900 bg-white hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700  ";
  return (
    <header>
      <nav className="flex flex-col items-center justify-center px-8  py-4">
        <h1 className="text-2xl font-bold">Movie Db</h1>

        <div className="flex py-4 px-8 items-stretch justify-between w-full">
          {/* <p>Sort by:</p>
          <button type="button" class="">Light</button>
 */}
          <NavLink className={navLinkClass} to="/date-asc">
            Date Ascending
          </NavLink>
          <NavLink className={navLinkClass} to="/date-desc">
            Date Descending
          </NavLink>
          <NavLink className={navLinkClass} to="/">
            Best Rating
          </NavLink>
          <NavLink className={navLinkClass} to="/a-z">
            A-Z
          </NavLink>
          <NavLink className={navLinkClass} to="/z-a">
            Z-A
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
