import React, { useState, useEffect } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { getPosts } from '../Cruds/getUsers';

export default function PostsViews({ data }) {
    const id = Number(data.id);
    const [user, setuser] = useState([]); // DATOS DEL GET A POSTS    
    // variables del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {    
        getPosts(id).then(posts => setuser(posts))
    }, [])
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Posts
            </Button>
            <Modal show={show} onHide={handleClose}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(
                                    (dat) => (
                                        <tr key={dat.id}>
                                            <td>{dat.title}</td>
                                            <td>{dat.body}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}