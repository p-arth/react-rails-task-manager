import React, { Component } from 'react';
    import Row from 'react-bootstrap/Row';
    import Table from 'react-bootstrap/Table';
    import Card from 'react-bootstrap/Card';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    class List extends Component {
        render() {
            return (
                <div>
                    <Card>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    {this.props.tasks.map((task, index) => {
                                        return <tr key={task.id}>
                                            <td className="col-md-10">{task.title}</td>
                                            <td>
                                                {
                                                    task.done == false
                                                    ? <a className="check" href="#">
                                                        <FontAwesomeIcon icon="check-circle" />
                                                    </a>
                                                    : null
                                                }
                                            </td>
                                            <td>
                                                <a className="delete" href="#">
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </a>
                                            </td>
                                        </tr>;
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
    }

export default List;