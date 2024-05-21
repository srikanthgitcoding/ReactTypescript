import React from 'react'
type Iprops ={
    value:string,
    onChange:(value:string)=>void
}

const EMailInput:React.FC<Iprops>= ({value,onChange}):JSX.Element => {
    console.log("email Input change")

  return (
    <div>
      <input type="text" value={value} onChange={(e)=>onChange(e.target.value)}></input>
    </div>
  )
}
export default React.memo(EMailInput) as typeof EMailInput
