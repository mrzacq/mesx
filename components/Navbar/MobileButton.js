import { useState } from "react";

function MobileButton({ setShowMenu, showMenu }) {
  const [menuBtn, setMenuBtn] = useState("menu-btn");

  const handleMenuMobile = () => {
    if (showMenu) {
      setShowMenu(false);
      setMenuBtn("menu-btn");
    } else {
      setShowMenu(true);
      setMenuBtn("menu-btn open");
    }
  };

  return (
    <div>
      <div className={menuBtn} onClick={() => handleMenuMobile()}>
        <div className="menu-btn burger"></div>
      </div>
    </div>
  );
}

export default MobileButton;
