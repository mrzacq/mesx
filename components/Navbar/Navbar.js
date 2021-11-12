import { useState } from "react";
import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import MobileButton from "./MobileButton";
import PageUrl from "./PageUrl";
import Profile from "./Profile";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const item = [
    {
      name: "Kelas",
      url: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    { name: "Events", url: "/", svg: "" },
    { name: "Kontak", url: "#kontak", svg: "" },
  ];

  return (
    <div className="min-w-full border-b p-4 md:p-7 sticky top-0 bg-white">
      <div className="flex justify-between items-center md:mx-20">
        <Logo />
        <div className="hidden md:flex justify-center items-center space-x-5">
          {item.map((item, i) => {
            return (
              <div key={i}>
                <PageUrl name={item.name} url={item.url} svg={item.svg} />
              </div>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Profile />
        </div>
        <div className="md:hidden">
          <MobileButton setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      </div>
      {showMenu && <MenuMobile item={item} />}
    </div>
  );
}

export default Navbar;
