import React, { useState, useEffect } from 'react';
import Views from '../Views/Views';
import { Table } from 'reactstrap';
import getUsers from '../Cruds/getUsers'; // FUNCION GET USUAIROS

export default function Users() {
    const [data, setData] = useState([]);
    useEffect(function(){
        getUsers().then(datas => setData(datas))
    },[])    
    return (
        <div className="principal">                       
            <Table striped>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (data) => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td><Views data={data}></Views></td>
                                </tr>
                            )
                        )
                    }                    
                </tbody>
            </Table>
        </div>
    )
}