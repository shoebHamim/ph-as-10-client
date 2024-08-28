import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import firebaseConfig from '../../firebase/firebase.config'
export const authContext = createContext()

const AuthProvider = ({ children }) => {

  const auth = getAuth(firebaseConfig)
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading()
    })
    return () => unsubscribe()
  }, [])

  // register
  const register=(email,password)=>{
    setLoading(true)
    return (createUserWithEmailAndPassword(auth,email,password))
  }
  const updateUserInfo=(name,photoURL)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photoURL
    })
  }

  // login area
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const githubProvider = new GithubAuthProvider()
  const githubLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

// logout
  const logout = () => {
    signOut(auth)
      .then(
        console.log('sign out successful ')
      )
      .catch(error => { console.log(error); })
  }








  const authInfo = { user, googleLogin,login,loading, githubLogin,logout,register,updateUserInfo }



  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;