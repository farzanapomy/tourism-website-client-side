import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://stark-tundra-60468.herokuapp.com/bookticket')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const confirmation=window.confirm('Dear Customer , do you want to delete this order?')
        if (confirmation) {
            const url = `http://localhost:5000/bookticket/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted');
                    const rest = orders.filter(order => order._id !== id);
                    setOrders(rest);
                }

                console.log(data)
            })
        console.log(id)
        }
    }


    return (
        <div className='container'>
            <h2>Your total order : bookticket{orders.length}</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Approve</th>
                        <th>Delete Order</th>
                    </tr>
                </thead>
                {
                    orders.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.address}</td>
                                <td>{order?.status}</td>
                                <button onClick={() => handleDelete(order._id)} className='btn btn-danger '>Cancel</button>
                            </tr>

                        </tbody>)}

            </Table>


        </div>
    );
};

export default MyOrders;