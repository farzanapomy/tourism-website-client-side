import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const SingleFeature = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [feature, setFeature] = useState([])
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();


    useEffect(() => {
        const url = `https://stark-tundra-60468.herokuapp.com/features/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFeature(data))
    }, []);

    const onSubmit = data => {
        data.status = "Pending";
        axios.post('https://stark-tundra-60468.herokuapp.com/bookFeature', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your order successfully added')
                    reset()
                }
                console.log(res)
            })

        console.log(data)
    };



    return (
        <div className='container'>
            <h2 className='my-5 '>Hello User !! Please place your Order</h2>
            <div className="row ">
                <div className="col-lg-6">
                    <img src={feature.img} className='img-fluid rounded' alt="" />
                    <h2>{feature?.name}</h2>
                    <h4>Price ৳ {feature.price}</h4>
                    <p>{feature.description}</p>
                </div>
                <div className="col-lg-6">
                    <h5 className=" text-center">
                        Please register
                    </h5>
                    <div className="login-box w-25 m-auto mt-5">
                        <div className="event-box border border d-flex justify-content-center align-items-center">
                            <div className="login-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name")}
                                        placeholder="Name"
                                        value={user.displayName}
                                        className="p-2 m-2"
                                    />
                                    <br />

                                    <input
                                        {...register("email", { required: true })}
                                        placeholder="Email"
                                        className="p-2 m-2"
                                        value={user.email}
                                    />
                                    <br />
                                    <input
                                        {...register("date", { required: true })}
                                        placeholder="date"
                                        defaultValue={new Date()}
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("text", { required: true })}
                                        placeholder="Description"
                                        className="p-2 m-2"
                                        value={feature.name}
                                    />
                                    <br />
                                    <input
                                        {...register("address", { required: true })}
                                        placeholder="Address"
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input type="submit" className="btn btn-info w-50" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default SingleFeature;