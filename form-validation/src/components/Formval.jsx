import React from 'react'
import { useState } from 'react'
import './form.css'

const Formval = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const[age,setAge] = useState('')
  const [gender,setGender] = useState('')
  const [error,setError] = useState('')

  const validateForm = ()=>{
    const error = {}

    if(!name){
      error.name = 'Name is required' 
    }
    if(!email){
      error.email = 'Email is required' 
    }
    else if(!/\S+@\S+\.\S+/.test(email)){ 
      error.email = 'Email is invalid'
    }
    if(!password){
      error.password = 'Password is required' 
    }
    else if(password.length<6){
      error.password = 'Password must be min 6 characters'
    }
    if(!confirmPassword){
      error.confirmPassword = 'Confirm Password is required' 
    }
    else if(password!==confirmPassword){
      error.confirmPassword='Passwords do not match'
    }
    if(!age){
      error.age = 'Age is required'
    }
    else if(isNan(age)||age<18){
      error.age='Age is invalid'
    }
    if(!gender){
      error.gender='Gender is required'
    }
    console.log(error)
    return error
  }


  const handleSubmit = (e)=>{
    e.preventDefault()

    const validationErrors = validateForm()
    if(Object.keys(validationErrors).length>0){
      setError(validationErrors)
    }
    else{
      console.log('Form submitted')
    }
    console.log('form submitted');

  }

  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit} className="form-container" >
        <div>
          <label >Name:</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          {error.name}
        </div>
        <div>
          <label >Email:</label>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          {error.email}
        </div>
        <div>
          <label >Password:</label>
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          {error.password}
        </div>
        <div>
          <label >Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          {error.confirmPassword}
        </div>
        <div>
          <label >Age:</label>
          <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
          {error.age}
        </div>
        <div>
          <label >Gender:</label>
          <select value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value="">Select Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
            {error.gender}
          </select>
        </div>
        <button className='submit'>Submit</button>
      </form>
      </div>
  )
}

export default Formval