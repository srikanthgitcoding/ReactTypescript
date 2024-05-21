
//multiple generics


const getValue=<TObj, Tkey extends keyof TObj>(obj:TObj,key: Tkey)=>{
    return obj[key]
}

const value = getValue({a:"a",b:1,c:true},"c")

export {}