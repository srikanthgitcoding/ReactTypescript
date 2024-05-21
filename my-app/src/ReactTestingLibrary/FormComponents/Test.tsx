import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { UseFormReturn,UseFormSetValue } from 'react-hook-form'
import { QueryClient, useQuery } from 'react-query'
import type {UseQueryResult} from 'react-query'

const A =(setValue:UseFormSetValue<{name:string}>)=>{
  setValue("name","srikanthmmmmm")
  return <div></div>
}
const ref= new QueryClient
const Test = () => {


  const {setValue} = useForm({defaultValues:{name:"sring"}})
  
    // const useQuerRet =():UseQueryResult<unknown, unknown>=>{
    //     return  useQuery({queryKey:"keyName",queryFn:()=>{}},ref.invalidateQueries({queryKey:"keyName"}=>))
    // }
    
    useState<number>(0)
  return (
    <div>
    </div>
  )
}

export default Test
