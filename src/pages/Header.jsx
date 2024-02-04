import {BrowserRouter, Routes, NavLink, Link, Route} from 'react-router-dom'
import '../Components/styles.css'
import Card from './Card'
const Header = (props) => {
   
  return (
    <div className=
    'card'
       >
      <h1>{props.name}</h1>
    
      <p>{props.class}</p>
      <p>{props.dept}</p>
       
    </div>
  )
}

export default Header
