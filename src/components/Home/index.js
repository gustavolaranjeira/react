import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from "../../assets/images/logo-g.png"
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
  const nameArray = ['u', 's', 't', 'a', 'v', 'o'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={'text-animate-hover'}>H</span>
            <span className={`${'text-animate-hover'} _12`}>i</span>
            <span className={`${'text-animate-hover'} _13`}>,</span>
            <br />
            <span className={`${'text-animate-hover'} _14`}>I</span>
            <span className={`${'text-animate-hover'} _15`}>'</span>
            <span className={`${'text-animate-hover'} _16`}>m</span>
            <img
              src={LogoTitle}
              alt="Web Developer Name"
            />
            <AnimatedLetters
              letterClass={'text-animate-hover'}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={'text-animate-hover'}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/react/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home;