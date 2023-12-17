import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#252529] border-b-2 text-white border-[#14b8a6] w-full flex justify-between px-6 py-2 items-center min-h-[60px]">
      <Link
        to="/"
        className="max-sm:text-lg sm:text-2xl lg:text-3xl  flex items-center gap-5 font-semibold tracking-loose"
      >
        <img src="/images/logo1.png" className="max-sm:w-[30px] sm:w-[50px]" alt="" />
        <p className="text-[#90D41C] whitespace-nowrap max-sm:hidden ">
          Journey <span className="text-[#f8d549]">Begins</span>!
        </p>
      </Link>
      <div>
        <ul className="flex gap-5 justify-evenly max-sm:text-base sm:text-base md:text-xl font-semibold whitespace-nowrap ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plan"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Plan Trip
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Cart
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
