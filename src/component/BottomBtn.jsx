import React, { useState } from "react";
import "../App.css";

function BottomBtn({ isDark, isChecked, setChecked }) {
  return (
    <div
      className={`flex items-center justify-center gap-6 p-2 lg:p-0 mt-4 lg:mt-0 text-sm text-center rounded-lg ${
        isDark
          ? `text-darkTheme-DarkGrayishBlue bg-darkTheme-VeryDarkDesaturatedBlue`
          : ` bg-lightTheme-VeryLightGray text-lightTheme-VeryDarkGrayishBlue`
      } `}
    >
      <div>
        <input
          type="radio"
          name="option"
          id="all"
          value={"all"}
          checked={isChecked === "all"}
          onChange={(e) => setChecked(e.target.value)}
          className="hidden peer"
        />
        <label
          htmlFor="all"
          className={`block p-2 text-center cursor-pointer select-none rounded-xl ${
            isChecked === "all" ? ` text-darkTheme-HoverBlue` : ``
          } `}
        >
          All
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          id="active"
          value={"active"}
          checked={isChecked === "active"}
          onChange={(e) => setChecked(e.target.value)}
          className="hidden peer"
        />
        <label
          htmlFor="active"
          className={`block p-2 text-center cursor-pointer select-none rounded-xl ${
            isChecked === "active" ? ` text-darkTheme-HoverBlue` : ``
          } `}
        >
          Active
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          id="completed"
          value={"completed"}
          checked={isChecked === "completed"}
          onChange={(e) => setChecked(e.target.value)}
          className="hidden peer"
        />
        <label
          htmlFor="completed"
          className={`block p-2 text-center cursor-pointer select-none rounded-xl peer-checked:text-darkTheme-HoverBlue ${
            isChecked === "completed" ? ` text-darkTheme-HoverBlue` : ``
          } `}
        >
          Completed
        </label>
      </div>
    </div>
  );
}

export default BottomBtn;
