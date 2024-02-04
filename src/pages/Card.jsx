import {useState} from 'react'
import { BrowserRouter, Link, Navigate, NavLink, redirect, Route, Routes, useNavigate } from 'react-router-dom'
import '../Components/styles.css'
import image from '../T0-Do List.png'
import secondImage from './musical notes.png'
import thirdImage from '../pic.PNG'
import Header from './Header'
import Navbar from './Navbar'
function Card() {
  // const update = useNavigate();
  // const cards = ()=>{
  //   update('/header');
  // }
  // const roam = ()=>{
  //   update('/navbar');
  // }
  const obj = [
    {
      name: 'james jegede',
      src: image,
    },
    {
      name: 'james jegede',
      src: secondImage,
    },
    {
      name: 'john jegede',
      src: thirdImage
    },
    {
      name: 'james jegede',
      src: image
    },
  ]
  return (
    
    <div className='wrapper'>
      <Link to='/todo'>
          <img className='image' src={image} alt="" />
        </Link>
      
{/*       
      <Link to='/navbar'>
        pages
          <img className='image' src={image} alt="" />
        </Link> */}
       
      
       
         
       
      {
        obj.map((objs, index)=>{
          return(
            <div className='container' key={index}>
             <div className="hero">
             <img className='image' src={objs.src} alt="pics" />
             </div>
              <h2>{objs.name}</h2>
              
              {/* <p>{objs.name}</p> */}
              {/* <img src={image} alt="" /> */}
            </div>
          )
        })
      }
      <button>cards</button>
      <button>Header</button>

     
    </div>
  )

}

export default Card
