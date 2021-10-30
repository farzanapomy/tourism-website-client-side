import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAuthentication from '../pages/Login/firebase/firbase.init'

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const singInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false))

}

const logOut = () => {
    setIsLoading(true)
    signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading(false))
}


// observe user state change 
useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        }
        else {
            setUser({})
        }
        setIsLoading(false)
    });
    return () => unSubscribed;
}, [])




return {
    user,
    isLoading,
    singInWithGoogle,
    logOut

}
}

export default useFirebase;