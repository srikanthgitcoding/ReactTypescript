import React, { useState,Dispatch,SetStateAction, useMemo, useCallback } from 'react'

const useHook = () => {
    const [arr,setArr] =useState<string[]>([])

  const setFn =useCallback((val:string)=>{
    setArr((prev)=>([...prev,val]))
  },[setArr])
  
return useMemo(()=>({arr,setFn}),[arr])

}

export default useHook
