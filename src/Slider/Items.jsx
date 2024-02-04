import { useState } from 'react'
import styles from './Slider.css';
import { useRef } from 'react';

function Items({item, index}) {
  
  const data = [
    {
      id:0,
      img: require('../pic.PNG'),
      text: 
      'this is the way we know dkbdjkb happy day to LL CUStierd dont know how it runs but every things like kabsjkbabbsbkjabsbkjba line nonus eod alx data science ',
      
    },
    {
      id:1,
      img: require('../T0-Do List.png'),
      text:
      'this is the way we know dkbdjkb happy day to LL CUStierd qw00-ebj--ghhi90hrfbbb jbjwjp9 whp9[0 wkeyg6yjn ftyoqoihqwhwhuehuhweohoeoihohewihiowheio',

    },
    {
      id:2,
      img: require('../logo192.png'),
      text:
      'this is the way we know dkbdjkb happy day to LL CUStierd abhabskbhsabkj newbyegegwuigb sgdgdui s dhbsui sbdbsui usbdus sbudisi bdsuhduhudhs bsdouisdhsoi sbdnsidhi',

    },
    {
      id:3,
      img: require('../pic.PNG'),
      text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error animi odit quisquam explicabo consequuntur eligendi fugiat nisi voluptatem aliquid. Consequatur, molestias incidunt in culpa harum porro veniam laborum distinctio fugiat'
    }
  ]
  let [indexe, setIndexe] = useState(0)
  let [page, setPage] = useState(data[indexe])
  let slides = 0;
  slides++;

 let btn = useRef(null)
    const next =(e)=>{
      if(true){
        setIndexe(++indexe)
        setPage(data[indexe])
        if(indexe < 0){
          setIndexe(3)
          setPage(data[indexe])
        }
        if(indexe > 3){
          setIndexe(0)
          setPage(data[indexe])
        }
      }
    }
return(
  <div className='wrapped'>
    <div className="slider">
      <div className={indexe === data[indexe].id? 'details show' : null}>
        <img className='images' src={data[indexe].img} alt="" />
        <h2 onClick={()=>{
          if(data[indexe].id === indexe){
            console.log(indexe);
            console.log(data[indexe].id);
            console.log(btn.current.classList.value);
          }
        
        }} className={ data[indexe].id === indexe ? 'h2 show' : null}>{data[indexe].text}</h2>

      </div>
    
    </div>
   <div className="down">
    <div className="btns">
      <button key={index} ref={btn} onClick={next}  className={indexe === 0? 'active' : null}></button>
      <button key={index} ref={btn} onClick={next} className={indexe === 1? 'active' : null}></button>
      <button key={index} ref={btn} onClick={next} className={indexe === 2? 'active' : null}></button>
      <button key={index} ref={btn} onClick={next} className={indexe === 3? 'active' : null}></button>
      <button 
      onClick={(e)=>{
        if(true){
          e.target.classList.add('show')
          setIndexe(--indexe)
          setPage(data[indexe])
          if(indexe < 0 ){
            setIndexe(3)
            setPage(data[indexe])
            console.log(data.length -1 );
          }
        }
      }} className='prev'>&lt;</button>
      <button onClick={()=>{
        
        if(true){
          setIndexe(++indexe)
          setPage(data[indexe])
         
          if(indexe > 3){
            setIndexe(0)
            setPage(data[indexe])
          }
        }
       
      }} className='next'>&gt;</button>

    </div>
   </div>
  </div>
)
  
}

export default Items
