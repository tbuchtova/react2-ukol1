import React, { useState } from 'react';
import '../style.css'


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
        <div className="container">
                <h1>REGISTRATION</h1>
                <img></img>
                <form onSubmit={ handleSubmit }>
                    <input name="email" type="email" placeholder="Email Address" value={user.email} onChange ={ handleChangeEmail } ></input>
                    <input name="username" type="text" placeholder="User name" value={user.username} onChange = { handleChange } ></input>
                    <input name="password" type="password" placeholder="Password" value={user.password} onChange = { handleChange }></input>
                    <input name="passwordConfirm" type="password" placeholder="Confirm Password" value={user.passwordConfirm} onChange = { handleChange }></input>
                    <button type="submit" onClick={ () => {console.log(user)}}>REGISTER</button>
                </form>
            </div>
        </>
    )
}

export default Registration;