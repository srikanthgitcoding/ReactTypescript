
const createSet =<T= string>()=>{
return new Set<T>()
}

const NumberSet = createSet<number>()
// it becomes NumberSet:Set<number>

const stringSet = createSet<string>()
const nothingSet = createSet() // here type is unknown so pass a default type



export {}