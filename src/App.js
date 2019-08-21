import React, { Component } from 'react';
import AddToDo from './Component/AddToDo'

class App extends Component {
  state = {
    list: [{ 'todo': 'plan for the project' },
    { 'todo': 'write issues' }],
    todo: ''
  }


  AddItem = (event) => {
    event.preventDefault()
    this.setState(({ list, todo }) => ({
      list: [...list, { todo }],
      todo: ''
    }))
  }

  handleChange = event => {
    this.setState({ todo: event.target.value })
  }


  render() {
    return (
      <div>
        <form>

          <input type="text" value={this.state.todo} onChange={this.handleChange} placeholder='add your task ...!!!'></input>
          <button onClick={(e) => this.AddItem(e)}>ADD</button>
        </form>
        <div>
          {this.state.list.map((task, key) => {
            return (<AddToDo key={key}
              task={task.todo} />)
          })}
        </div>

      </div>
    )
  }
}

export default App;
