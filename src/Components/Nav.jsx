import './nav.css';

// import logo from './ Images/logo1.png'

const NavBar = () => {


function changeTheme(){
alert("i am working on it using context  API")
}

  return (
    <section className="top-nav"  id="nav-menu">
{/* 
      <div>
       <img src="https://i.ibb.co/q9MB4fF/logo1.png" alt="logo1" border="0" style={{width:"90px"}} />
      </div> */}

      <input id="menu-toggle" type="checkbox" />

      <label className='menu-button-container' htmlFor="menu-toggle">
      <div className='menu-button'></div>
      </label>


        <ul className="menu">
        <li className="tdn"><a href="#home">Home</a>  </li>
        <li className="tdn"><a href="#about"> About</a> </li>
        <li className="tdn"><a href="#techS"> Tech Stack </a></li> 
        <li className="tdn"><a href='#projects'> Project </a></li>
        <li className="tdn"> <a href="#skill">My Skills </a></li>
        <li className="tdn"><a href="#contact">Contact </a></li>
        <li className="tdn"><a href="#home" >Resume </a></li>
        </ul>
        

  <div style={{}}>
     <img onClick={changeTheme} src="https://www.svgrepo.com/show/285294/moon-night.svg" style={{width:"50px",  marginRight:"30px", backgroundColor:"" } } />

     </div>
    </section>
  );
};


export default NavBar;