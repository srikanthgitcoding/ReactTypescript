import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { callbackify } from 'util'

import axios from 'axios'
import MemoTest from './MemoTest'

const callBackFN=()=>{
  
    return axios.get("https://jsonplaceholder.typicode.com/todos")
}

const Home:React.FC = () => {
  const [count,setCount] = useState(0)
    const {data,refetch} =useQuery({queryKey:"kwy111yyy",queryFn:callBackFN,enabled:false})
  console.log("data", data,refetch)
  
    return (
    <div>
      Home on click
      {count}
      <button onClick={()=>setCount(count+1)}>count</button>
      <MemoTest></MemoTest>

      <button onClick={()=>refetch}>click em </button>
      {data && data?.data.map((item:any)=><div>{item.title}</div>)}
    </div>
  )
}

export default Home
