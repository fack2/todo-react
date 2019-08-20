import React, { Component } from "react"
import AddToDo from "./Component/AddToDo"
import ToDoList from "./Component/ToDoList"

class App extends Component {

  state = {
    items: [],
    CurrentTask: {
      text: '',
      btn: ''

    }
  }

  addItem = ele => {
    ele.preventDefault()
    const newItem = this.state.CurrentTask

    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        CurrentTask: { ...this.state.CurrentTask, text: '' },
      })
    }
  }


  render() {
    return (
      <div>
        <ToDoList addItem={this.addItem} />
        <AddToDo addItem={this.addItem} currentText={this.state.CurrentTask.text} />
      </div>
    )
  }
}

export default App
