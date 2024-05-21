import axios from 'axios'
import React, { useState } from 'react'

interface Iprops{
  name?:string,
  lastName?:string
}

axios.post
// type SetStateAction<S> = S | ((prevState: S) => S);

// type Dispatch<A> = (value: A) => void;


// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
type obj<T> = {
  name:T
}

const v:obj<string> = {
  name:'juan'}

type sestateA<T> = ((prev:T) => T)

function ffff <T>(T:T){
  return T
}

ffff<number>(1)

// type myOwnsetState<S> = S | ((prev:S) => S) 
// const value:myOwnsetState<((number)=>number)> = 1
// console.log("va",value)

function myOwnUseState <T>(initialValue:T | (()=>T)){
const [val,setValue] =useState(0)
setValue(0)
setValue((prev)=>prev+1)
}




const First = ({name,lastName}:Iprops) => {
  useState
  return (
    <div>
      Srikanth
    </div>
  )
}

export default First
