interface BookTilte{
    tile:string,
    Author:string
}

interface id{
    crickerId:number
}
interface CrciketresList extends id{
    firStName:string,
    LastName:string
}


function BookTitle(title:string){

}//rathere this use below one


function BookTitle1(title:Pick<BookTilte,"tile">){

}

function crickerNames(list:Omit<CrciketresList,"crickerId">){

}
crickerNames({firStName:"",LastName:""})

type partialType<T> = {[k in keyof T]?: T[k] | undefined}


function fn111111111(data:BookTilte):partialType<BookTilte>{
    return {tile:""}
}

// custom return type  
function f(){
    return {
        name:"srikanth"
    }
}
type ReturnTypeCustom<T> = T extends (...arg:any[]) => infer R ?  R : null

type CustomgetReturnType = ReturnTypeCustom<typeof f>

interface I{
    firstName:string
}

export {}