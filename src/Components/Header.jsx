import React, { useState , useRef } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiXMark,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchSearchMovies, clearSearch } from "../Redux/searchSlice";

import SearchResults from "./searchResults";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const avatarRef = useRef(null);

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
    if (!value.trim()) dispatch(clearSearch());
    else dispatch(fetchSearchMovies(value));
  };

  const handleMenuClick = (name) => {
  if (name === "WATCHLIST") {
    navigate("/watchlist");
    return;
  }

  if (name === "SEARCH") {
    setShowSearch((prev) => !prev);
    dispatch(clearSearch());
    return;
  }
};


  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black px-5 md:px-10 h-[70px] flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-10 ">
          <img src={logo} alt="Disney" className="w-[60px] md:w-70px]" />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 justify-center ml-10 md:ml-20">
             <div className="flex gap-6 items-center">
            {menu.map((item, index) => (
              <div key={index} onClick={() => handleMenuClick(item.name)}>
                <Headeritem name={item.name} Icon={item.icon} />
              </div>
            ))}

            {showSearch && (
              <input
                autoFocus
                type="text"
                placeholder="Search movies..."
                onChange={handleSearch}
                className="ml-4 px-4 py-2 rounded bg-gray-800 text-white outline-none w-[280px]"
              />
            )}
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="flex md:hidden gap-6 items-center">
            {menu.slice(0, 3).map((item, index) => (
              <div key={index} onClick={() => handleMenuClick(item.name)}>
                <Headeritem name="" Icon={item.icon} />
              </div>
            ))}

            <div className="relative">
              <div onClick={() => setToggle(!toggle)}>
                <Headeritem name="" Icon={HiDotsVertical} />
              </div>

              {toggle && (
                <div className="absolute mt-3 bg-black border border-gray-700 p-3 z-50" >
                  {menu.slice(3).map((item, index) => (
                    <div className="mb-3" key={index} onClick={() => handleMenuClick(item.name)}>
                      <Headeritem name={item.name} Icon={item.icon} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={avatarRef} className="relative  items-center">
  {/* AVATAR */}
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
          className="w-9 h-9 rounded-full cursor-pointer"
          onClick={() => setShowLogout(!showLogout)}
        />

  {/* LOGOUT DROPDOWN */}
         {showLogout && (
          <button
            onClick={handleLogout}
            className="absolute right-0 top-12 bg-red-600 px-4 py-2 rounded text-white text-sm shadow-lg hover:bg-red-700 transition"
           >
             Logout
          </button>
        )}
      </div>

      </header>

      {/* MOBILE SEARCH OVERLAY */}
      {showSearch && (
        <div className="fixed top-[70px] left-0 right-0 bottom-0 bg-black z-[9999] md:hidden overflow-y-auto">
          <div className="p-4 flex items-center gap-3 border-b border-gray-700 sticky top-0 bg-black">
            <input
              autoFocus
              type="text"
              placeholder="Search movies..."
              onChange={handleSearch}
              className="flex-1 px-4 py-3 rounded bg-gray-800 text-white outline-none"
            />
            <button onClick={() => setShowSearch(false)}>
              <HiXMark className="text-2xl text-white" />
            </button>
          </div>
          
          <SearchResults />
        </div>
      )}
    </>
  );
}

export default Header;
