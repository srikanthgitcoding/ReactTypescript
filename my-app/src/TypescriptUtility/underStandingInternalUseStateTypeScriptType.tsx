// import React,{useMemo, useState} from 'react'

// //usestate internal implementation 

// // type SetStateAction<S> = S | ((prevState: S) => S);
// // type Dispatch<A> = (value: A) => void;
// // function useMYState<S>(initialState: S | (() => S)): [initialState, Dispatch<SetStateAction<S>>];

// // const [count,setCount]=useMYState<{name:string}[]>([])
// // console.log(count)

// // type setStateCheck<T> = T | ((prevState:T)=>T)

// // DIspa<S | (prev:S) => S>
// // type d<U> = setStateCheck<U>

// // const dTest :d<number> = ()=>0
// // dTest((prev)=>prev+1)

// function someFunction<T>(initailState:T | (()=> T)):[T, React.Dispatch<React.SetStateAction<T>>]{
// return [initailState as T,fn]
// }

// type setStateNew<S> = S | ((prevState:S)=>S)

// function useStateNew<S>(initalSate:S | (()=>S)){
// return [S,]
// }

// const underStandingInternalUseStateTypeScriptType = () => {
//     useState
//     const [val,setValue] =useState<number>(0)
//     const [val1,setValue1] =useState<number>(()=>0)
    

//     setValue(0)
//     setValue((prev)=>prev+1)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default underStandingInternalUseStateTypeScriptType




export default {}