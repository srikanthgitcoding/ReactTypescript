import { unknown } from "zod"

function OptionalGenrics<T extends Record<string,unknown>>(obj:T){

}

OptionalGenrics<{name:string}>({name:""})
type A<T> = (x:T)=>T  // generic type for a function

type B =<T>(x:T)=>T  // type for a generic function


 