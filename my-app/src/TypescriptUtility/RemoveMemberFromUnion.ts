type leters = "A" | "B" | "C"

type Remove<TType> = TType extends "C" ? never : TType

// here we say if tType extends C then (never) removes it else just return the type as is 
type Remove1<TType> = TType extends "C" ? "d" : TType
// ttype extends C  then replace it with d

type lettersWithOutC = Remove1<leters>

type status = "completed" | "pending" | "new"

type removeStatus<TType> = TType  extends "new1" ? "inprogress" : TType


type  RemoveNew = removeStatus<status>

export default {}