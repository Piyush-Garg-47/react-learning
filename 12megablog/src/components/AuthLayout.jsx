import React , {useState , useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default Protected({children , authentication = true }) {
    const navigate = useNavigate() 
    const [loader , setLoader] = useState(true) 
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() =>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false) 
    } ,[])
  return loader ? <p>Loading....</p> : <>{children} </>
}