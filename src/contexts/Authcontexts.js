import React,{createContext, useState,useEffect,useContext} from 'react'
import {auth} from '../firebase'

const AuthContext=createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
     
    function logout(){
        return auth.signOut()
    }
    function login(email,password) {
        return auth.signInWithEmailAndPassword(email,password)
    }
    const [currentUser,setCurrentUser] =useState()
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])


    const value={
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
