import React from "react";
import ThemeContext from "../Store/ThemeContext";
function Button({ text }) {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <>
      <button
        className={`${
          !theme
            ? "bg-slate-500 border border-gray-100"
            : "bg-gray-800 text-white border border-gray-100"
        }bg-slate-500 text-white py-2 px-2 rounded`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
