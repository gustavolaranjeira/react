import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoG from '../../assets/images/logo-g.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/react'>
        <img src={LogoG} alt="logo" />
        <img className='sub-logo' src={LogoSub} alt="Gustavo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/react">
          <FontAwesomeIcon icon={faHome} color="grey" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/react/about">
          <FontAwesomeIcon icon={faUser} color="grey" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/react/contact">
          <FontAwesomeIcon icon={faEnvelope} color="grey" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="norefferer noreferrer" href='https://www.linkedin.com'>
            <FontAwesomeIcon icon={faLinkedin} color="grey" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="norefferer noreferrer" href='https://www.github.com'>
            <FontAwesomeIcon icon={faGithub} color="grey" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="norefferer noreferrer" href='https://www.youtube.com'>
            <FontAwesomeIcon icon={faYoutube} color="grey" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="norefferer noreferrer" href='https://www.skype.com'>
            <FontAwesomeIcon icon={faSkype} color="grey" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;