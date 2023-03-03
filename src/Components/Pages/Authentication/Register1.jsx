import { InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import {Input, InputGroup, Stack, InputRightElement } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getRegister } from '../../Redux/AuthData/action';
import { Button } from 'react-bootstrap';
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';


export const Register = () => {
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  

    const handleRegister = (e) => {
        e.preventDefault();
        
        const RegisterData = ({first_name, last_name, username, email, phone_number, password})

        if(first_name && last_name && username && email && password){

            dispatch(getRegister({first_name, last_name, username, email, phone_number, password}))
            .then((res) => {
                 console.log(RegisterData)
            })
        }
        alert("Register Successfully")
        navigate("/login")
    }


  return (
    <div style={{width:"20%", margin:"auto", display:"flex", flexDirection:"column"}}>
    <h1>Register</h1>
       <form onSubmit={handleRegister}>
         <input type={"text"} value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="First Name" />
         <input type={"text"} value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="Last Name" />
         <input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
         <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
         <input type={"text"} value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone_number" />
         <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
         <button type='submit'>Register</button>
       </form>

       
    </div>
  )
}
