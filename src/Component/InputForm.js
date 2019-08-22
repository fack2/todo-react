import React from "react"
import "../style.css"

const InputForm = ({ handleChange, todo, AddItem }) => {
  return (
    <div>
      <img
        src="https://jipanel.com/blog/image/19/post-1529640873-image_fileuser_id_43.png"
        alt="Logo"
      />
      <h1>To Do App</h1>
      <form className="taskForm">
        <input
          className="box-input"
          onChange={handleChange}
          type="text"
          value={todo}
          placeholder="Add Task..."
        />
        <button className="addBtn" onClick={AddItem}>
          ADD
        </button>
      </form>
    </div>
  )
}
export default InputForm
