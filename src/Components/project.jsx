import './project.css';
import Glosier from './Videos/glossier.mp4';
import boat from './Videos/Boat.mp4';
import Electron from './Videos/Electron.mp4';
import Elogo from './Videos/eLogo.jpg'
import port from './Videos/port.mp4';
import Leo from './Videos/Leo.mp4';
import Sugar from './Videos/Sugar.mp4';
import { useContext } from 'react';
import { AuthTheme } from '../AuthThemeProvider';

const Project = () => {
  const {theme} = useContext(AuthTheme);
    return (

<div  style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)' , marginTop:'-33px'}} >
<br/>
<br/>
<h1  id='projects'style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)" : '#32de84' ,  textShadow :"2px 2px 2px black", fontSize:"50px", }}>My Projects</h1>




<div className="project">

<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video loop autoPlay controls >
    <source src={Leo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link' style={{color : theme=='day'? '' : 'silver'}}>
 <a style={{color : theme=='day'? '' : 'whitesmoke'}}  className="project-deployed-link" href='https://leo-blog-nw15zs41q-vivek-vermas-projects.vercel.app/login' target="blank" ><h2>🌐preview </h2></a>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/vivekverma4669/blog-app' target="blank" > <h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX" , width: '20px'}}/> Github</h2></a>
</div>

<h2 className='project-title' style={{color : theme=='day'? '' : 'limegreen' , display :'flex', width :'fit-content' , margin :'auto'}}> <img style={{width:"50px", marginRight:"20px" }} src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"/>(Leo Bloogers)</h2>
<h4 style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}className="project-description">
Blog app Using MERN Stack , Leo Bloggers is a dynamic platform empowering users to share their insights and stories with ease.

</h4>
<div className="project-tech-stack">

  <img src='https://cdn.worldvectorlogo.com/logos/react-1.svg'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
  <img src='https://www.svgrepo.com/show/439231/mongodb.svg'/>
  <img src='https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png' style={{filter : theme=='day'? 'inherit' : "invert()" }}/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
 
  
</div>


{/* <h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >Accountable Area: </u> <span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> I've created the Home Page and ProductDetails page.</span></h4>
<h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >My role</u> :<span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> Team leader</span></h4> */}
<h2 style={{textAlign :'center'}}> <span style={{color: theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}>Solo Project  <img src='https://static.thenounproject.com/png/4311433-200.png' width="20px"   style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h2>
</div>
</div>


<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video loop autoPlay controls >
    <source src={Sugar} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}}  className="project-deployed-link" href='https://sugar-steel.vercel.app/' target="blank" ><h2>🌐preview </h2></a>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/vivekverma4669/sugar_clone' target="blank"> <h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX" , width: '20px'}}/> Github</h2></a>
</div>

<h2 className='project-title' style={{color : theme=='day'? '' : 'limegreen' , display :'flex' , margin:'auto',  width: 'fit-content',}}> <img style={{width:"100px" ,    filter : theme== 'day'? 'inherit' : 'invert()' , marginTop :'-10px'}} src="https://1000logos.net/wp-content/uploads/2021/05/SUGAR-Cosmetics-logo.png" />(Sugar Cosmetics)</h2>

<h4 style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}className="project-description">
Sugar Cosmetics is a popular beauty brand known for its diverse range of cruelty-free makeup products
</h4>
<div className="project-tech-stack">

<img src='https://cdn.worldvectorlogo.com/logos/react-1.svg'/>
  <img src='https://cdn.iconscout.com/icon/free/png-256/free-redux-3629610-3032308.png' style={{filter : theme=='day'? 'inherit' : "invert()" }}/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'  />
  <img src='https://www.svgrepo.com/show/439231/mongodb.svg'/>
  <img src='https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png' style={{filter : theme=='day'? 'inherit' : "invert()" }}/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
</div>

{/* 
<h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >Accountable Area: </u> <span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> I've created the Home Page and ProductDetails page.</span></h4>
<h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >My role</u> :<span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> Team leader</span></h4> */}
<h2 style={{textAlign :'center'}}> <span style={{color: theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}>Solo Project  <img src='https://static.thenounproject.com/png/4311433-200.png' width="20px"   style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h2>
</div>
</div>


<div className="project-card" style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video  autoPlay controls loop>
    <source src={Glosier} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
<a style={{color : theme=='day'? '' : 'whitesmoke'}}  className="project-deployed-link"  href='https://delightful-phoenix-888d86.netlify.app/' target="blank" ><h2>🌐preview</h2></a>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/Saurav9284/Unite-5-Project-Female-Beauty-Product-'  target="blank"><h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{filter : theme=='day'? 'inherit' : "invert()" , width: '20px'}}/> Github</h2></a>
</div>

<h2 className='project-title' style={{color : theme=='day'? '' : 'limegreen'}}> <img style={{width:"90px", marginRight:"20px" ,  filter : theme== 'day'? 'inherit' : 'invert()'}} src="https://cdn.worldvectorlogo.com/logos/glossier-1.svg"/>(Glossier Clone)</h2>
<h4   style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} className="project-description">
A beauty website and community devoted to sharing real information with real people, about really amazing products  ,  I've created ProductDetails page , WishList and Paynment page.
</h4>

