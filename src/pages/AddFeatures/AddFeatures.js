import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddFeatures.css'


const AddFeatures = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        // console.log(data);

        axios.post('https://stark-tundra-60468.herokuapp.com/features', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res);
            })
    }



    return (
        <div className='add-feature'>
            <h2>Please add your service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input {...register("img")} placeholder='Enter image url' />
                <input type="submit" className='submit-button' />
            </form>
        </div>
    );
};

export default AddFeatures;