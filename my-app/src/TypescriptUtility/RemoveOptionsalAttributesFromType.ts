type RemoveOptioanlAttributes<T> = {[property in keyof T]-?:T[property]}
type schoolNames ={
    scheollNmae:string,
    location?:string,
    address :string
}

type removeOptionals = RemoveOptioanlAttributes<schoolNames>
const schollDetails:schoolNames ={
    scheollNmae:"",
    location:"",
    address:""
}

export {}