import React from 'react'
import Header from '../pages/Header'
import Card from '../pages/Card'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
import Navbar from '../pages/Navbar'
function Trailer(props) {
  return (
    <div>
       <Router>
      <Link to='/card' >About</Link>
      <NavLink className='active' to='/navbar' > Navbar</NavLink>
      <Routes>
        <Route  exact path='/card' element={<Card/>}/>
        <Route exact path='/navbar' Component={Navbar}/>
      </Routes>
    </Router>
      
    </div>
  )
}

export default Trailer




