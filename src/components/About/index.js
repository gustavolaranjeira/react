import {
  faAngular,
  faAws,
  faGitAlt,
  faJava,
  faNode,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={'text-animate-hover'}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Over a 5-year career in tech, working in
            Brazil and a small period in Australia, I have
            played an essential role in developing and
            improving a wide range of systems and
            services across different industries and
            business models.
          </p>
          <p>
            From developing front-end to back-end systems.
            The motto that has driven my work all these
            years in tech hasn't changed: Always be
            open to learning, listening and sharing
            with the team.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#e01e23" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#232d3b" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#00ccf2" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#62965e" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#e74b27" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About