import React from 'react'
// import { useState } from 'react'
import './form.css'
import {appendErrors, useForm} from 'react-hook-form'

const FormValid = () => {
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [confirmPassword,setConfirmPassword] = useState('')
  // const[age,setAge] = useState('')
  // const [gender,setGender] = useState('')
  // const [error,setError] = useState('')

  const{register,handleSubmit,watch,formState:{errors}}=useForm()

  const password = watch('password');

  // const validateForm = ()=>{
  //   const error = {}

  //   if(!name){
  //     error.name = 'Name is required' 
  //   }
  //   if(!email){
  //     error.email = 'Email is required' 
  //   }
  //   else if(!/\S+@\S+\.\S+/.test(email)){ 
  //     error.email = 'Email is invalid'
  //   }
  //   if(!password){
  //     error.password = 'Password is required' 
  //   }
  //   else if(password.length<6){
  //     error.password = 'Password must be min 6 characters'
  //   }
  //   if(!confirmPassword){
  //     error.confirmPassword = 'Confirm Password is required' 
  //   }
  //   else if(password!==confirmPassword){
  //     error.confirmPassword='Passwords do not match'
  //   }
  //   if(!age){
  //     error.age = 'Age is required'
  //   }
  //   else if(isNan(age)||age<18){
  //     error.age='Age is invalid'
  //   }
  //   if(!gender){
  //     error.gender='Gender is required'
  //   }
  //   console.log(error)
  //   return error
  // }


  // const handleSubmit = (e)=>{
  //   e.preventDefault()

  //   const validationErrors = validateForm()
  //   if(Object.keys(validationErrors).length>0){
  //     setError(validationErrors)
  //   }
  //   else{
  //     console.log('Form submitted')
  //   }
  //   console.log('form submitted');

  // }

  const onSubmit = data=>console.log(data)

  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container" >
        <div>
          <label >Name:</label>
          <input type="text" name='name' {...register('name',{required:'Name is Required'})}/>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label >Email:</label>
          <input type="email" name='email' {...register('email',{required:'Email is required',pattern:!/\S+@\S+\.\S+/,message:'Email is invalid'})}/>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label >Password:</label>
          <input type="password" name='password' {...register('password',{required:'Password is required',minLength:{value:6,message:'Password must be 6 characters'}})}/>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label >Confirm Password:</label>
          <input type="password" name='confirmPassword' {...register('confirmPassword',{required:'confirmPassword is required',validate:value=>value===password||'Password do not match'})}/>
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <div>
          <label >Age:</label>
          <input type="text" name='age' {...register('age',{required:'Age is required'})}/>
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label >Gender:</label>
          <select  name='gender' {...register('gender',{required:'Gender is required'})}>
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
  )
}

export default FormValid