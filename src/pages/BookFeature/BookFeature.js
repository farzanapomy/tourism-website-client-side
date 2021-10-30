import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookFeature = () => {
    const { id } = useParams();
    const [bookFeature, setBookFeature] = useState([])


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => bookFeature(data));
    }
        ,[]);



    const findfeature = bookFeature?.filter((singlefeature) => (singlefeature.id) == (id));



    // const { user } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const onSubmit = data => console.log(data);



    return (
        <div>
            <h1 className="mt-5 text-center">Please Place Your Order</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <h2>{findfeature[0]?.id}</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="title"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookFeature;