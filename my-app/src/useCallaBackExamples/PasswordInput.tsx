import React from 'react'

type Iprops ={
    value:string,
    onChange:(value:string)=>void
}

const PasswordInput:React.FC<Iprops>= ({value,onChange}) => {
    console.log("password Input change")
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>onChange(e.target.value)}></input>
    </div>
  )
}

export default React.memo(PasswordInput)
