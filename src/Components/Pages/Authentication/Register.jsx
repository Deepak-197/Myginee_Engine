import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRegister } from '../../Redux/AuthData/action';

export const Register = () => {
    const dispatch = useDispatch()
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        
        const RegisterData = ({first_name, last_name, username, email, password})

        if(first_name && last_name && username && email && password){

            dispatch(getRegister(RegisterData))
            .then((res) => {
                 console.log(Register)
            })
        }
        alert("Register Successfully")
    }


  return (
    <div>
       <form onSubmit={handleRegister}>
         <input type={"text"} value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="First Name" />
         <input type={"text"} value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Last Name" />
         <input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
         <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
         <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" />
         <button type='submit'>Register</button>
       </form>
    </div>
  )
}
