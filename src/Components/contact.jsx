import React, { useContext } from 'react';
import './contact.css';
import { AuthTheme } from '../AuthThemeProvider';
import Resume from './Videos/Vivek-Verma-Resume.pdf';


   const Contact = () => {
    const{theme} = useContext(AuthTheme);
     return (
       <>
         <div className="box5 reveal" id="box5"  style={{backgroundColor : theme=='day'?  '#aaaeb0' : '#051c26' }}>  

         <div className="box51" id='contact'>
          
           <h1 style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)" : '#32de84' ,  textShadow :"2px 2px 2px black", fontSize:"50px", }}>CONTACT</h1>
          </div>

   
           <div className="box52">

               <div className="box511">
                 <h1 className="box5h1"  style={{color : theme=='day'? null: 'white'}}>Reach Out to me!</h1>
               
   
               <div className="box5111">
                 <p style={{color : theme=='day'? null: 'white'}}><i className="fa-solid fa-location-dot"></i> Prayagraj, Uttar Pradesh</p>
               </div>

               <div className="box5111">
                 <p id="contact-email" style={{color : theme=='day'? null: 'white'}} ><i className="fa-solid fa-envelope"></i>vivekverma4679@gmail.com</p>
               </div>

               <div className="box5111">
                 <p style={{color : theme=='day'? null: 'white'}}><i className="fa-solid fa-phone"></i> +91-9369546165</p>
               </div>

               
   
               <div className="box5112">
                 <div className="ico" ><a href="https://github.com/vivekverma4669" id='contact-github'> <img src='https://www.svgrepo.com/show/361181/github.svg'  style={{width:"35px"  , filter: theme=='day'? null : "invert(100%)"}}></img>  </a></div>
                 <div className="ico"><a href="https://wa.me/919369546165" id="contact-phone"> <img src='https://static-00.iconduck.com/assets.00/whatsapp-icon-2038x2048-5zk5gj1j.png'  style={{width:"35px" , filter: theme=='day'? null : "invert(100%)"}}></img></a></div>
                 <div className="ico"><a href="https://www.linkedin.com/in/vivek-verma-594700228/" id='contact-linkedin'><img src='https://www.svgrepo.com/show/108614/linkedin.svg'  style={{width:"35px" ,filter: theme=='day'? null : "invert(100%)"}}></img></a></div>
                 {/* <div className="ico"><a href="https://www.linkedin.com/in/vivek-verma-594700228/" id=''><img src='https://www.svgrepo.com/show/108614/linkedin.svg'  style={{width:"35px"}}></img></a></div> */}
                 <div className="ico"><a href="mailto:vivekverma4679@gmail.com" id='contact-email'><img src='https://www.svgrepo.com/show/1284/message.svg'  style={{width:"35px",filter: theme=='day'? null : "invert(100%)"}}></img></a></div>
                 <div className="ico"><a href="https://www.instagram.com/vivek__.soni/"> <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png'  style={{width:"35px" , filter: theme=='day'? null : "invert(100%)"}} ></img></a></div>
                 <div className="ico"><a href="tel:+919369546165" id='contact-phone'><img src='https://www.iconpacks.net/icons/1/free-phone-icon-504-thumb.png'  style={{width:"35px" , filter: theme=='day'? null : "invert(100%)"}}></img></a></div>
               </div>
              
             
               
               
               </div>
       
   
         <div className="box512">
         <img className="img51" src="https://i.ibb.co/1r9Hhxs/Whats-App-Image-2024-01-17-at-20-04-51-344e3480.jpg" alt="" />
         <div className="btn_div">

         <button className="rbtn"  style={{ marginLeft :"-50px", margin: "10px" ,backgroundColor :theme=='day'? null: "green"}} >
        <a download="Vivek-Verma-Resume" href={Resume}> Resume <img src='https://icon-library.com/images/download-icon-white-png/download-icon-white-png-22.jpg' style={{width :"30px"}}   id="resume-button-1"/></a>
        </button>

         </div>
         </div>

</div>

 
         </div>  
        
         <h3 style={{backgroundColor :'rgb(0, 85, 169' , margin :'0px' , textAlign:' center' , color: 'white' }}>Built From Scrach by  Vivek 😎</h3>
            
       </>
     );
   };
   
   export default Contact;
   


//    <div class="box5 reveal" id="box5">
//    <div class="box51">
//        <h1>CONTACT</h1>
//    </div>


//    <div class="box52">

//        <div class="box511">

//            <h1 class="box5h1">Reach Out to me!</h1>

//            <h3 class="box5h3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h3>

           

//            <div class="box5111">
//                <p><i class="fa-solid fa-location-dot"></i> Barmer, Rajasthan</p>
//            </div>
//            <div class="box5111">
//                <p><i class="fa-solid fa-envelope"></i> dineshjangid538@gmail.com</p>
//            </div>
//            <div class="box5111">
//                <p><i class="fa-solid fa-phone"></i> +91-8696700323</p>
//            </div>

//            <div class="box5112">
//                <div class="ico"><a href="https://github.com/dineshjangid03/"><i class="fa-brands fa-github"></i></a></div>
//                <div class="ico"><a href="https://www.linkedin.com/in/dineshjangid03/"><i class="fa-brands fa-linkedin"></i></a></div>
//                <div class="ico"><a href="mailto:dineshjangid538@gmail.com"><i class="fa-solid fa-envelope"></i></a></div>
//                <div class="ico"><a href="tel:+918696700323"><i class="fa-solid fa-phone"></i></a></div>
//                <div class="ico"><a href="https://www.instagram.com/dineshjangid03/"><i class="fa-brands fa-square-instagram"></i></a></div>
//                <div class="ico"><a href="https://wa.me/918696700323"><i class="fa-brands fa-whatsapp"></i></a></div>
//            </div>

           

//        </div>

                   
//        <div class="box512">
//            <img class="img51" src="image/img2.png" alt="">
//            <div class="btn_div">
//                <button class="rbtn"><a download="" href="pdf/DINESH_KUMAR_Resume.pdf">Resume</a></button>
//            </div>
//        </div>

//    </div>
   


// </div>

