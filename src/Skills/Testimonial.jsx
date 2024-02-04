import  { useEffect, useState } from 'react'
import image from '../pic.PNG'
import imaged from '../T0-Do List.png'
import images from '../pages/musical notes.png'
import classes from './Testimonial.module.css'
function Testimonial() {
    const [string, setString] = useState(0)
    //  for(let i = reviews; i<reviews.length; i++){
    //     setString[i]
    //  }
    
    const reviews = [
        {   id: 0,
            img: image,
            text:
            'this is the way we know dkbdjkb happy day to LL CUStierd dont know how it runs but every things like kabsjkbabbsbkjabsbkjba line nonus eod alx data science ',
        },
        {   id: 1,
            img: imaged,
            text:
            'this is the way we know dkbdjkb happy day to LL CUStierd qw00-ebj--ghhi90hrfbbb jbjwjp9 whp9[0 wkeyg6yjn ftyoqoihqwhwhuehuhweohoeoihohewihiowheio',
        },
        {   id: 2,
            img: images,
            text:
            'this is the way we know dkbdjkb happy day to LL CUStierd abhabskbhsabkj newbyegegwuigb sgdgdui s dhbsui sbdbsui usbdus sbudisi bdsuhduhudhs bsdouisdhsoi sbdnsidhi',
        },
        // {   id: 63,
        //     img: image,
        //     text:
        //     'this is the way we know dkbdjkb happy day to LL CUStierd',
        // },
        // {   id: 63,
        //     img: image,
        //     text:
        //     'this is the way we know dkbdjkb happy day to LL CUStierd',
        // },
    ]
    const disp = reviews.length;
 
  let visible;
  let tweak;

 const sure = (visi)=>{
    for(let i =0; i < reviews.length; i++){
        visible = reviews[i]

    }
 }
 const [open, setOpen] = useState(reviews[0].text)
    const [drill, setDrill] = useState('')
 sure()
 
    
  return (

    <div className={classes.wrapper}>
        <h2 className='h2'>{drill}</h2> <br />
        <div className={classes.testimonies}>
            <div className={classes.content}>
                <p onAbort={(e)=> alert('hi') } className={classes.details}>{open}</p>
            </div>
        
        </div>
        <div className={classes.persons}>
            <div className={classes.images}>

                {reviews.map((item, index)=>{
                    return(
                        <img onSelect={(e)=> e.preventDefault()} key={index} className={open == reviews[index].text ? `${classes.imgs}` :  `${classes.img}`}src={item.img}
                    onClick={(e)=>{
                         if(index === 0 || index === 2){
                            setDrill('Reviews')
                        setOpen(item.text);

                           }
                       if(index === 1){
                        setDrill('Music player')
                        setOpen(item.text);

                       }
                    //    if(index === 2){
                    //     setDrill('YTod player')
                    //    }
                      

                    //   if(!item.id){
                    //              tweak = e.currentTarget.classList;
                    //              tweak.add(`${classes.imgs}`)
                    //              console.log(tweak);

                    //   }    

                    // if(index == 0){
                    //     tweak = e.currentTarget.classList;
                    //     // alert('ij')
                    // tweak.add(`${classes.imgs}`)
                    // setOpen(reviews[index].text)
                    // }
                       
                        // tweak = e.currentTarget.classList;
                        // tweak.add(`${classes.imgs}`)
                      
                      else{
                        return false;
                      }
                      
                    // else if(reviews[index].text == open){
                    //     tweak = e.currentTarget.classList;
                    //     tweak.remove(`${classes.imgs}`)
                    // }           
                    // else{
                    //     tweak = e.currentTarget.classList;
                    //     tweak.add(`${classes.imgs}`)
                    //     return;
                    // }

                      
                      
                       
                       {/* <img src={image} 
                onClick={(e)=> {
                    setOpen(reviews[0].text)
                   
                }}
                 className={open === visible ?  `${classes.imgs}`: `${classes.img}`} alt="" /> */}
                        // if(item.id !== show){
                        //      tweak = e.currentTarget.classList;
                        //     // tweak.add(`${classes.img}`)
                        // }
                         
                        
                         
                          

                        
                        // console.log(e.currentTarget.src.length)
                    }} alt="" />
                    )
                })}
                
                
            </div>
        </div>
        {/*  */}
        </div>
      
  )
}

export default Testimonial
