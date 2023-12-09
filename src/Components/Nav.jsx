import './nav.css';

// import logo from './ Images/logo1.png'

const NavBar = () => {
  return (
    <section className="top-nav">

      <div>
        {/* Your logo or other content can go here */}
       <img src="https://i.ibb.co/q9MB4fF/logo1.png" alt="logo1" border="0" style={{width:"90px"}} />
       
        {/* <a href="https://ibb.co/vz24s8W"><img src="https://i.ibb.co/q1bY0w8/logo1.jpg" alt="logo1" border="0" style={{width:"80px"}} /></a> */}
      </div>

      <input id="menu-toggle" type="checkbox" />

      <label className='menu-button-container' htmlFor="menu-toggle">
      <div className='menu-button'></div>
      </label>


      <ul className="menu">
      
         <li className="tdn"><a href="#box1">Home</a>  </li>
        <li className="tdn"><a href="#box0"> About</a> </li>
        <li className="tdn"><a href=".techS"> Tech Stack </a></li> 
        {/* <li className="tdn"><Link to="#box1">Home</Link></li>
        <li className="tdn"><Link to="#box0">About</Link></li>
        <li className="tdn"><Link to=".techS">Tech Stack</Link></li> */}
        <li className="tdn"><a href='#project'> Project </a></li>
        <li className="tdn"> <a href="#box4">My Skills </a></li>
        <li className="tdn"><a href="#box5">Contact </a></li>
        <li className="tdn"><a href="#box1" >Resume </a></li>
      </ul>

  <div style={{}}>
     <img src="https://www.svgrepo.com/show/285294/moon-night.svg" style={{width:"50px",  marginRight:"30px", backgroundColor:"" } } />
     </div>
    </section>
  );
};


export default NavBar;