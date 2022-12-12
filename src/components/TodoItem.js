import React from "react";

function TodoItem({ item, complete, remove }) {
  return (
    <div className="singleTodoItem">
      <div>
        <p className={`${item.isComplete ? "completedItem" : ""}`}>
          {item.name}
        </p>
        <button className="markCompleteTodoItem" onClick={() => complete()}>
          Complete
        </button>
        <button className="removeTodoItem" onClick={() => remove()}>
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
