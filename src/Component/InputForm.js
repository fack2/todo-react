import React, { Component } from "react"
import '../style.css'

class InputForm extends Component {
    render() {
        return (
            < div >
                <img src='https://jipanel.com/blog/image/19/post-1529640873-image_fileuser_id_43.png' alt="Logo" />
                <h1>To Do App</h1>
                <form className="taskForm">
                    <input className="box-input" onChange={this.props.handleChange} type="text" value={this.props.todo} placeholder="Add Task..." />
                    <button className="addBtn" onClick={this.props.AddItem}>ADD</button>
                </form>
            </div >
        )
    }
}





export default InputForm
