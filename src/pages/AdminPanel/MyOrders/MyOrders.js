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

    // detele data 

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
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }

                    console.log(data)
                })
            console.log(id)
        }
    }





    // const handleApprove = (id) => {
    //     const url = `http://localhost:5000/myOrders/${id}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(orders)
    //     })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data);
    //         })

    //         // console.log('hitting')
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
                        <th>Delete Order</th>
                        <th>Approve</th>
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
                                <button onClick={() => handleDelete(order._id)} className='btn btn-danger '>Delete</button>
                                {/* <td><button onClick={() => handleApprove(order._id)} className='btn btn-danger '>Approve</button> </td> */}
                                
                            </tr>

                        </tbody>)}

            </Table>


        </div>
    );
};

export default MyOrders;