import axios from 'axios'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'


const useMutationCallBackFn =(list:any)=>{
    console.log("list",list)
    
    return axios.post("http://localhost:4444/posts",list)
}

export const useFNMutationExample = () => {
    const qc = useQueryClient()
   return useMutation(useMutationCallBackFn,{
    onSuccess:()=>{
        qc.invalidateQueries("get api call key name")
    }
   })
}

