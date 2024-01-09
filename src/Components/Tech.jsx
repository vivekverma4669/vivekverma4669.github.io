import { useContext } from 'react';
import './tech.css';
import { AuthTheme } from '../AuthThemeProvider';
const Tech = () => {
  const{theme} = useContext(AuthTheme);
    return (
      <div style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'  ,marginTop: "-50px"}}>
     <h1 className='techS' id='techS'  style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)" : '#32de84' ,  textShadow :"2px 2px 2px black", fontSize:"50px", }}><ul>Tech Stack</ul></h1>
  

       <fieldset style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'}}>
       <legend> <h2 style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)": 'rgb(42, 205, 216)',  textShadow :"2px 2px 2px black" ,fontSize:"50px" ,backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'  }} className='stack'>Languages & Skills  </h2></legend>
        <div className="container2" style={{ backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'}}>
        <div className='card'><img src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>HTML</h3></div>
        <div className='card'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817p"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>CSS</h3></div>
        <div className='card'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Java Script</h3></div>
        <div className='card'><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>React</h3></div>
        <div className='card'><img src="https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Java</h3></div>
        <div className='card'><img src="https://www.svgrepo.com/show/439231/mongodb.svg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Mongol DB</h3></div>
        <div className='card'><img src="https://cdn-icons-png.flaticon.com/512/919/919825.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Node js</h3></div>
        <div className='card'><img src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png"/> <h3>Express js</h3></div>
        <div className='card'><img src="https://cdn.iconscout.com/icon/free/png-256/free-redux-3629610-3032308.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Redux</h3></div>
        <div className='card'><img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Boot strap</h3></div>
        <div className='card'><img src="https://www.svgrepo.com/show/354262/react-router.svg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Rauter</h3></div>
        <div className='card'><img src="https://seeklogo.com/images/P/passport-logo-16D89B2F37-seeklogo.com.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Passport Auth</h3></div>
        </div>
        </fieldset>


        <fieldset style={{ backgroundColor : theme=='day'? null : 'rgb(16, 22,34)' }}>
       <legend> <h2 style={{textAlign:"center",  color: theme=='day'? "rgb(0, 85, 169)": 'rgb(42, 205, 216)',  textShadow :"2px 2px 2px black" ,fontSize:"50px"  }} className='stack'>Tools </h2></legend>
        <div className="container2" style={{backgroundColor : theme=='day'? null : 'rgb(16, 22,34)'}} >
        <div className='card'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Git hub</h3></div>
        <div className='card'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}} >Git</h3></div>
        <div className='card'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Chat GPT</h3></div>
        <div className='card'><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netlify_logo_icon_169923.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>netify</h3></div>
        <div className='card'><img src="https://www.svgrepo.com/show/354202/postman-icon.svg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>postman </h3></div>
        <div className='card'><img src="https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Mongol DB</h3></div>
        <div className='card'><img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"/> <h3 style={{color : theme=='day'? 'black' : 'white'}}>Node js</h3></div>
        
        </div>
        </fieldset>

       
       
      </div>
    );
  };
  
  export default Tech;
  