import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import classes from '../Components/form.module.css'
function Form() {
    const [action, setAction] = useState('Sign Up')
    const [edit, setEdit] = useState(false)
   
    const add =(edit)=>{
      console.log(edit);

    }
  return (
    <div className={classes.wrappers}>
      <div className={classes.from}>
        <h2>{action}</h2>
        <span className={classes.sp}></span> <br />
      
        <input
         onFocus={(e)=> {
          if(e && e.currentTarget.value ==  ''){
            e.currentTarget.classList.add(`${classes.border}`)
            console.log(e.currentTarget.className);
            // setEdit(true)
            return;
          }
        

        }}
        onInput={(e)=>{
          if(e.currentTarget.classList.contains(`${classes.border}`)){
            e.currentTarget.classList.remove(`${classes.border}`)
  return;
            }
        }} type="text" placeholder='Name'
         /><br />
        <br />
        <input type="text" placeholder='Email id' 
        onFocus={(e)=> {
          if(e && e.currentTarget.value ==  ''){
            e.currentTarget.classList.add(`${classes.border}`)
            console.log(e.currentTarget.className);
            // setEdit(true)
            return;
          }
        

        }}
        onInput={(e)=>{
          if(e.currentTarget.classList.contains(`${classes.border}`)){
            e.currentTarget.classList.remove(`${classes.border}`)
  return;
            }
        }} /><br />
        <br />
        <input
         onFocus={(e)=> {
          if(e && e.currentTarget.value ==  ''){
            e.currentTarget.classList.add(`${classes.border}`)
            console.log(e.currentTarget.className);
            // setEdit(true)
            return;
          }
        

        }}
        onInput={(e)=>{
          if(e.currentTarget.classList.contains(`${classes.border}`)){
            e.currentTarget.classList.remove(`${classes.border}`)
  return;
            }
        }}
         type="text" placeholder='Password' /><br />
        <br />
        <p>Lost Password <a href="/card">Click Here</a> </p>
       
        <div className={classes.buttons}>
            <button 
            className={action ==='Sign Up'? `${classes.gray}`: `${classes.btn}`}
            onClick={()=> setAction('Sign Up')} >Sign Up</button>
            <button type='submit' onClick={()=> setAction('Log In')}  className={action === 'Sign Up'? `${classes.btn}`: `${classes.gray}`}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Form
