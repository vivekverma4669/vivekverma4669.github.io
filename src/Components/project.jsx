import './project.css';
import Glosier from './Videos/glossier.mp4';
import boat from './Videos/Boat.mp4';
import Electron from './Videos/Electron.mp4';
import Elogo from './Videos/eLogo.jpg'
import port from './Videos/port.mp4'
import { useContext } from 'react';
import { AuthTheme } from '../AuthThemeProvider';

const Project = () => {
  const {theme} = useContext(AuthTheme);
    return (

<div  style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)' , marginTop:'-33px'}} >
<br/>
<br/>
<h1  id='projects'style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)" : '#32de84' ,  textShadow :"2px 2px 2px black", fontSize:"50px", }}>My Projects</h1>
        
<div className="project"  >
         
 

<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'silver', borderRadius: '10px'}}>
  <video loop autoPlay controls>
    <source src={boat} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
 <a  className="project-deployed-link" href='https://64b52a5f1165af0f63d1969a--elaborate-paprenjak-06f23e.netlify.app/' ><h2>🌐preview </h2></a>
 <a className="project-github-link" href='https://github.com/vivekverma4669/boat_project_group_7?tab=readme-ov-file'> <h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2></a>
</div>

<h1 className='project-title'> <img style={{width:"70px", marginRight:"20px"}} src="https://seeklogo.com/images/B/boat-logo-F99CE766FA-seeklogo.com.png"/>(BOAT clone)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}} className="project-description">
it's a clone of an e-commerce website that is boat ,boat deals with smart life style products and gadgets
</h3>
<h3 className="project-tech-stack"><u>Tech Stack</u> <span style={{color:"rgb(0, 85, 160)"}}> HTMl | CSS | javaScript | Razor Pay | React </span> </h3>
<h3><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the Home Page and ProductDetails page.</span></h3>
<h3><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h3>
<h3><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 4 members</span></h3>
</div>
</div>


<div className="project-card" style={{backgroundColor : theme=='day'? null : 'silver' , borderRadius: '10px'}}>
  <video  autoPlay controls loop>
    <source src={Glosier} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
<a   className="project-deployed-link"  href='https://delightful-phoenix-888d86.netlify.app/'><h2>🌐preview</h2></a>
 <a  className="project-github-link" href='https://github.com/Saurav9284/Unite-5-Project-Female-Beauty-Product-'><h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2></a>
</div>

<h1 className='project-title'> <img style={{width:"90px", marginRight:"20px"}} src="https://cdn.worldvectorlogo.com/logos/glossier-1.svg"/>(Glossier Clone)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}} className="project-description">
A beauty website and community devoted to sharing real information with real people, about really amazing products. 
</h3>
<h3 className="project-tech-stack"><u>Tech Stack</u> <span style={{color:"rgb(0, 85, 160)"}}> HTMl | CSS | javaScript | Razor Pay </span> </h3>
<h3><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created ProductDetails page , WishList and Paynment page.</span></h3>
<h3><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h3>
<h3><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 4 members</span></h3>
 </div>
</div>




<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'silver' , borderRadius: '10px'}}>
  <video loop autoPlay controls>
    <source src={Electron} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
 <a  className="project-deployed-link" href='https://64dcee8acb8ee428e7b63db9--charming-bienenstitch-d89c77.netlify.app/'><h2>🌐preview</h2></a>
 <a className="project-github-link" href='https://github.com/RajshreeJaiswal/Electron-ecommerce-website'></a><h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2>
</div>

<h1 className='project-title'> <img style={{width:"90px", marginRight:"20px"}} src={Elogo}/>(Electron)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}} className="project-description">
It's a replica of an e-commerce platform named Electron, specializing in smart lifestyle products and cutting-edge gadgets. As an emulation, 
</h3>
<h3 className="project-tech-stack"><u>Tech Stack</u> <span style={{color:"rgb(0, 85, 160)"}}> HTMl | CSS | javaScript | Razor Pay </span> </h3>
<h3><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the  ProductDetails page and Product page .</span></h3>
<h3><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Product Manager</span></h3>
<h3><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 3 members</span></h3>
</div>
</div>

 
<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'silver' , borderRadius: '10px'}}>
  <video loop autoPlay controls>
    <source src={port} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
 <a className="project-deployed-link" href='https://vivekverma4669.github.io'> <h2>🌐preview</h2></a>
<a  className="project-github-link" href='https://github.com/vivekverma4669/vivekverma4669.github.io'><h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2></a>
</div>

<h1 className='project-title'> My portfolio</h1>
<h3 style={{color:"rgb(0, 85, 160)"}} className="project-description">This is my Portfolio it contains Information about Me.You can see  My Work Contributions or solo projects .
</h3>
<h3 className="project-tech-stack"><u>Tech Stack</u> <span style={{color:"rgb(0, 85, 160)"}}> HTMl | CSS | javaScript  |React | Router </span> </h3>
<h3><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the whole website from scracth</span></h3>
<h3><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> .......</span></h3>
<h3><span style={{color:"rgb(0, 85, 160)"}}>Solo Project </span></h3>
</div>
</div>
        
</div>

        </div>
    )}




  export default Project;