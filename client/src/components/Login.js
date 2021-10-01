import { useState } from "react";
import React from 'react';
import { useHistory } from "react-router-dom"

function LoginPage({setLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState('')
    const [errors, setErrors] = useState ('')
    const history = useHistory()

    function onSubmit(e){
        e.preventDefault()
        const login = {
            email: email,
            password
        }
        // let API_PATH 
        // loggedIn?API_PATH = 'session' : API_PATH = "users"
        fetch(`/login`, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(login)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                setLogin(true)
                console.log(setLogin)
                history.push("/")
            }
        })
    }

    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">
            <form onSubmit={onSubmit}>
            <label>
                Email:  <br></br>
                <input type="text" id="login" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Password:  <br></br>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {/* <input type="submit" value="Sign up to acess Website!"/> */}
            <input type="submit" value="Login" class="fadeIn fourth"/>
            </form>
            {errors?errors.map(e => <p>{e}</p>):null}
            </div>
        </div>
    )
}

export default LoginPage;