import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState, useEffect } from "react";

const info = [
  { message: "text 1", checked: false, id: Math.random() },
  { message: "text 2", checked: false, id: Math.random() },
  { message: "text 3", checked: false, id: Math.random() },
];

function Homepage() {
  const [list, setList] = useState(info);
  const [showList, setShowList] = useState(null); // New state for filtered items
  const [text, setText] = useState("");

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
  };

  const handlerClearComplete = (e) => {
    const newList = [...list];
    const clearList = newList.filter((item) => !item.checked);
    setList(clearList);
    setShowList(null);
  };

  const filterChecked = () => {
    const checkedList = list.filter((item) => item.checked);
    setShowList(checkedList);
  };

  const filterActive = () => {
    const uncheckedList = list.filter((item) => !item.checked);
    setShowList(uncheckedList);
  };

  const showAll = () => {
    setShowList(null); // Reset the filtered items to show all
  };

  const newList = showList !== null ? showList : list;

  const activeLeftAmount = () => {
    const activeLeft = list.filter((item) => !item.checked).length;
    return activeLeft;
  };

  useEffect(() => {
    activeLeftAmount();
  }, [list]);

  const onDragEnd = (event) => {
    console.log("onDragEnd", event);
  };

  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold tracking-widest text-center">
        T O D O
      </h1>
      <form className="text-center" onSubmit={handlerSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-teal-400 border-2 "
        />
      </form>
      <div>
        <ul className="flex flex-col items-center justify-center text-center">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={newList}
              strategy={verticalListSortingStrategy}
            >
              {newList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-evenly w-72"
                  >
                    <input
                      type="checkbox"
                      name={item.message}
                      id={item.id}
                      checked={item.checked}
                      onChange={() => handlerChecked(item.id)}
                    />
                    <label
                      htmlFor={item.id}
                      className={!item.checked ? "font-bold" : "line-through"}
                    >
                      {item.message}
                    </label>
                    <button onClick={() => handlerDeletedList(item.id)}>
                      X
                    </button>
                  </li>
                );
              })}
            </SortableContext>
          </DndContext>
        </ul>
      </div>

      <div className="mt-4 text-center">
        <button onClick={filterChecked} className="bg-red-400">
          Show Checked Items
        </button>
        <button onClick={filterActive} className="bg-violet-200">
          Show Unchecked Items
        </button>
        <button onClick={showAll} className="bg-green-300 ">
          Show All Items
        </button>
        <p className="text-xl ">active left: {activeLeftAmount()}</p>
        <button onClick={() => handlerClearComplete()} className=" bg-cyan-400">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Homepage;
