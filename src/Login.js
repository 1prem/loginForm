import React, { useState } from 'react'

function Login(props) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const handlesubmit = (e) => {
      e.preventDefault();
   }

   function updatepass(e) {
      setPassword(e.target.value);
   }
   return (
      <>
         <h1>Login</h1>
         <form onSubmit={handlesubmit}>
            <label>Email</label>
            <input type="text" placeholder="yourmail@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
            <br /><br />
            <label>Password</label>
            <input type="password" placeholder="Enter password" onChange={updatepass} value={password} id="password" /><br /><br />

            <button type="Submit">LogIn</button><br /><br />
         </form>
         <button onClick={() => props.Switch('Register')}>Don't have an Account? Register Here</button>
      </>
   )
}

export default Login;