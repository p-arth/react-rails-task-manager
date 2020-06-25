import React, { Component } from 'react';
    import Row from 'react-bootstrap';
    import Col from 'react-bootstrap';

    class Tasks extends Component {
        render() {
            return (
                <Row>
                    <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                        <p className="title">To-do</p>
                        List...
                    </Col>
                    <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
                        <p className="title">Done</p>
                        List...
                    </Col>
                </Row>
            );
        }
    }

export default Tasks;