import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { singInWithGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location?.state?.from || '/features/SingleFeature'

    console.log('from', location?.state?.from)

    const handleGoogleButton = (e) => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
                console.log(result)
            })
        // e.target.reset()
    }



    return (
        <div >
            <div className='border rounded mx-auto w-75 p-5 bg-dark'>
                <h2 className='text-light my-3'>PLease Login</h2>
                <button onClick={handleGoogleButton} className='btn btn-primary'>Google Sign In</button>
            </div>


        </div >
    );
};

export default Login;