import './project.css';
import Glosier from './Videos/glossier.mp4';
import boat from './Videos/Boat.mp4';
import Electron from './Videos/Electron.mp4';
import Elogo from './Videos/eLogo.jpg'

const Project = () => {
    return (


<>
<h1 style={{ textAlign: "center", color: "rgb(0, 85, 169)", textShadow: "2px 2px 2px black", fontSize: "50px", borderRadius:"12px" }}>My Projects</h1>
        
<div className="project"  id='projects'>
         
 

<div className="projectCard">
  <video loop autoPlay controls>
    <source src={boat} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
<h2>🌐preview</h2>
<h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2>
</div>

<h1 className='title'> <img style={{width:"70px", marginRight:"20px"}} src="https://seeklogo.com/images/B/boat-logo-F99CE766FA-seeklogo.com.png"/>(BOAT clone)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}}>
it's a clone of an e-commerce website that is boat ,boat deals with smart life style products and gadgets
</h3>
<h2><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the Home Page and ProductDetails page.</span></h2>
<h2><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h2>
<h2><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 4 members</span></h2>
</div>
</div>


<div className="projectCard">
  <video  autoPlay controls loop>
    <source src={Glosier} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
<h2>🌐preview</h2>
<h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2>
</div>

<h1 className='title'> <img style={{width:"90px", marginRight:"20px"}} src="https://cdn.worldvectorlogo.com/logos/glossier-1.svg"/>(Glossier Clone)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}}>
A beauty website and community devoted to sharing real information with real people, about really amazing products. 
</h3>
<h2><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created ProductDetails page , WishList and Paynment page.</span></h2>
<h2><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h2>
<h2><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 4 members</span></h2>
 </div>
</div>




<div className="projectCard">
  <video loop autoPlay controls>
    <source src={Electron} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
<h2>🌐preview</h2>
<h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2>
</div>

<h1 className='title'> <img style={{width:"90px", marginRight:"20px"}} src={Elogo}/>(Electron)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}}>
It's a replica of an e-commerce platform named Electron, specializing in smart lifestyle products and cutting-edge gadgets. As an emulation, 
</h3>
<h2><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the  ProductDetails page and Product page .</span></h2>
<h2><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h2>
<h2><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 3 members</span></h2>
</div>
</div>

 
<div className="projectCard">
  <video loop autoPlay controls>
    <source src={boat} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
<h2>🌐preview</h2>
<h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width:"20PX"}}/> Github</h2>
</div>

<h1 className='title'> <img style={{width:"70px", marginRight:"20px"}} src="https://seeklogo.com/images/B/boat-logo-F99CE766FA-seeklogo.com.png"/>(BOAT clone)</h1>
<h3 style={{color:"rgb(0, 85, 160)"}}>
it's a clone of an e-commerce website that is boat ,boat deals with smart life style products and gadgets
</h3>
<h3><u>Accountable Area: </u> <span style={{color:"rgb(0, 85, 160)"}}> I've created the Home Page and ProductDetails page.</span></h3>
<h2><u>My role</u> :<span style={{color:"rgb(0, 85, 160)"}}> Team leader</span></h2>
<h2><span style={{color:"rgb(0, 85, 160)"}}>Collabrative project with a team of 4 members</span></h2>
</div>
</div>
        
</div>

        </>
    )}




  export default Project;