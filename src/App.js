import React, { Component } from "react"
import ItemList from "./Component/ItemList"

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
        <form>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="add your task ...!!!"
          />
          <button onClick={this.AddItem}>ADD</button>
        </form>
        <div>
          {this.state.list.map((task, key) => (
            <ItemList
              key={key}
              id={key}
              task={task.todo}
              deleteItem={this.deleteItem}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
