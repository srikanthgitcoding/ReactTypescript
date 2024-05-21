import React, { useState } from 'react'
import Footer from './Footer'


interface Iprops{
    Item:string,
    underline:boolean
}
export default function ClickEventTest() {
  const [todo,setTodo] = useState<Iprops[]>([])
  const [inputValue,setInputValue]= useState<string>("")
  return (
    <div>
        <div style={{border:"1px sold red"}}>
        <form  onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault();setTodo((prev)=>[...prev,{Item:inputValue,underline:false}]);setInputValue("")}}>
        <input type="text" value={inputValue} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputValue(e.target.value)} placeholder='Add items here'></input>
        <button type='submit'>Add</button>
        </form>
        </div>
        <Footer setTodo={setTodo} todo={todo}></Footer>
      
    </div>
  )
}
