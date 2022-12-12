import React, { useState } from "react";

function TodoForm({ addName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addName(e.target.listName.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="itemInput" name="listName" />
      <button className="addItemButton">Add Item</button>
    </form>
  );
}

export default TodoForm;
