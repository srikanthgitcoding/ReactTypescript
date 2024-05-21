import React, { useCallback, useEffect, useMemo, useState } from 'react'

const useHooks = () => {
    console.log("use hook")
   const [show,setShow] = useState(false)

   const setSHowFn =useCallback(()=>{
    setShow(!show)
   },[setShow])
   useEffect(()=>{
console.log("setSHowFn useffect")
   },[show,setSHowFn])

  return useMemo(()=> {
    console.log("return");
    return {show, setSHowFn}
},[show])
  
}

export default useHooks
