import './App.css';
import  NavBar from './Components/Nav';
import Name from './Components/Name';
import About from './Components/About';
import Tech from './Components/Tech';
import Project from './Components/project';
import SkillsSection from './Components/skill';
import Contact from './Components/contact';
import AuthThemeProvider from './AuthThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import AllRoute from './Routes/AllRoutes';

function App() {
  return (
    // <BrowserRouter>
    // <AuthThemeProvider>
    // <NavBar/>
    // <Name/>
    // <About/>
    // <Tech/>
    // <Project/>
    // <SkillsSection/>
    // <Contact/>
    // </AuthThemeProvider>
    // </BrowserRouter>


    <BrowserRouter>
    <AuthThemeProvider>
    <NavBar/>
     <Name/>
    <About/>
    <Tech/>
    <Project/>
    <SkillsSection/>
    <Contact/>  
     
    </AuthThemeProvider>
    </BrowserRouter>
  );
}
export default App;

// for mobile Contact , about , tech complate 