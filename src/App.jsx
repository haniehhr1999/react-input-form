import React from 'react'
import { useState } from 'react'
import './style.css'
import generatepassword from './generatepass'

export default function App(){
    const [hello , setHello] = useState(false)
    const [password , setPassword] = useState('')
    // console.log(generatepassword());
    
    return(
     <section>
        <input 
            type={hello === false ? 'text': 'password'} 
            placeholder='Enter your password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <br />
        <button onClick={() => setPassword(()=>generatepassword())} className='bttn'>
            use random password
        </button>
        <button onClick={() => setHello(!hello)}>
            {hello === false ? 'hide' : 'show'}
        </button>
        <button >
            copy random password to clipboard
        </button>
     </section>
    )
}