import React, { useState, useEffect } from "react";
import "../App.css";
import BottomBtn from "../component/BottomBtn";
import List from "../component/List";
import Form from "../component/Form";
import Header from "../component/Header";

const info = [
  {
    message: "Press Enter to add todo list",
    checked: false,
    id: Math.random(),
  },
  {
    message: "You can drag and drop to reader list",
    checked: false,
    id: Math.random(),
  },
];

function Homepage() {
  const [list, setList] = useState(info);
  const [showList, setShowList] = useState(null); // New state for filtered items
  const [text, setText] = useState("");
  const [isDark, setIsDark] = useState(true);
  const [isChecked, setChecked] = useState("all");
  const newList = showList !== null ? showList : list;

  const handlerSubmit = (e) => {
    e.preventDefault();
    const addMessage = [...list];
    if (text !== "") {
      addMessage.push({ message: text, checked: false, id: Math.random() });
    }
    setList(addMessage);
    setText("");
  };

  const handlerChecked = (id) => {
    const newList = [...list];
    const updatedItem = newList.find((item) => item.id === id);
    if (updatedItem) {
      updatedItem.checked = !updatedItem.checked;
    }
    setList(newList);
  };

  const handlerDeletedList = (id) => {
    const newList = [...list];
    const deletedItem = newList.filter((item) => item.id !== id);
    setList(deletedItem);
    setShowList(deletedItem);
  };

  const handlerClearComplete = () => {
    const newList = [...list];
    const clearList = newList.filter((item) => !item.checked);
    setList(clearList);
    setShowList(null);
    setChecked("all");
  };

  const handlerSort = () => {
    if (isChecked === "all") {
      setShowList(null);
    }
    if (isChecked === "active") {
      const uncheckedList = list.filter((item) => !item.checked);
      setShowList(uncheckedList);
    }
    if (isChecked === "completed") {
      const checkedList = list.filter((item) => item.checked);
      setShowList(checkedList);
    }
  };

  useEffect(() => {
    handlerSort();
  }, [isChecked]);

  useEffect(() => {
    handlerSort();
  }, [list]);

  const activeLeftAmount = () => {
    const activeLeft = list.filter((item) => !item.checked).length;
    return activeLeft;
  };

  useEffect(() => {
    activeLeftAmount();
  }, [list]);

  return (
    <div
      className={`w-full h-screen ${
        isDark ? `bgmain-darkmode` : `bgmain-lightmode`
      }`}
    >
      <div className="w-full max-w-xl mx-auto">
        <Header isDark={isDark} setIsDark={setIsDark} />

        <Form
          text={text}
          setText={setText}
          isDark={isDark}
          handlerSubmit={handlerSubmit}
        />
        <List
          list={list}
          setList={setList}
          newList={newList}
          isDark={isDark}
          handlerChecked={handlerChecked}
          handlerDeletedList={handlerDeletedList}
          activeLeftAmount={activeLeftAmount}
          handlerClearComplete={handlerClearComplete}
          isChecked={isChecked}
          setChecked={setChecked}
        />
        <div className=" lg:hidden">
          <BottomBtn
            isDark={isDark}
            isChecked={isChecked}
            setChecked={setChecked}
          />
        </div>

        <p className="mt-10 text-xs text-center text-darkTheme-DarkGrayishBlue">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default Homepage;
