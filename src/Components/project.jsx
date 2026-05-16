import './project.css';
import Glosier from './Videos/glossier.mp4';
import chat from './Videos/chat.mp4';
import Electron from './Videos/Electron.mp4';
import Elogo from './Videos/eLogo.jpg'
import port from './Videos/port.mp4';
import Leo from './Videos/Leo.mp4';
import Sugar from './Videos/Sugar.mp4';
import chess from './Videos/chess.mp4';
import boat from './Videos/Boat.mp4'
import { useContext } from 'react';
import { AuthTheme } from '../AuthThemeProvider';
import { FaGithub } from 'react-icons/fa';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import {
  SiReact, SiJavascript, SiMongodb, SiExpress, SiCss,
  SiRedux, SiHtml5, SiRazorpay, SiFirebase, SiSocketdotio,
} from 'react-icons/si';
import { SiMui } from 'react-icons/si';

const TechIcon = ({ icon: Icon, color, theme }) => (
  <Icon
    size={28}
    color={color}
    style={{ padding: '3px' }}
    title=""
  />
);

const Project = () => {
  const { theme } = useContext(AuthTheme);
  const ghColor = theme === 'day' ? '#111' : '#fff';

  return (
    <div style={{ backgroundColor: theme == 'day' ? null : 'rgb(16, 22,34)', marginTop: '-33px' }}>
      <br />
      <br />
      <h1 id='projects' style={{ textAlign: "center", color: theme == 'day' ? "rgb(0, 85, 169)" : '#32de84', textShadow: "2px 2px 2px black", fontSize: "50px" }}>My Projects</h1>

      <div className="project">

        {/* Leo Bloggers */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={Leo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link' style={{ color: theme == 'day' ? '' : 'silver' }}>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://leo-bliggers.vercel.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/blog-app' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen', display: 'flex', width: 'fit-content', margin: 'auto' }}>
              (Leo Bloogers)
            </h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              Blog app Using MERN Stack, Leo Bloggers is a dynamic platform empowering users to share their insights and stories with ease.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiCss size={28} color="#1572B6" />
            </div>
            <h2 style={{ textAlign: 'center' }}>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Solo Project <PersonIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h2>
          </div>
        </div>

        {/* Sugar Cosmetics */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={Sugar} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://sugar-clone-liard.vercel.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/sugar_clone' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen', display: 'flex', margin: 'auto', width: 'fit-content' }}>
              (Sugar Cosmetics)
            </h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              Sugar Cosmetics is a popular beauty brand known for its diverse range of cruelty-free makeup products.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiRedux size={28} color="#764ABC" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiCss size={28} color="#1572B6" />
            </div>
            <h2 style={{ textAlign: 'center' }}>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Solo Project <PersonIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h2>
          </div>
        </div>

        {/* MERN Chat App */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={chat} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://chat-app-mern-wheat.vercel.app/login' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/chat-app-mern' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>MERN Chat App</h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              Real time chat app built using socket.io — supports file, video, and photo sharing with message timestamps.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiRedux size={28} color="#764ABC" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiMongodb size={28} color="#47A248" />
              <SiExpress size={28} color={ghColor} />
              <SiCss size={28} color="#1572B6" />
              <SiSocketdotio size={28} color={ghColor} />
              <SiMui size={28} color="#007FFF" />
            </div>
            <h2 style={{ textAlign: 'center' }}>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Solo Project <PersonIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h2>
          </div>
        </div>

        {/* Anti Chess */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={chess} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://anti-chess-chi.vercel.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/anti-chess' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>Anti Chess Game</h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              In Anti-chess, the objective is to lose all your pieces or get stalemated, with capturing being mandatory whenever possible.
            </h4>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiRedux size={28} color="#764ABC" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiCss size={28} color="#1572B6" />
            </div>
            <h2 style={{ textAlign: 'center' }}>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Solo Project <PersonIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h2>
          </div>
        </div>

        {/* Glossier Clone */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video autoPlay controls loop>
            <source src={Glosier} type="video/mp4" />
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://delightful-phoenix-888d86.netlify.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/Saurav9284/Unite-5-Project-Female-Beauty-Product-' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>Glossier Clone</h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              A beauty website and community devoted to sharing real information with real people — I built the ProductDetails, WishList, and Payment pages.
            </h4>
            <div className="project-tech-stack">
              <SiHtml5 size={28} color="#E34F26" />
              <SiCss size={28} color="#1572B6" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiRazorpay size={28} color="#2C73C5" />
              <SiFirebase size={28} color="#FFCA28" />
            </div>
            <h4><u style={{ color: theme == 'day' ? '' : 'whitesmoke' }}>My role</u>: <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>Team leader</span></h4>
            <h4>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Collaborative project with a team of 4 members <GroupIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h4>
          </div>
        </div>

        {/* Electron */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={Electron} type="video/mp4" />
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://64dcee8acb8ee428e7b63db9--charming-bienenstitch-d89c77.netlify.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/RajshreeJaiswal/Electron-ecommerce-website' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>
              <img style={{ width: "90px", marginRight: "20px" }} src={Elogo} alt="Electron logo" /> (Electron)
            </h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              Replica of Electron e-commerce — a smart lifestyle & gadgets platform. Built ProductDetails and Product pages.
            </h4>
            <div className="project-tech-stack">
              <SiHtml5 size={28} color="#E34F26" />
              <SiCss size={28} color="#1572B6" />
              <SiJavascript size={28} color="#F7DF1E" />
              <SiRazorpay size={28} color="#2C73C5" />
              <SiFirebase size={28} color="#FFCA28" />
            </div>
            <h3><u style={{ color: theme == 'day' ? '' : 'whitesmoke' }}>My role</u>: <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>Product Manager</span></h3>
            <h3>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Collaborative project with a team of 3 members <GroupIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h3>
          </div>
        </div>

        {/* BOAT Clone */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={boat} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://64b52a5f1165af0f63d1969a--elaborate-paprenjak-06f23e.netlify.app/' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/boat_project_group_7?tab=readme-ov-file' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>(BOAT clone)</h2>
            <h4 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              Clone of the BOAT e-commerce website for smart lifestyle products. Built the Home Page and ProductDetails page.
            </h4>
            <div className="project-tech-stack">
              <SiHtml5 size={28} color="#E34F26" />
              <SiCss size={28} color="#1572B6" />
              <SiJavascript size={28} color="#F7DF1E" />
            </div>
            <h4><u style={{ color: theme == 'day' ? '' : 'whitesmoke' }}>My role</u>: <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>Team leader</span></h4>
            <h4>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Collaborative project with a team of 4 members <GroupIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h4>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project-card" style={{ backgroundColor: theme == 'day' ? null : 'rgb(18, 32, 32)', borderRadius: '10px' }}>
          <video loop autoPlay controls>
            <source src={port} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='des'>
            <div className='link'>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-deployed-link" href='https://vivekverma4669.github.io' target="blank"><h2>🌐 preview</h2></a>
              <a style={{ color: theme == 'day' ? '' : 'whitesmoke' }} className="project-github-link" href='https://github.com/vivekverma4669/vivekverma4669.github.io' target="blank">
                <h2><FaGithub size={20} color={ghColor} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Github</h2>
              </a>
            </div>
            <h2 className='project-title' style={{ color: theme == 'day' ? '' : 'limegreen' }}>My Portfolio</h2>
            <h3 style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }} className="project-description">
              My Portfolio contains information about me — work, education, contributions, and solo projects.
            </h3>
            <div className="project-tech-stack">
              <SiReact size={28} color="#61DAFB" />
              <SiCss size={28} color="#1572B6" />
              <SiJavascript size={28} color="#F7DF1E" />
            </div>
            <h2 style={{ textAlign: 'center' }}>
              <span style={{ color: theme == 'day' ? 'rgb(0, 85, 160)' : 'limegreen' }}>
                Solo Project <PersonIcon style={{ verticalAlign: 'middle', fontSize: '22px' }} />
              </span>
            </h2>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Project;
