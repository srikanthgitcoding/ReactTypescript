import React from 'react'
import {z} from 'zod'
 import FirstName from './FirstName'
import EmailForm from './EmailForm'
import { useForm } from 'react-hook-form'

const Index = () => {
   
const {register,handleSubmit,formState:{errors,isSubmitting},reset,getValues} = useForm()
const {name,ref,onChange,onBlur} = register("email") //or 
    const submitForm=()=>{

    }
  return (
    <div>
    <form onSubmit={handleSubmit(submitForm)}>
        <input type="email" placeholder='email' {...register("email",{required:"email "})}></input>
        <input type="password" placeholder='password'></input>
        <input type="password" placeholder='confirmPassword'></input>
      </form>
    </div>
  )
}

export default Index
