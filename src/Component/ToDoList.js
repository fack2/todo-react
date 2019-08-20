import React, { Component } from "react"

class ToDoList extends Component {


    render() {
        return (
            <div>
                <form>
                    <input type="text" vlaue="task" placeholder="add your task ..." />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}



export default ToDoList
