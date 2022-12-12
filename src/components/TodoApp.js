import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [listNames, setListNames] = useState([]);
  const handleAddName = (name) => {
    setListNames((s) => [...s, { name, isComplete: false }]);
  };
  const handleComplete = (i) => {
    setListNames((s) => {
      let tmp = [...s];
      tmp[i].isComplete = true;
      return tmp;
    });
  };
  const handleRemove = (i) => {
    setListNames((s) => s.filter((item, index) => index !== i));
  };
  return (
    <div className="app">
      <div className="todo-list">
        {listNames.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            complete={() => handleComplete(index)}
            remove={() => handleRemove(index)}
          />
        ))}
        <TodoForm addName={handleAddName} />
      </div>
    </div>
  );
}

export default TodoApp;
