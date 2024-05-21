import axios from 'axios'
import React, { useState } from 'react'
import { JsxElement } from 'typescript'

interface Iprops{
    fname:string,
    lname:string,
    email:string
}





const InputAll= ():JSX.Element => {
    const [inputdata, setInputData] =useState<Iprops>({} as Iprops)
    const submitForm=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div>
      <form >
        Fname:<input type="text" name='fname' value={inputdata.fname}></input>
        Fname:<input type="text" name='lname' value={inputdata.lname}></input>
        Fname:<input type="text" name='email' value={inputdata.email}></input>

      </form>
    </div>
  )
}

export default InputAll
