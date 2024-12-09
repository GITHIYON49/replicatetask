import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigate();

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-1 md:justify-around drop-shadow-xl relative">
        <div className="h-20 w- 20 md:h-28 md:w-28 xl:h-40 xl:w-40">
          <Link to={"/"}>
            <img
              className="h-full w-full object-cover"
              src="https://biz-excellence.net/wp-content/uploads/2024/06/Add-a-subheading.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex items-center md:w-2/5 lg:w-1/3 xl:w-1/4 justify-evenly text-base font-semibold">
          <li className="hover:text-slate-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-slate-500">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-slate-500">
            <Link to={"/"}>Programs</Link>
            <ChevronDown className="inline-block pl-1" />
          </li>
          <li className="hover:text-slate-500">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-2 items-center text-base font-semibold">
          <span className="hover:text-slate-500">
            <Link to={"/"}>Login</Link>
          </span>
          <Button
            className="bg-orange-600 rounded-3xl w-28 hover:bg-orange-400 transition-all"
            onClick={() => {
              navigation("/registration");
            }}
          >
            Register
          </Button>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <X
              className="cursor-pointer text-blue-500"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          ) : (
            <Menu
              className="cursor-pointer text-blue-500"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </div>

        <ul
          className={`w-full md:hidden absolute top-20 left-0 flex flex-col items-start gap-3 list-none transform transition-transform bg-gray-100 rounded-xl overflow-hidden z-50 ${
            showMenu ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform o.3s ease, opacity o.3s ease" }}
        >
          <li className="w-full p-2 bg-gray-50 cursor-pointer">
            <Link className="w-full" to={"/"}>
              Home
            </Link>
          </li>
          <li className="w-full p-2 hover:bg-gray-50 active:bg-gray-50 transition-all cursor-pointer">
            <Link className="w-full" to={"/about"}>
              About
            </Link>
          </li>
          <li className="w-full p-2 hover:bg-gray-50 active:bg-gray-50 transition-all cursor-pointer">
            <Link className="w-full" to={"/"}>
              Programs
            </Link>
          </li>
          <li className="w-full p-2 hover:bg-gray-50 active:bg-gray-50 transition-all cursor-pointer">
            <Link className="w-full" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="w-full p-2 hover:bg-gray-50 active:bg-gray-50 transition-all cursor-pointer">
            <Link className="w-full" to={"/"}>
              Login
            </Link>
          </li>
          <li className="w-full p-2 hover:bg-gray-50 active:bg-gray-50 transition-all cursor-pointer">
            <Link className="w-full" to={"/registration"}>
              {" "}
              Registration
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
