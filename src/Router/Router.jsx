import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Card from '../pages/Card'
import Header from '../pages/Header'
import Form from '../Components/Form'
import Todo from '../Components/Todo'
import Accordion from '../Components/Accordion'
import Testimonial from '../Skills/Testimonial'
import Slider from '../Slider/Slider'
import Home from '../Unilag/Home'
import Items from '../Slider/Items'
import Portfolio from '../Components/Design.jsx'
import Design from '../Components/Design.jsx'
function Router() {
  return (
    <div>
      {/* <Todo> */}
      <BrowserRouter>
      {/* <Todo/> */}
        <Routes>
            <Route path='/' exact element={<Design/>}/>
            <Route path='/card' exact element={<Card/>}/>
            <Route path='/todo' exact Component={Todo}/>
            <Route path='/form' exact element={<Form/>}/>
            <Route path='/accordion' exact Component={Accordion}/>
            <Route path='/testimonial' exact Component={Testimonial}/>
            <Route path='/unilag' exact Component={Home}/>
        </Routes>
      </BrowserRouter>
      {/* </Todo> */}

    </div>
  )
}

export default Router
