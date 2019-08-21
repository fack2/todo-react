import React from "react"

const ItemList = ({ task, deleteItem, id }) => {
  return (
    <div>
      <p>{task}</p>
      <button id={id} onClick={() => deleteItem(task)}>
        {" "}
        Delete
      </button>
    </div>
  )
}

export default ItemList
