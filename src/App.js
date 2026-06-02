import './App.css';
import NavBar from './Components/Nav';
import Name from './Components/Name';
import About from './Components/About';
import Experience from './Components/Experience';
import Tech from './Components/Tech';
import Project from './Components/project';
import SkillsSection from './Components/skill';
import Contact from './Components/contact';
import AuthThemeProvider from './AuthThemeProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthThemeProvider>
        <NavBar />
        <Name />
        <About />
        <Experience />
        <Tech />
        <Project />
        <SkillsSection />
        <Contact />
      </AuthThemeProvider>
    </BrowserRouter>
  );
}
export default App;
