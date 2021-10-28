import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import initializeAuthentication from '../pages/Login/firebase/firbase.init'
import { useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser]=useState();

    

    const auth=getAuth();
    
    const signinWithGoole=()=>{
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user);
        })

    }


    return (
        <div>

        </div>
    );
};


export default useFirebase;