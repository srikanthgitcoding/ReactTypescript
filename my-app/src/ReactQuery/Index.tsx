import React, { useEffect } from 'react'
import { useQueries, useQuery } from 'react-query'
import axios from 'axios'




const Index = () => {

    const callBackFn=()=>{
        return axios.get("https://jsonplaceholder.typicode.com/todos/")
        }


  const {data, isLoading,isFetching} =  useQuery("key",callBackFn)
        console.log("data",data)
  if(isLoading){
    return <div>is Loading.......</div>
  }

  if(isFetching){
    return <div>is fetching.....</div>
  }
  return (
    <div>
        iii
   Index : {data?.data?.map((item:any)=>{
    return <div>{item?.title}</div>
   })}
    </div>
  )
}

export default Index
