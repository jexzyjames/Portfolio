import {useState} from 'react'
import logo from '../Assets/logo.png'
import image from '../Assets/WhatsApp Image 2024-01-16 at 10.04.05_47f205f3.jpg'
import img from '../Assets/james.jpg'
import dp from '../Assets/jj.jpg'
import imgs from '../Assets/unilagrepl.png'
import images from '../Assets/ecommerce.png'
import pic from '../Assets/tracker.png'
import menuicon from '../Assets/menu.png'
import mail from '../Assets/email.jpg'
import rate from '../Assets/ratings.png'
import classes from  '../Components/design.module.css'

function Design() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <div id='home' className={classes.header}>
        <nav className={classes.nav}>
            {/* <img className={classes.logo} src={logo} alt="" /> */}
            <span className={classes.logo}>JamesJJ</span>
            <img
            onClick={()=>{
                setOpen(!open)
            }}
             className={classes.menu} src={menuicon} alt="" />
              
          

           
            <ul className={open? `${classes.ulshow}` : `${classes.ul}`}>
             <li className={classes.li} > <a href="#home">Home</a></li>
             <li className={classes.li} > <a href="#about">About</a></li>
             <li className={classes.li} > <a href="#projects">Projects</a></li>
             <li className={classes.li} > <a href="#services">Services</a></li>
             <li className={classes.li} > <a href="#contact">Contact</a></li>
             <a className={classes.ct} href="#contact">Contact Me</a>

         </ul>
         <div className={classes.contact}>
             <a href='#contact' className={classes.span}>Contact Me</a>
         </div>
           
              
        
          
        </nav>
        </div>

        <div id='about' className={classes.about}>
            <div className={classes.leftcontent}>
                <h2>Hello,</h2>
                <h1>I'm <span className={classes.james}>James</span> <br />A Web Developer</h1>
                <p>I am a versatile and passionate web developer and have good drive for excellence.</p>
               
                <a href='https://drive.google.com/file/d/1aukseP0-aE9jxovYxnifbVpjJvlEKjN8/view?usp=sharing' target='_blank' className={classes.go}>Hire Me</a>

                <div className={classes.Skills}>
                    <div className={classes.lang}>
                    <h2>PROGRAMMING LANGUAGES</h2>
                     <ul className={classes.language}>
                        <li>HTML <span>Experience: Advanced</span></li>
                        <li>CSS <span>Experience: Advanced</span></li>
                        <li>TAILWIND CSS <span>Experience: Intermediate</span></li>
                        <li>REACT JS <span>Experience: Intermediate</span></li>
                     </ul>
                    </div>
                </div>
            </div>


            <div className={classes.rightcontent}>
                <img src={dp} alt="" />
            </div>
        </div>

        <div id='projects' className={classes.projects}>
            <h1 style={{textAlign:'center', marginBottom:'10px', color:'slateblue', textTransform: 'uppercase'}}>Projects</h1>
            <div className={classes.card}>
                <div className={classes.desc}>
                    <div className={classes.info}>
                    <h1>  Dashboard</h1>
                    <img src={imgs} alt="" />

                    <div>
                        <p>The Landing Page of the University of Lagos replicated</p>
                        <div className={classes.details}><br />
                         <br />
                         <br />
                         <br />
                            <a className={classes.link} href="https://student-portal-ivory.vercel.app/">Check out</a>
                        </div>
                    </div>
                    </div>
                   

                    <div className={classes.info}>
                    <h1>E-commerce </h1>
                    <img src={images} alt="" />

                    
                    <div>
                        <p>An E-commerce responsive and with functionalities like 
                            1. Add to Cart
                            2. Check out
                        </p>
                       
                        <div className={classes.details}><br />
                        <br />
                        <br />
                        <br />
                            
                            <a className={classes.link} href='https://ecommerce-phi-one-77.vercel.app/'>Check out</a>
                        </div>
                    </div>
                    </div>


                    <div className={classes.info}>
                    <h1>Track Profile</h1>
                    <img src={pic} alt="" />

                    
                    <div>
                        <p>A little overview that also helps you track the current time and date</p>
                        <div className={classes.details}><br />
                        <br />
                        <br />
                        <br />
                           
                            <a className={classes.link} href="https://zuri-task-2qgqo9yj6-jexzyjames.vercel.app/">Check out</a>
                        </div>
                    </div>
                    </div>

                    <div className={classes.info}>
                    <h1> Ratings</h1>
                    <img src={rate} alt="" />

                    
                    <div>
                        <p>A rating component that gives feedbacks on how a company service is being measured on rendered.</p>
                        <div className={classes.details}><br />
                        <br />
                        <br />
                        <br />
                           
              
                            <a className={classes.link} href=" https://interactive-rating-component-psi-three.vercel.app/">Check out</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


               
        </div>

        {/* <h1>CONTACT ME</h1> */}
               
        <div id='contact' className={classes.Contact}>
               
        <h1>CONTACT ME</h1>

               <div className={classes.chat}>
                <div className={classes.left}>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Your Name' /> <br />
                    <br />
                    <label htmlFor="">Email Address</label><br />
                    <input type="text" placeholder='Enter Your Email' /><br />
                    <br />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                     <a href='' className={classes.btn}>Chat Me</a>
                </form>
                </div>
                
                
                <div className={classes.right}>
                    <img src={mail} alt="" />
                </div>
                </div>
            
            </div>

    </div>
  )
}

export default Design
