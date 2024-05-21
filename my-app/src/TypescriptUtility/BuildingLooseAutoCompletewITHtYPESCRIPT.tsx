type Tsize  = "xs" | "sm"
type TsizeString  = "xs" | "sm" | string // but here u will loose type safety u can add 
//any random string it doesnt  show xs or sm
//bcz it considers evrything as sring
type Tsize11 = "xs" | "sm" | Omit<string, "xs"|"sm">
// here from 

const test:Tsize11 = "sm"



type looseAutoComplete<T extends string> = T | Omit<string,T>


type Tsize12 = looseAutoComplete<"xs" | "sm">

interface Iprops {
    children?:string
    size:Tsize11
}

export const Icon =({children,size}:Iprops)=>{
    return <>{children}</>
}

export default function Comp(){
    return (<>
        <Icon size="sm"></Icon>
        <Icon size="kkk">one way to acheive is add string</Icon> 
        </>
    )
}