import { unknown } from "zod"

const products = [
    {        
        ProductCode :1,
        ProductName:"Rava",
    },
    {        
        ProductCode :2,
        ProductName:"sugar",
    },

]

type t111111 = typeof products
type t = Record<string,number>
type getArrayType<T>= T extends ()=> (infer u)[]? u :never

type ProductReturType = getArrayType<()=> typeof products>

type ProductReturType1 = ReturnType<()=>typeof products[0]> // to return one object

const returnObjectValue =<T, Tkey extends keyof T>(obj:T,key: Tkey)=>{
    return obj[key]
}

const value = returnObjectValue(products[0],"ProductCode")
export {}


type ObjectTest<T> = {[k in keyof T]:T[k]}
type recordType = Record<string,unknown>

//index signature
interface Ipropssss{
    [key:string ]:unknown
}

type IndexSig<T extends string, K> = {
    [key in T]: K
}

interface way2 extends Record<string,unknown>{

}

const way1Obj:way2 ={name:""}


type recordObj<T extends string,K> = Record<T,K>

const recordObj11 :recordObj<string,number> = {name:12}

type subjects = "chemistry" | "physics" | "maths"

type mappedTypes = {[k in subjects]:unknown}

type productsType = typeof products[0]

type productTypeObject<T> = {[key in keyof productsType]:T}

const productValues:productTypeObject<string> = {
    ProductCode:"",
    ProductName:""
}



interface IndexSign<T> {
    [key:string]:T
}

const index1:IndexSign<number> ={name:1}
const index2:IndexSign<string> ={name:""}
const index3:IndexSign<Record<string,string|number>> ={name:{}}


//Record utility

type RecordUtility1 = Record<string,string|number|boolean>

const recordutility1 :RecordUtility1 = {name:""}

// mapped types 

type carNames = "toyoto" | "maruti suzuki" | "Audi" | "BMW"
 
type mappedTypesType = {[key in carNames]:string}
const mappedTypeE1 :mappedTypesType = {"Audi":"","BMW":"","maruti suzuki":"","toyoto":""}

const cars123 ={
    firstcarName:"BMW",
    secondCarName:"Audi"
}

type OwnRecord<T extends string | number | symbol,K>  = {[key in T]:K}

type OwnReturTYpe<T> = T extends (...arg:any[]) => infer R ? R : ""   

function fn(value:string){
    return {name:""}
}

type testReturnType = OwnReturTYpe<typeof fn>





