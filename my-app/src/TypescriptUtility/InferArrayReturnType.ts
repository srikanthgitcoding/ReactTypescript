import { never } from "zod"

const products1 = [
  "123",123,true

]

const cycleObject = {
  name:"cycle",
  work:"moving",
  km:12
}

type t = typeof cycleObject




// type ProductReturType11 = ReturnType<()=> typeof products1>

var arr = [1,""]
//
// withoutfunction
var p111 =""
type getArrayType111<T>= T extends (infer u)[]? u :never
type wf = getArrayType111<typeof p111>



//or

type newType = typeof products1[0]

export {}




type arrR<T> = T extends (infer R)[] ? R : never
let arrrr = ["ss","2",2,false,{name:""}]
type newtype = arrR<typeof arrrr>


type ReturnTYPeTest<T> = T extends (...arr:any[])=>infer R ? R : never

// type f= ReturnTYPeTest<typeof fn>