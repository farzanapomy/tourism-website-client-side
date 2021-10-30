import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {singInWithGoogle}=useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div >
           <button onClick={singInWithGoogle} className='btn btn-primary'>Google Sign In</button>
            <h2>this is login</h2>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                <input type="text" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <input type="email" {...register("email",)} />
                <br />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <br />
                <input type="submit" />

            </form>
              
        </div >
    );
};

export default Login;