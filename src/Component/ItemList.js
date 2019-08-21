import React from "react"
import '../style.css'

const ItemList = ({ task, deleteItem, id }) => {
  return (
    <div className="list">
      <ul>

        <li> <p>{task}</p>
          <button className="deleteBtn" id={id} onClick={() => deleteItem(task)}> X </button>
        </li>

      </ul>
    </div>
  )
}

export default ItemList
