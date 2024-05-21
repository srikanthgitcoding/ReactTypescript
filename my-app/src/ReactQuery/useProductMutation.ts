import axios from "axios";
import { UseMutationResult, useMutation } from "react-query";

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000'
})

interface Iprops{
    id: number,
    title: string,
    author: string
  }
const getMethod =async <T>(url:string):Promise<T>=>{
    return await axiosClient.get(url).then(({data})=>data)
}

type params = Parameters<typeof axios.post>
console.log("params")
const PostMethod =async <T>(...params:params):Promise<T>=>{
return  axios.post(...params).then(({data})=>data)
}

const data:Iprops ={
    id:100,
    title:"test",
    author:"test"
}

export const useMutaionResp =():UseMutationResult<Iprops,Error,Iprops>=>{
    console.log("useMutaionResp")
    return useMutation<Iprops,Error,Iprops>({
        mutationFn:async()=> PostMethod("/data",data),
        onSuccess:(data)=>{
            console.log("success")
        }
    })
    //   useMutation<Iprops,Error,Iprops>(async (data:Iprops)=>PostMethod("data",data))
}
