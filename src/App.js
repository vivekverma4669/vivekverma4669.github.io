import './App.css';
import  NavBar from './Components/Nav';
import Name from './Components/Name';
import About from './Components/About';
import Tech from './Components/Tech';
import Project from './Components/project';
import SkillsSection from './Components/skill';
import Contact from './Components/contact';

function App() {
  return (
  <>
    <NavBar/>
    <Name/>
    <About/>
    <Tech/>
    <Project/>
    <SkillsSection/>
    <Contact/>
     </>
  );
}
export default App;