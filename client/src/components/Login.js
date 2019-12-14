import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const [form, setForm] = useState({
      username:'',
      password: ''
    })
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        
      }}>
        <input 
          name='username'
          placeholder='User Name'
          value={form.username}
          onChange={(e) => {
            setForm({...form, [e.target.name]: e.target.value})
          }}
        />
        <input 
          name='password'
          type='password'
          placeholder='Password'
          value={form.password}
          onChange={(e) => {
            setForm({...form, [e.target.name]: e.target.value})
          }}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
