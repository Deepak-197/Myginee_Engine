import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getLogin } from '../../Redux/AuthData/action';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    console.log("Location in Login page", location)

    const comingFrom = location.state?.data || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        if(username, password) {
            dispatch(getLogin({username, password}))
            .then((r) => {
                // Do something
                // Navigate the user back to the home page
                navigate(comingFrom, {replace: true})
            })
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <form onClick={handleLogin}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="Username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}
