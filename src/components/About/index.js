import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'; // Make sure these imports are correct
import './index.scss';

// Example imports of SVG icons (adjust paths as necessary)
import LinuxIcon from '../../assets/Linux.svg';
import DockerIcon from '../../assets/Docker.svg';
import AnsibleIcon from '../../assets/Ansible.svg';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Strong background in Linux administration, ensuring seamless connectivity and performance. Dedicated to maintaining system integrity, implementing best practices, and providing prompt technical support.
          </p>
          <p align="LEFT">
            I'm a team player who values open communication and leverages diverse talents.
          </p>
          <p>
            I bring adaptability, creativity, and strong problem-solving skills to the table. As a collaborative team player, I communicate effectively, manage time efficiently, and pay meticulous attention to detail.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={LinuxIcon} alt="Linux Icon" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <img src={DockerIcon} alt="Docker Icon" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <img src={AnsibleIcon} alt="Ansible Icon" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
