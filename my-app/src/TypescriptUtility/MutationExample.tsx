// import { stringify } from 'querystring'
// import React, { useCallback, useMemo, useState } from 'react'
// import {  string } from 'zod'

// interface Iprops{
//     name:string,
//     arr: string[]
// }


// export type DeepReadonly<T> =
//   T extends Primitive ? T :
//   T extends Array<infer U> ? DeepReadonlyArray<U> :
//   DeepReadonlyObject<T>

// type Primitive = 
//   string | number | boolean | undefined | null

// interface DeepReadonlyArray<T> 
//   extends ReadonlyArray<DeepReadonly<T>> {}

// type DeepReadonlyObject<T> = {
//   readonly [P in keyof T]: DeepReadonly<T[P]>
// }

// const useTest =()=>{
//     const [names,setNames]=useState({name:""})
//     const setNamesFn =useCallback((val:string)=>{
//         setNames((prev)=>({...prev, name:val}))
//     },[setNames])
//     return useMemo(()=>[names,setNamesFn],[names,setNamesFn] as const)
// }

// export const MutationExampleTypescript = React.memo(() => {
//    const [names,setNamesFn]= useTest()
//     const [props,setProps] =useState<Iprops>({name:"",arr:[]})
//     // const [props,setProps]=useState<ReadonlyArray<Iprops>>({} as Iprops)
//     // console.log("reload")
//   return (
//     <div>
//         <button >addname</button>
//       <input value={props.name} onChange={(e)=>{props.name = e.target.value as string}}></input>
//     </div>
//   )
// })



import React, { useState } from 'react'
interface Iaddress {
  streetName:string
}
interface Iprops{
   fName:string
   address : Iaddress
}

const MutationExample = () => {
  const [name,setName] =useState <Iprops>({} as Iprops)
  return (
    <div>
      <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{name.address.streetName = e.target.value}} value={name.fName}></input>
      
    </div>
  )
}

export default MutationExample


