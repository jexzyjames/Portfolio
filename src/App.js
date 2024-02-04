// import './App.css';
import image from './T0-Do List.png'
import { useState } from 'react'
// import {Routes, Route, BrowserRouter ,Link, NavLink, BrowserRouter} from 'react-router-dom';
import Header from './pages/Header'
import Card from './pages/Card';
import Navbar from './pages/Navbar';
import Trailer from './Components/Trailer';
import Todo from './Components/Todo';
import Router from './Router/Router'
import Accordion from './Components/Accordion';
import Form from './Components/Form';
import Home from './Unilag/Home';
import Design from './Components/Design';
function App() {
  const [isOpen, setisOpen] = useState(true);
  const show = ()=>{
    setisOpen(!isOpen)
  }
  
  
  const obj = [
   {
    id: 1,
    name:'James',
    class: 'SS2',
    dept: 'Science',
   },
   {
    id: 2,
    name:'John',
    class: 'SS2',
    dept: 'Arts',
   },

   {
    id: 1,
    name:'Jeremy',
    class: 'SS2',
    dept: 'Commercial',
   }
  ]

  const objs = obj.map((item, pos)=>{
    return(
      <Header  key={pos} name={item.name} class ={item.class} dept ={item.dept}/>
    )
  })
  return (
    <div className="App"  >
      {/* <Card>
      </Card> */}
   {/* <Todo/> */}
   {/* <Card/> */}
   {/* <Home/> */}
      {/* <button className='btn' onClick={show} >Hide/Show</button>
      {
        isOpen&& objs
      } 
      {/* {objs}
    {/* <Card/> */}
    {/* <Navbar/> */}
    {/* <Trailer> */}
    {/* <Router>
      <Link to='/card' >About</Link>
      <Link to='/navbar' > Navbar</Link>
      <Link to='/trailer' > Traiker</Link>
      <Routes>
        <Route exact path='/card' element={<Card/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
      </Routes>
    </Router> */}
    {/* <Accordion/> */}
   <Router/>
   {/* <Design/> */}
   {/* <Form/> */}
    </div>
  );
}

export default App;
