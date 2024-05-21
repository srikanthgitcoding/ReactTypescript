import React from 'react'
import {useMutaionResp} from './useProductMutation'
import ReactQueryGetIWthZod from '../ReactHookFormZod/ReactQueryGetIWthZod'
import axios, { AxiosResponse } from 'axios'

interface Iprops{
  title:string
}
const getMethod =async ()=>{
const data = await axios.get<AxiosResponse<Promise<Iprops>>>("http://localhost:4444/posts")
console.log("sss", data.data)

}
const Products:React.FC = () => {
  const {data, mutate:callMutationFn} =useMutaionResp()
  console.log("callMutationFn",callMutationFn)
  console.log("axiosresponse", getMethod())
  return (
    <div>
      products\
      <ReactQueryGetIWthZod></ReactQueryGetIWthZod>
      <button onClick={()=>callMutationFn}>get product details</button>
    </div>
  )
}

export default Products



