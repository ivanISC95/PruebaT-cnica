import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PostsViews from './PostsViews';
import TodosViews from './TodosViews';
export default function Views({data}) {
  // VARIABLES DEL MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Nombre : {data.name}</label>
            <hr></hr>
            <label>User Name : {data.username}</label>
            <hr></hr>
            <label>Email : {data.email}</label>
            <hr></hr>
            <label>Phone : {data.name}</label>
            <hr></hr>
            <label>City :  {data.address.city}</label>     
          </form>
        </Modal.Body>
        <Modal.Footer>
          <PostsViews onClick={handleClose} data={data}></PostsViews>
          <TodosViews data={data}></TodosViews>
        </Modal.Footer>
      </Modal>
    </>
  )
}