import React, { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { postTodos } from '../Cruds/getUsers';

export default function AddHomeWork({todos}) {
    const id = Number(todos[0].userId) // OBTENER EL ID DE CADA USUARIO
    // VARIABLES MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // VARIABLES FORMULARIO
    const [datos, setDatos] = useState({
        completed : false
    });
    const [estadoResp, setEstado] = useState();
    const title = useRef("");

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }   
    const envioDatos = () => {
        const titulo = String(title.current.value);
        const estado = Boolean(datos.completed);
        if ( titulo === ""){
            return alert("ERROR,  TITLE NOT FOUND");
        }else{
            const data = {
                "userId" : id,
                "title" : titulo.toLowerCase(),
                "completed" : estado
            }                        
            postTodos(id,data);
            setEstado("Success")
            document.getElementById("title").value = "";     
        }        
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Homework</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div >
                            <Form.Label>Title</Form.Label>
                            <br></br>
                            <input type="text" placeholder="Title" id='title' ref={title}></input>                            
                        </div>
                        <div >
                        <Form.Label>Completed</Form.Label>
                        <br></br>
                            <input type="Checkbox" placeholder="completed" onChange={handleInputChange}  name ="completed" value="true"></input>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={envioDatos}>
                        Save Changes
                    </Button>                    
                </Modal.Footer>
                <br></br>
                    {estadoResp && <div className="alert alert-success d-flex align-items-center">{estadoResp}</div>}
            </Modal>
        </>
    )
}