import React, { Component } from "react";
   import Button from 'react-bootstrap/Button';
   
   class DeleteAllTasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.loadTasks = this.loadTasks.bind(this);
    }

    async loadTasks() {
        let response = await fetch('http://localhost:3001/tasks');
        const tasks = await response.json();
        this.setState({ tasks: tasks });
    }

    async deleteAllTasks(task) {
      if (window.confirm(`Are you sure you want to delete all done tasks?`)) {
          await fetch(`delete_all_done`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
          },
            body: JSON().stringify({
              done: true
            }) 
          });
          this.props.loadTasks();
      }
    }

    componentDidMount() {
        this.loadTasks();
    }      

    render() {
      return (
        {this.props.tasks.map((task) => 
        <Button variant="red" className="float-right remove_tasks_btn" loadTasks={this.loadTasks} onClick={() => this.deleteAllTasks(task)}>Remove all done tasks</Button>
        });
    }
  }
   
export default DeleteAllTasks;