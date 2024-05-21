import React from 'react'
import {ZodType, z} from "zod"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

interface Iprops{
    firstName:string
}

export function HookForm() {
    
    let createSchema= z.object({ 
        firstName:z.string().min(1).max(5)

    })


    const {register,handleSubmit,trigger} =useForm<Iprops>({resolver:zodResolver(createSchema)})
  //{...register} destructure the form
  //handleSubmit
  const submitForm =(data:Iprops)=>{
    console.log("submitForm called 123")
  }
    return (
    <div>

        <form onSubmit={handleSubmit(submitForm)}>Name:
            <input type="text" {...register("firstName")}></input>
            <button onClick={async()=>{
                const triggervar = await trigger()
                console.log("triggervar",triggervar)
            }}>submit</button>
        </form><br/>
    </div>

  )
}

