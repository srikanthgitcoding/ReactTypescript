interface Person{
    name:string,
    age:number,
    fullName:string
}


// type Getters<T> = {[property in keyof Person as `get${Capitalize<string & property>}`]:()=>T[property]}

// type test = Getters<Person>
export {}

//// Remove the 'fullName' property


type removeFulName = Omit<Person,"fullName">
const r:removeFulName = {name:"",age:1}

// make all properties as optional
type OptionalType = Partial<Person> 

// make single property Optional 



type OwnPartial<T> = {[property in keyof T]?:T[property]}


