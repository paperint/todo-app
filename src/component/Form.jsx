import React from "react";

function Form({ text, setText, isDark, handlerSubmit }) {
  return (
    <form className="relative w-full mt-8 text-center" onSubmit={handlerSubmit}>
      <div className="absolute translate-y-1/2 border rounded-full w-7 h-7 left-5 bottom-1/2 border-lightTheme-DarkGrayishBlue"></div>
      <input
        type="text"
        value={text}
        placeholder="Create a new todo..."
        onChange={(e) => setText(e.target.value)}
        className={`w-full rounded-md outline-none py-4 pl-20 pr-4 ${
          isDark
            ? `text-lightTheme-VeryLightGrayishBlue bg-darkTheme-VeryDarkDesaturatedBlue`
            : ` bg-lightTheme-VeryLightGray text-lightTheme-LightGrayishBlue`
        } `}
      />
    </form>
  );
}

export default Form;
