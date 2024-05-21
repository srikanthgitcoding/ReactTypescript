import React, { useCallback, useState } from 'react'

interface Iprops{
    Item:string,
    underline:boolean
}
interface Propss {
    setTodo : React.Dispatch<React.SetStateAction<Iprops[]>>
    todo:Iprops[]
}
const Footer:React.FC<Propss> = ({setTodo,todo}) => {
    const itemText = todo.length == 1 ? "item" : "items"
    const todosize = todo.length
    const [todoLength,setTodosLength] = useState<number>(todosize)
    console.log("todoLength",todoLength)
    
    const addUnderline=useCallback((index:number)=>{
        const todoList = [...todo]
        const new1 = todoList.map((item,i)=>{
            if(index == i){
                
                item["underline"]=!item.underline
                
            }
            return item
        })
        setTodo(new1)
    },[todo])

  return (
    <div>
      {
        todo && todo.map((item:Iprops,index)=>{
            return <div style={{textDecoration: item.underline ? "line-through" :"none"}} onClick={()=>addUnderline(index)}>{item.Item}</div>
        })
      }
      {todosize} {itemText} are added
    </div>
  )
}

export default React.memo(Footer)
