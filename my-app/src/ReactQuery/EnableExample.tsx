import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const EnableExample = () => {
    const [name,setName] =useState("")
    const fetchGetCall=async ()=>{
        return await axios.get("https://jsonplaceholder.typicode.com/todos/")
    }
    const {data,refetch} = useQuery({queryKey:["new"],queryFn:fetchGetCall,enabled:false})
  return (
    <div>
        name -{name}
      <button onClick={()=>refetch()}>button</button>
    </div>
  )
}

export default EnableExample



