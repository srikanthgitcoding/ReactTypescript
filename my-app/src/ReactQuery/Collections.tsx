import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import {useFNMutationExample} from './useFNMutationExample'



const callBackFN=()=>{
    return axios.get("http://localhost:4444/posts")
}

const Collections:React.FC = () => {
   const [post,setPost] = useState({title:"",author:""})
   const {data,isLoading,refetch,isFetching} =useQuery({queryKey:"getdata",queryFn:callBackFN})
   const {mutate, isLoading:lo,isError,error} = useFNMutationExample()

   const submitFomr= useCallback((e:React.FormEvent)=>{
    console.log("post",post)
    e.preventDefault()
    mutate({...post})
    refetch()
    },[post]) 
 
    if(isLoading){
        return <div>loading ...............</div>
    }

    if(isFetching){
        return <div>isFetching @@@@@@@@@@@@@@@@@@@@@</div>
    }
 


  return (
    <div>
        <form onSubmit={submitFomr}>
      title: <input type='text' value={post.title} onChange={(e)=>setPost((prev)=>({...prev,title:e.target.value}))}></input>
      Post: <input type='text' value={post.author} onChange={(e)=>setPost((prev)=>({...prev,author:e.target.value}))}></input>
    <button>Submit</button>
    </form>

    {data?.data && data?.data.map((item:any)=><div>{item.title} and {item.author}</div>)}
    </div>
  )
}

export default Collections
