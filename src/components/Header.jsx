import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="flex  bg-[#3f8a90] justify-between items-center p-4 text-white w-full border-2 border-b-neutral-300 rounded-sm">
        <div>
          <Link to="/">
            <img  className="w-24" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-3">
            <NavLink  to="/">
              <button className="bg-transparent border-2 border-[#f9b5ac] text-[#f9b5ac] hover:bg-[#f9b5ac] hover:text-white rounded-lg font-bold p-2">Home</button>
            </NavLink>

            <NavLink to="/transaction">
              <button className="bg-transparent border-2 border-[#d0d6b5] text-[#d0d6b5] hover:bg-[#d0d6b5] hover:text-black rounded-lg font-bold p-2">Transaction</button>
            </NavLink>
            
            <NavLink to="/data">
              <button className="bg-transparent border-2 border-[#ee7674] text-[#ee7674] hover:bg-[#ee7674] hover:text-white rounded-lg font-bold p-2">Data</button>
            </NavLink>
        </div>
    </nav>
  )
}

export default Header;