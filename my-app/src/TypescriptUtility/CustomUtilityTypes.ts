
//partialtype
type partialtype<T> = {[k in keyof T]?: T[k] | undefined}

interface Iprops{
    name:string,
    fName:string
}
type newType= partialtype<Iprops>

//retrun type
type ReturnTypeCustoms<T> = T extends (...arg:any[]) => infer R ?  R : null

type AllFunctionss = (...args: any[]) => any

const ALlFunctions12:AllFunctionss=(key,value)=>""

//record
type MyRecord<T extends string | number | symbol, K> = {
    [key in T]: K
}

const recordType:MyRecord<string,unknown> = {"name":"s"}
export {}