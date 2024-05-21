import React from 'react'


const FirstName:React.FC = ():JSX.Element => {
  return (
    <div>
      FirstName : <input type="text"></input>
    </div>
  )
}

export default React.memo(FirstName)
