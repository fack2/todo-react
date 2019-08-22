import React, { Component } from "react"
import ItemList from "./ItemList"
import InputForm from './InputForm'
import '../style.css';


class App extends Component {
  state = {
    list: [{ todo: "plan for the project" }, { todo: "write issues" }],
    todo: ""
  }

  AddItem = event => {
    event.preventDefault()
    this.setState(({ list, todo }) => ({
      list: [...list, { todo }],
      todo: ""
    }))
  }

  handleChange = event => {
    this.setState({ todo: event.target.value })
  }

  deleteItem = taskName => {
    const data = this.state.list.filter(ele => {
      return ele.todo !== taskName
    })

    this.setState({ list: data })
  }
  render() {
    return (
      <div>
        <InputForm
          todo={this.state.todo}
          AddItem={this.AddItem}
          handleChange={this.handleChange} />

        {this.state.list.map((task, key) => (
          <ItemList
            key={key}
            id={key}
            task={task.todo}
            deleteItem={this.deleteItem}
          />
        ))}
      </div>
    )
  }
}

export default App
