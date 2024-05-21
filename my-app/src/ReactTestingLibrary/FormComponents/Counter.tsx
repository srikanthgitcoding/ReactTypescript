import React, { useEffect, useState } from 'react'
import TSFtechcall from './TSFtechcall'
import axios, { AxiosResponse } from 'axios'

interface Iprops{
    userId: number,
    id: number,
    title: string,
  
}
const A =({name,children}:{name:string,children:React.ReactNode}):JSX.Element=>{
  return <>Name : {name} - {children}</>
  }
  <A name="srikant mmmh" >I am children man</A>

  
const Counter = () => {
  const getRequest= async(url:string):Promise<AxiosResponse<any>>=>{    
  return await axios.get(url)
   
  }

  useEffect(()=>{
     (async ()=>{
      const res = await getRequest("https://jsonplaceholder.typicode.com/todos/")
      console.log("res",res)
    })()
 
  },[])

    const [count,setCount] =useState<number>(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <TSFtechcall></TSFtechcall>
      <A name="srikant mmmh" >I am children man</A>    
    </div>
  )
}

export default Counter
