type way1Araay = string[]
type way2Araay1 = Array<string>


let object = {
    name:"sss",
    lastNae:"sss"
}

type keysss = keyof typeof object

interface obj1<K>{
    [key:string]:K
}

const obj1Values:obj1<number> = {name:1}

export {}