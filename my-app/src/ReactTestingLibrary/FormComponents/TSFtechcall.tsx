import React, { useState } from 'react'
type I = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }


const TSFtechcall:React.FC=()=> {

    const getCall= (url:string):Promise<any> => {
        console.log("getcall")
        return  fetch(url).then((res)=>res.json())
    }
    const d =  getCall("https://jsonplaceholder.typicode.com/todos/1").then(res=>console.log(res))
    

  return (
    <div>TSFtechcall
        <button >ftech call</button>
    </div>
  )
}

export default TSFtechcall