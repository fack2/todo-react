import React, { Component } from 'react';


class AddToDo extends Component {

    render() {
        return (
            <div>
                <p>{this.props.task}</p>
                <button>Delete</button>
            </div>
        )
    }
}



export default AddToDo;