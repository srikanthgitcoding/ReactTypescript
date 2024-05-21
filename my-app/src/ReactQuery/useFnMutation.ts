import axios from 'axios'
import React from 'react'
import { useMutation } from 'react-query'

const callBackMutationFunction =(req:any)=>{
return axios.post("https://jsonplaceholder.typicode.com/posts",req)
}

export const postFn =()=>{
    // call use mutation hook passing in mutation fn
    // destructor mutation fn where u call postFn
    //{mutate} = postFN()
    //whateve r u pass to this mutate function mutate({}) will be passed to callBackMutationFunction
    return useMutation(callBackMutationFunction)
}
