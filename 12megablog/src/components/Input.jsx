import React ,{useId} from 'react'

const Input = React.forwadRef(function Input({
     label , 
     type ="text" , 
     className ="" , 
     ...props 
}, ref){
    return(
         <div className='w-full '>
             {label && <label 
                 className='inline-block mb-1 pl-1 '
                 htmlFor={id}>
                 {label} 
              </label>
             }
             <Input
               type={type}
               className={` py-2 px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 
                duration-200 border border-gray-200 w-full ${className}`} 
                ref= {ref} 
              />
         </div>
    )
})
export default Input