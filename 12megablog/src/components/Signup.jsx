import React ,{useState} from 'react'
import authService from '../appwrite/auth' 
import {Link , useNavigate} from 'react-router-dom'
import {Button , Input , Logo} from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux' 
import { login } from '../authSlice' 


function Signup() {
        const navigate = useNavigate() 
        const dispatch = useDispatch()
        const {register , handleSubmit} = useForm()
        const  [error , setError] = useState("")

        const create = async(data) =>{
            setError("") 
            try {
               const userData =  await authService.createAccount(data) 
               if(userData){
                const userData =  await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData));
                    navigate("/")
                }

               }
            } catch (error) {
                setError(error.massage)
            }
        }
  return (
    <div className='flex item-center justify-center w-full '>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                   <span className='inline-block w-full max-w[100px]'>
                   <Logo width='100%'/> 
                   </span>
             </div>
              <h2 className='text-center text-2xl font-bold leading-tight  '>Sign in to your account </h2>
                   <p className='mt-2 text-center text-base text-black/60'>
                         Don&apos;t have any acount ? &nbsp;
                     <Link to="/signip" className='font-medium text-primery transition-all duration-200 hover:underline'>Sign Up</Link>
                   </p>
                   {error && <p className='text-red-500 text-center '>{error}</p>}

                    <form onSubmit={handleSubmit(login)} className='mt-8'> 
                               <div className='space-y-5 '>
                                   <input 
                                    label = "Full name  :"
                                    placeholder='Enter your Full name '
                                    type="email"
                                    {...register("email" , {
                                       required : true , 
                                       validate :{
                                           matchPatern :(value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)|| " Enter addres must be a valid address " , 
                                       }
                                    })}
                                   />
                                   <input 
                                    label = "password :"
                                    placeholder ="Enter your password"
                                    type = "password" 
                                    {...register("password" , {
                                       required :true  , 
                                    })} 
                                   />
                                   <Button type ="submit" className ='w-full '>Create Account </Button>
                               </div>
                              </form>
        </div>
    </div>
  )
}

export default Signup