<div className="project-tech-stack">

<img src='https://cdn-icons-png.flaticon.com/512/732/732212.png'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
 <img src='https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg'/>
<img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'/>
 {/* <img src=''/>   */}
</div>

{/* <h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >Accountable Area: </u> <span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} > I've created ProductDetails page , WishList and Paynment page.</span></h4> */}
<h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >My role</u> :<span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} > Team leader</span></h4>
<h4><span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} >Collabrative project with a team of 4 members   <img src='https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png' width='30px'   style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h4>
 </div>
</div>








<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video loop autoPlay controls>
    <source src={Electron} type="video/mp4" />
   
  </video>
<div className='des'>
<div className='link'>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-deployed-link" href='https://64dcee8acb8ee428e7b63db9--charming-bienenstitch-d89c77.netlify.app/'  target="blank"><h2>🌐preview</h2></a>
 <a style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/RajshreeJaiswal/Electron-ecommerce-website'  target="blank"><h2><img  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX" , width: '20px'}} src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/> Github</h2></a>
</div>

<h2 className='project-title'  style={{color : theme=='day'? '' : 'limegreen'}}> <img style={{width:"90px", marginRight:"20px"}} src={Elogo}/>(Electron)</h2>
<h4 style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} className="project-description">
It's a replica of an e-commerce platform named Electron, specializing in smart lifestyle products and cutting-edge gadgets. As an emulation, 
I've created the  ProductDetails page and Product page .
</h4>

<div className="project-tech-stack">

<img src='https://cdn-icons-png.flaticon.com/512/732/732212.png'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
 <img src='https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg'/>
<img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'/>
 {/* <img src=''/>   */}
</div>
{/* <h3><u style={{ color : theme=='day'? '' : 'whitesmoke'}} > Accountable Area: </u> <span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> .</span></h3> */}
<h3><u style={{ color : theme=='day'? '' : 'whitesmoke'}}>My role</u> :<span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> Product Manager</span></h3>
<h3><span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}>Collabrative project with a team of 3 members  <img src='https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png' width='30px'  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h3>
</div>
</div>


<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video loop autoPlay controls >
    <source src={boat} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des'>
<div className='link'>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-deployed-link" href='https://64b52a5f1165af0f63d1969a--elaborate-paprenjak-06f23e.netlify.app/' target="blank" ><h2>🌐preview </h2></a>
 <a style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/vivekverma4669/boat_project_group_7?tab=readme-ov-file'  target="blank"> <h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX" , width: '20px'}}/> Github</h2></a>
</div>

<h2 className='project-title' style={{color : theme=='day'? '' : 'limegreen'}}> <img style={{width:"70px", marginRight:"20px" ,  filter : theme== 'day'? 'inherit' : 'invert()'}} src="https://seeklogo.com/images/B/boat-logo-F99CE766FA-seeklogo.com.png"/>(BOAT clone)</h2>
<h4 style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}className="project-description">
it's a clone of an e-commerce website that is boat ,boat deals with smart life style products and gadgets ,  I've created the Home Page and ProductDetails page .
</h4>
<div className="project-tech-stack">

  <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
  
</div>


{/* <h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >Accountable Area: </u> <span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> I've created the Home Page and ProductDetails page.</span></h4> */}
<h4><u style={{ color : theme=='day'? '' : 'whitesmoke'}} >My role</u> :<span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> Team leader</span></h4>
<h4><span style={{color : theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}> Collabrative project with a team of 4 members  <img src='https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png' width='30px'  style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h4>
</div>
</div>


 

<div className="project-card"  style={{backgroundColor : theme=='day'? null : 'rgb(18, 32, 32)' , borderRadius: '10px' }}>
  <video loop autoPlay controls>
    <source src={port} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='des' >
<div className='link'>
 <a  style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-deployed-link" href='https://vivekverma4669.github.io'  target="blank"> <h2>🌐preview</h2></a>
<a   style={{color : theme=='day'? '' : 'whitesmoke'}} className="project-github-link" href='https://github.com/vivekverma4669/vivekverma4669.github.io'  target="blank"><h2><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'   style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/> Github</h2></a>
</div>

<h2 className='project-title' style={{color : theme=='day'? '' : 'limegreen'}}> My portfolio</h2>
<h3  style={{color: theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}} className="project-description"> My Portfolio it contains Information about Me. You can see  My Work , Education and  Contributions or solo projects here .
</h3>

<div className="project-tech-stack">

<img src='https://cdn.worldvectorlogo.com/logos/react-1.svg'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p'/> 
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
  <img src='https://www.svgrepo.com/show/354262/react-router.svg'/>   
</div>

{/* <h3><u  style={{ color : theme=='day'? '' : 'whitesmoke'}}>Accountable Area:  </u> <span style={{color: theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}>   I've created the whole website from scracth</span></h3> */}
<h2 style={{textAlign :'center'}}> <span style={{color: theme=='day'? 'rgb(0, 85, 160)' : 'limegreen'}}>Solo Project  <img src='https://static.thenounproject.com/png/4311433-200.png' width="20px"   style={{filter : theme=='day'? 'inherit' : "invert()" , width:"20PX"}}/></span></h2>
</div>
</div>
        
</div>
{

}


 </div>
    )}




  export default Project;





