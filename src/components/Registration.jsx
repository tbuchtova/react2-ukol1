import React, { useState } from 'react';
import '../style.css'
import userIcon from '../img/user.png'

const Registration = () => {
    const [user, setUser] = useState({
        username: '', 
        email: '', 
        password: '', 
        passwordConfirm: ''
        });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeEmail = (e) => {
            if(user.username === '' && e.target.value.includes('@'))  
            {
                let filledUsername = e.target.value.slice(0, [e.target.value.indexOf('@')]);
                setUser({...user, [e.target.name]: e.target.value, username: filledUsername})
            }
            else {
                setUser({...user, [e.target.name]: e.target.value})
            }
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <h1>REGISTRATION</h1>
        <div className="container">
                <img className="userIcon" src={userIcon}></img>
                <form  onSubmit={ handleSubmit }>
                    <input className="form_input" name="email" type="email" placeholder="Email Address" value={user.email} onChange ={ handleChangeEmail } ></input>
                    <input className="form_input" name="username" type="text" placeholder="User name" value={user.username} onChange = { handleChange } ></input>
                    <input className="form_input" name="password" type="password" placeholder="Password" value={user.password} onChange = { handleChange }></input>
                    <input className="form_input" name="passwordConfirm" type="password" placeholder="Confirm Password" value={user.passwordConfirm} onChange = { handleChange }></input>
                    <button type="submit" onClick={ () => {console.log(user)}}>REGISTER</button>
                </form>
            </div>
        </>
    )
}

export default Registration;