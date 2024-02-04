import logo from "../images/unilag.png";
import img from '../pic.PNG'
import homework from '../images/homework.png'
import document from '../images/document.png'
import refresh from '../images/refresh.png'
import gate from '../images/gate.jpg'
import card from '../images/credit-card.png'

import "../Unilag/home.css";
import { useState } from "react";
import { useRef } from "react";
function Home() {
  const [click, setClick] = useState(false)
  let refs = useRef()
  const lis =[
    {
      id:0,
      name:'Dashboard'
    }, {
      id:1,
      name:'Student Data'
    }, {
      id:2,
      name:'Payments'
    }, {
      id:3,
      name:'Course Registration'
    }, {
      id:4,
      name:'Results'
    }, {
      id:5,
      name:'Appointment'
    }, {
      id:6,
      name:'Election'
    }, {
      id:7,
      name:'Accommodation'
    }, {
      id:8,
      name:'Student Applications'
    }
  ]
 let [num, setNum]= useState(0)
 let [index, setIndex]= useState(lis[num])
  const check =(e)=>{
        
        
          if(e.target.innerHTML === lis[num].name){
        e.target.classList.add('hover')

            // prompt('helo ytherre')
          }
        
    
      else{
        e.target.classList.add('hover')

      }
      console.log(e);
      console.log(lis[num].name);

  }
  return (
    <div className="header">
      <div className="top">
        <div className="left">

        <img className="logo" src={logo} alt="" />
        <h2>UNIVERSITY OF LAGOS</h2>
        </div>
        <div className="prof">
          <img className="oval" src={img} />
          <h4>James</h4>
        </div>
      </div>
      <div className="dashboard">

        {click && (<button onClick={(e)=> setClick(false)} className="menu">X</button>)}
     {!click && (<button onClick={(e)=> setClick(true)} className="menu">+</button>)}
      {/* <br /> */}
        <ul className={click && 'wrap open'}>
          <li onClick={check} ref={refs} className="li">Dashboard</li>
          <li onClick={check} ref={refs} className="li">Student Data</li>
          <li onClick={check} ref={refs} className="li">Payments</li>
          <li onClick={check} ref={refs} className="li">Course Registration</li>
          <li onClick={check} ref={refs} className="li">Results</li>
          <li onClick={check} ref={refs} className="li">Appointment</li>
          <li onClick={check} ref={refs} className="li">Election</li>
          <li onClick={check} ref={refs} className="li">Accommodation</li>
          <li onClick={check} ref={refs} className="li">Student Applications</li>
        </ul>
      <div className="right">
        <div className="cards">
            <div className="detail">
                <h3>James Jegede</h3>
                <div className="info">

                <div className="course">
                    <h6 className="">B.S.C & B.Ed in Chemistry Education</h6>
                    <h4>CHEMISTRY EDUCATION</h4>
                </div>
                <div className="units">
                    <div>
                    <label htmlFor="">3</label>
                 <b>Year</b>
                    </div>
                <div>
                <label htmlFor="">First</label>
                 <b>Semester</b>
                </div>
                 <div>
                 <label htmlFor="">9</label>
                 <b>Courses</b>
                 </div>
                 <div>
                 <label htmlFor="">0</label>
                 <b>Units</b>
                 </div>
                
                </div>
                </div>
            </div>
            
        </div>
        <div className="bottom">
          <div className="cards two">
            <div className="numberofcourse">
              <img src={document} alt="" />
              <h3>Courses</h3>
              <h4>76/128 Completed</h4>
              <hr className="line" />
            </div>
          </div>
          <div className="moneysection">
            <div className="cards ref">
              <img src={refresh} alt="" />
              <h3>Refresh payment Status</h3>
            </div>
            <div className="cards pay">
            <img src={card} alt="" />
              <h3>Payments</h3>
            </div>
            {/* <div className="cards pay">
            <img src={homework} alt="" />
              <h3>Applications</h3>
            </div> */}
          </div>
          <div className="cards app">
            <img src={homework} alt="" />
              <h3>Applications</h3>
            </div>
        </div>
      </div>
    
      </div>
    </div>
  );
}

export default Home;
