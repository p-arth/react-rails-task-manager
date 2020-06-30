import React, { Component } from 'react';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';
    import List from './list/List';
    import Button from 'react-bootstrap/Button';
    import CreateTask from './create_tasks/CreateTasks';
    import DeleteAllTasks from './delete_tasks/DeleteAllTasks';

    class Tasks extends Component {

        constructor(props) {
            super(props);
            this.state = {
                tasks: []
            };
            this.loadTasks = this.loadTasks.bind(this);
        }

        async loadTasks() {
            let response = await fetch('/tasks');
            const tasks = await response.json();
            this.setState({ tasks: tasks });
        }

        componentDidMount() {
            this.loadTasks();
        }      

        render() {
            return (
                <Row>
                    <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                        <p className="title">To-do</p>
                        <List loadTasks={this.loadTasks} tasks={ this.state.tasks.filter((task) => task.done !=true) } />
                        <CreateTask loadTasks={this.loadTasks} />
                    </Col>
                    <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                        <p className="title">Done</p>
                        <List loadTasks={this.loadTasks} tasks={ this.state.tasks.filter((task) => task.done == true) } />
                        <DeleteAllTasks loadTasks={this.loadTasks} />
                    </Col>
                </Row>
            );
        }
    }

export default Tasks;