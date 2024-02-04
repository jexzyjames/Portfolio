import { useState, useRef } from 'react'
import UI from './UI'
// import './todo.css'
import {NavLink, Link} from 'react-router-dom'

function Todo() {
    const usage = useRef()
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
const toggle =(item)=>{
  // console.log(item);
  if( item){
    return item != usage.current.focus()
  }
  // usage.current.focus()

}
    const addItem = ()=>{
      if(value != ''){
        setTodos((prev)=> [...todos, prev]);
      }
 //  setTodoelse{s([...todos, value])?
     }
      
    const handle =(e)=>{
      setValue(e.target.value)

    }
    
function Delete(idea){
  setTodos((prevtodos)=> prevtodos.filter((prevtodo, prevs)=>{
    return prevs != idea
  }))

}
    

    
   
  return (
    <div>
    < UI onclick ={()=> addItem()} 
    onChange ={handle} defaultValue ={value}
    />
      {todos.map((item, id)=>{

        return(
        <div className='her'>
      <input
      key={id}
      
      ref={usage}
      // defaultValue={value}
      defaultValue={value}
      className='input'
       type="text" 
       />

      <button
      onClick={()=> toggle(item)}
       className='edit'>
        Edit
        </button>
      <button 
      className='delete'
      onClick={()=> Delete(id)}
     >
        Delete
        </button>
        </div>
        )
      })}
      <div>
        <div>
        <NavLink href='/card' to='/card' >
          asnjkas
          {/* <button className=''>Go</button> */}
        </NavLink>
        </div>
        <div className={ `${ !addItem ? 'none' : 'none'}`}>{
        <>
        <p className={`${value == '' && error ?  
          'alert'
        : 'noe'}`}>{value == '' && error}</p>
        </> }</div></div>
    </div>
  )


}

export default Todo
