import React from "react"
import '../index.css'

const ItemList = ({ task, deleteItem, id }) => {
  return (
    <div className="list">
      <ul>

        <li> <p>{task}</p>
          <button className="btnDel" id={id} onClick={() => deleteItem(task)}> X </button>
        </li>

      </ul>
    </div>
  )
}

export default ItemList
