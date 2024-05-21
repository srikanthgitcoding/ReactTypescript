import React from 'react'

const Email:React.FC = ():JSX.Element => {
  return (
    <div>
      Email : <input type="email"></input>
    </div>
  )
}

export default React.memo(Email)
