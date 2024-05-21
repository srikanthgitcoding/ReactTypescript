import React, { useCallback, useState } from 'react'
import EMailInput from './EMailInput'
import PasswordInput from './PasswordInput'
import useHooks from './useHooks'


const FormUsecallBackExample:React.FC = () => {
    const {show,setSHowFn} =useHooks() 
    const [email,setEmail] =useState<string>("")
    const [password,setPassword] =useState<string>("")

    const setemailfn =useCallback((value:string)=>{
        setEmail(value)
    },[setEmail])

    const setpasswordfn =useCallback((value:string)=>{
        setPassword(value)
    },[setPassword])
    console.log("callbackfn", setpasswordfn)
    
  return (
    <div>
      EMail :<EMailInput value={email} onChange={setemailfn}></EMailInput><br/>
      Password :<PasswordInput value={password} onChange={setpasswordfn}></PasswordInput>
      {show && <div> clikc on button to hide me</div>}
      <button onClick={setSHowFn}>button</button>
    </div>
  )
}

export default FormUsecallBackExample
