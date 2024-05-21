function fn<T extends number | string>(name:T):Promise<T>{
    return new Promise((resolve,reject)=>{
        return "srikanth"
    })

}


type T = Awaited<ReturnType<typeof fn<string>>>

// 2 things to remeber fn function returns a promise that promise return a string 
// type T = ReturnType<typeof fn<string>> - here type T is  Promise<string>
// type T = Awaited<ReturnType<typeof fn<string>>> - here type T is string

import axios from "axios"

type GetPromiseReturnType<T extends (...args:any)=> any> = Awaited<ReturnType<T>>
// ReturnType utility will only accespts function not string or number or object
// Returntype<() => string>
// T extnds contstriant which is a function - (...args:any)=> any
//here what we r telling is t extends a functions which accepts n number of params and retrun any

type Result = GetPromiseReturnType<()=>Promise<{fName:string}>>
type Result1 = GetPromiseReturnType<()=>Promise<string>>


// type ReturnType<T extends (...args:any) => any>() =>any

export {}


const getData = async (name: string, age: number) => {
    return { age, name };
}

// Type is: Promise<{ age, name }> since it is a asyncronous it returns promise if u remove async it return normal objects
// however this can be done(if u want js object not promise object) using awaited it just gives the object 
type NewType = ReturnType<typeof getData>;
type NewAwaitedType = Awaited<ReturnType<typeof getData>>

// To unwrap the promise from the return type, you need to use the Awaited type. This type works similarly to the await keyword.

// Here is an example:

const getData1 = async (name: string, age: number):Promise<{age: any,name: any}> => {
    return { age, name };
}

// Type is: { age, name }
type NewType1 = Awaited<ReturnType<typeof getData>>;
// here typeof getData is function
// return type of getdata is Promise<{age,name}>
// since it is apromise add await so it return direct object Awaited<ReturType<typeof getData>>


axios.post("").then(data=>data)
