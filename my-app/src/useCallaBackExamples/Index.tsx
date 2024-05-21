// import React from 'react'
// import FormUsecallBackExample from './Form'

// const IndexCallBack = () => {
//   const hadnleSubmit =()=>{

//   }
//   const test =async ()=>{
//     // (function test1(){
//     //   console.log("test1")
//     // })()

//     await hadnleSubmit(():void =>{
//       callmack()
//     })();
//   }
//   return (
//     <div>
//       index
//       <FormUsecallBackExample></FormUsecallBackExample>
//     </div>
//   )
// }

// export default IndexCallBack

import React, { useState } from 'react'
type family= {
  readonly firstName:string,
  
  lastName:string
}
const IndexCallBack = () => {
  const [fam,setFam] =useState<family>({} as family)
  console.log("fam",fam)
  const firstNameChange =(e:any)=>{
    //fam["firstName"] = e.target.value
    // setFam({...fam,firstName:e.target.value})
  }
  const lastNameChange =(e:any)=>{
    console.log("e",e)
    setFam({...fam,lastName:e.target.value})

  }

  return (
    <div>
      <input type='text' value={fam.firstName} onChange={(e)=>firstNameChange(e)} />
      <input type='text' value={fam.lastName} onChange={(e)=>lastNameChange(e)} />
      <></>
    </div>
  )
}

export default IndexCallBack
