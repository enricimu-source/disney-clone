import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  fetchSearchMovies,
  clearSearch,
} from "../Redux/searchSlice";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      dispatch(clearSearch());
    } else {
      dispatch(fetchSearchMovies(value));
    }
  };

  const handleMenuClick = (name) => {
  if (name === "WATCHLIST") navigate("/watchlist");
  if (name === "SEARCH") {
    setShowSearch((prev) => !prev);
    dispatch(clearSearch());
  }
};


  

  return (
    <div className="flex items-center justify-between p-5 gap-8">
      <div className="flex gap-16 items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menu.map((item, index) => (
            <div key={index} onClick={() => handleMenuClick(item.name)}>
              <Headeritem name={item.name} Icon={item.icon} />
            </div>
          ))}

          {/* Search Input */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search movies..."
              autoFocus
              onChange={handleSearch}
              className="ml-4 px-4 py-2 rounded bg-gray-800 text-white outline-none w-[300px]"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-6">
          {menu.slice(0, 3).map((item, index) => (
            <div key={index} onClick={() => handleMenuClick(item.name)}>
              <Headeritem name="" Icon={item.icon} />
            </div>
          ))}

          <div className="relative" onClick={() => setToggle(!toggle)}>
            <Headeritem name="" Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 border border-gray-700 p-3 z-50 bg-black">
                {menu.slice(3).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleMenuClick(item.name)}
                  >
                    <Headeritem name={item.name} Icon={item.icon} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="flex items-center gap-3">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={handleLogout}
          title="Logout"
        />
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
