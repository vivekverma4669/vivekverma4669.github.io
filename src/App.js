import './App.css';
import NavBar from './Components/Nav';
import Name from './Components/Name';
import About from './Components/About';
import Experience from './Components/Experience';
import Tech from './Components/Tech';
import Project from './Components/project';
import SkillsSection from './Components/skill';
import Contact from './Components/contact';
import ScrollProgress from './Components/ScrollProgress';
import ScrollToTop from './Components/ScrollToTop';
import AuthThemeProvider from './AuthThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import useScrollReveal from './useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <AuthThemeProvider>
        <ScrollProgress />
        <NavBar />
        <Name />
        <About />
        <Experience />
        <Tech />
        <Project />
        <SkillsSection />
        <Contact />
        <ScrollToTop />
      </AuthThemeProvider>
    </BrowserRouter>
  );
}
export default App;
