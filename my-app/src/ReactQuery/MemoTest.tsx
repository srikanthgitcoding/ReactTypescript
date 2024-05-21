import React from 'react'

export default React.memo(function MemoTest() {
    console.log("memo")
  return (
    <div>

      Memo
    </div>
  )
})
