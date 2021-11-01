import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://stark-tundra-60468.herokuapp.com/myOrders/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email]);

    // const handleApprove = (id) => {
    //     const url = `https://stark-tundra-60468.herokuapp.com/myOrders/${user.email}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(orders)
    //     })
    //         .then()

    //         console.log('hitting')
    // }


    return (
        <div className='container responsive'>
            <h2>Your total order : {orders.length}</h2>

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
                    orders.map((order, index) =>
                        <tbody key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.address}</td>
                                <td>{order?.status}</td>
                                {/* <button onClick={() => handleApprove(order._id)} className='btn btn-danger '>Approve</button> */}
                            </tr>

                        </tbody>)}

            </Table>


        </div>
    );
};

export default MyOrders;