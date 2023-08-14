import React from "react";
import iconCross from "../images/icon-cross.svg";
import BottomBtn from "./BottomBtn";

function List({
  isDark,
  handlerChecked,
  handlerDeletedList,
  activeLeftAmount,
  handlerClearComplete,
  newList,
  setList,
  list,
  setChecked,
  isChecked,
}) {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("index");
    const newItems = [...list];
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);
    setList(newItems);
  };

  return (
    <div className="shadow-lg ">
      <ul
        className={`flex flex-col items-center justify-center w-full mt-8 text-center rounded-lg ${
          isDark
            ? `bg-darkTheme-VeryDarkDesaturatedBlue`
            : ` bg-lightTheme-VeryLightGray`
        } `}
      >
        {newList.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className={`flex items-center justify-between w-full gap-10 p-5 border-b-2 cursor-move ${
              isDark
                ? `text-lightTheme-VeryLightGrayishBlue border-b-lightTheme-DarkGrayishBlue`
                : ` text-lightTheme-VeryDarkGrayishBlue border-b-lightTheme-LightGrayishBlue`
            } `}
          >
            <input
              type="checkbox"
              name={item.message}
              id={item.id}
              checked={item.checked}
              onChange={(e) => handlerChecked(item.id)}
              className="w-6 h-6 p-2 border rounded-full appearance-none border-lightTheme-LightGrayishBlue "
              // className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gray-500 hover:ring hover:ring-gray-300 focus:outline-none"
            />
            <div className="w-full">
              <p
                className={`w-full ${
                  item.checked
                    ? `line-through ${
                        isDark
                          ? `text-darkTheme-DarkGrayishBlue`
                          : ` text-lightTheme-LightGrayishBlue`
                      } `
                    : `font-bold`
                } whitespace-normal break-all text-left`}
              >
                {item.message}
              </p>
            </div>

            <div>
              <button
                className="w-full"
                onClick={() => {
                  handlerDeletedList(item.id);
                }}
              >
                <img src={iconCross} alt="deleted" />
              </button>
            </div>
          </li>
        ))}

        <div
          className={`flex items-center justify-between w-full p-4 text-xs ${
            isDark
              ? `text-darkTheme-DarkGrayishBlue`
              : ` text-lightTheme-DarkGrayishBlue `
          } `}
        >
          <p>{activeLeftAmount()} items left</p>
          <div className=" max-lg:hidden">
            <BottomBtn
              isDark={isDark}
              isChecked={isChecked}
              setChecked={setChecked}
            />
          </div>

          <button
            onClick={() => handlerClearComplete()}
            className="hover:text-darkTheme-HoverBlue"
          >
            Clear Completed
          </button>
        </div>
      </ul>
    </div>
  );
}

export default List;
