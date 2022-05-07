import React, { useState, useEffect } from 'react';
import { Button, Modal,Table } from 'react-bootstrap';
import { getTodos } from '../Cruds/getUsers';
import AddHomeWork from '../AddHomework/AddHomeWork';
export default function TodosViews({data}) {
    const id = Number(data.id);
    const [todos, setTodos] = useState([]);
    // variables del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        getTodos(id).then(todos => setTodos(todos));
    },[])    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Todos
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Todos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Title</th>
                                <th>Status/Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    (dat) => (
                                        <tr key={dat.id}>
                                            <td>{dat.id}</td>
                                            <td>{dat.title}</td>
                                            <td>{String(dat.completed)}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <AddHomeWork variant="primary" todos={todos}></AddHomeWork>
                </Modal.Footer>
            </Modal>
        </>
    )
}