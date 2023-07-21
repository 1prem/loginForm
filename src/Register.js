import React, { useState } from 'react'

function Register(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[image, setImage] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(image);
  }

  function updatepass(e) {
    setPassword(e.target.value);
  }

  const handleUpload = (e)=>{
    setImage(e.target.files[0]);
  }
  return (
    <>
      <h1>Register</h1>
      {image}
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}  /><br /><br />

        <label>Email</label>
        <input type="email" placeholder="yourmail@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} /><br /><br />

        <label>Password</label>
        <input type="password" placeholder="Enter password" onChange={updatepass} value={password} /><br /><br />

        <label>Upload Image</label>
        <input type="file" placeholder="upload your image" onChange={handleUpload} value={image} /><br /><br />

      

        <button type="Submit">SignIn</button><br /><br />


      </form>
      <button onClick={() => props.Switch('Login')}>Already have an Account? LogIn Here</button>
    </>
  )
}

export default Register;