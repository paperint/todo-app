import React from "react";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

function Header({ isDark, setIsDark }) {
  return (
    <div className="flex justify-between w-full mt-12">
      <h1 className="text-3xl font-bold tracking-widest text-center text-lightTheme-VeryLightGray">
        T O D O
      </h1>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <img src={iconSun} alt="light mode" />
        ) : (
          <img src={iconMoon} alt="dark mode" />
        )}
      </button>
    </div>
  );
}

export default Header;
