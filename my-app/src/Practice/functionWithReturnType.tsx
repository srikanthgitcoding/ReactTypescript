import React from 'react'

interface Iprops{
    name?:string
}

const functionWithReturnType:React.FC<Iprops>= ({name}):JSX.Element => {
  return (
    <div>
      
    </div>
  )
}

// function FC:React.FC<Iprops>({name}:Iprops):JSX.Element {
// return <div>something</div>
// }

export default functionWithReturnType
