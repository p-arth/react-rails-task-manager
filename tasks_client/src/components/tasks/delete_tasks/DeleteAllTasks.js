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

    async deleteAllDoneTasks() {
      if (window.confirm(`Are you sure you want to delete all done tasks?`)) {
          await fetch(`http://localhost:3001/tasks/`, {method: 'DELETE'});
          this.props.loadTasks();
      }
    }

    componentDidMount() {
        this.loadTasks();
    }      

    render() {
      return (
        <div>
          <Button variant="red" className="float-right remove_tasks_btn" loadTasks={this.loadTasks} onClick={() => this.deleteAllDoneTasks()}>Remove all done tasks</Button>
        </div>
      );
    }
  }
   
export default DeleteAllTasks;