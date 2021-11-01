import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://stark-tundra-60468.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm('Dear Customer , do you want to delete this order?')
        if (confirmation) {
            const url = `https://stark-tundra-60468.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully Deleted Your Booking');
                        const rest = allOrders.filter(order => order._id !== id);
                        setAllOrders(rest);
                    }

                    console.log(data)
                })
            console.log(id)
        }
    }

    return (
        <div className='container'>
          

            <h2>Total order : {allOrders.length}</h2>

            <Table striped bordered hover responsive>
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
                    allOrders.map((order, index) =>
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

export default ManageOrders;