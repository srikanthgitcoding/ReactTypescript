import axios from 'axios'
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

const callBackFN=({queryKey}:any)=>{
    console.log("queryKey",queryKey)
    const id= queryKey[0]
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
const ProductDetails = () => {
    const {id} =useParams()
    const {data,isLoading,isFetching}= useQuery({queryKey:id,queryFn:callBackFN})
    
    if(isLoading){
        return <div>is loading.....................</div>
    }
    if(isFetching){
        return <div>is isFetching&&&&&&&&&&&&&&&&&&&&&&&.</div>
    }
    console.log("data",data)
    const {title} =  data?.data as any
  return (
    <div>
      ProductDetails - {title}
      
    </div>
  )
}

export default ProductDetails


export const A =(Nam: {name:string})=>{
  return <></>
  }
  export const B=()=>{
    return <A name="" />   
  }
