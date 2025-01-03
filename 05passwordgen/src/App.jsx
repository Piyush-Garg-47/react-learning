import { useState , useCallback ,useEffect , useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] =useState(false) ; 
  const [charallowed , setcharallowed] =useState(false) ;
  const [password , setpassword] = useState("")

  //useRef hook 

  const paswordRef = useRef(null)

  const generatepassword =useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="013456789"
    if(charallowed) str += "!@#$%^&*(){}[]?`~"

   for (let index = 1; index <= length; index++) {
      let char = Math.floor( Math.random() * str.length +1)
       pass += str.charAt(char) 
      
   }
    setpassword(pass)

  } , [length , numberAllowed ,charallowed ,setpassword])

  const copypasswordtoclipboard =useCallback(() =>{
    paswordRef.current?.select();
    paswordRef.current?.setSelectionRange(0, length);
   window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() =>{
    generatepassword()
  } , [length , charallowed ,setcharallowed ,generatepassword])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-white text-center my-3'>Password generator</h1>
         <div className="flex shadow-rounded-lg overflow-hidden mb-4">
             <input 
             type="text"
             value={password}
             className='outline-none w-full py-1 px-3 rounded-sm '
             placeholder='password'
                readOnly 
                ref={paswordRef}
             />
            <button
            onClick={copypasswordtoclipboard}
             className='outline-none
             bg-blue-700
            text-white
             px-3 py-0.5
             shrink-0'
            >Copy</button>
         </div>
         <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 '>
            <input type="range" 
            min={8}
            max={40}
            value={length}
            className='cursor-pointer'
             onChange={(e) =>{setlength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div flex items-center gap-x-1>
              <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() =>{
                setnumberAllowed((prev)  => !prev) ;
              }}
              />
              <label> Number</label>
          </div>
          <div flex items-center gap-x-1>
              <input 
              type="checkbox" 
              defaultChecked={charallowed}
              id='characterInput'
              onChange={() =>{
                setcharallowed((prev)  => !prev) ;
              }}
              />
              <label> Characters</label>
          </div>
         </div>
      </div>
    </> 
  )
}

export default App
