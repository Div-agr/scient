import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import dc1 from '../../../assets/dc-24-1.png';
import dc2 from '../../../assets/dc-24-2.png';
import dc3 from '../../../assets/dc-24-3.png';
import dc4 from '../../../assets/dc-24-4.png';

import dc1_23 from '../../../assets/dc-23-1.png';
import dc2_23 from '../../../assets/dc-23-2.png';
import dc3_23 from '../../../assets/dc-23-3.png';
import dc4_23 from '../../../assets/dc-23-4.png';

import dc1_22 from '../../../assets/dc-22-1.png';
import dc2_22 from '../../../assets/dc-22-2.png';
import dc3_22 from '../../../assets/dc-22-3.png';

import { dc } from '../../../assets';

const projects22 = [
    {
        name: 'WALL-E',
        src: dc1_22,
        description: 'Our product is a station-based device with has 2 arms on each side which are controlled by 3 motors with encoders. The assembly translates along a lead screw. It is capable of doing a variety of exercises including active and passive exercises. The exercises are regulated using an Arduino Mega unit. \n WALL-E is a one-of-a-kind product in the market. There is no limitation on the age of the user. It can be coded to have various different types of exercise. Also, it can be used independently by the user without any need for external supervision.',
        link: '#',
    },
    {
        name: 'AUTOCATH',
        src: dc2_22 ,
        description: 'Our device consists of a pinching valve mechanism which closes and opens the valve based on the pressure measurement of urine in the bladder through a specialised pressure sensor. Some of the major advantages of this product are its retrofit abilities in the existing catheter system and longer uses. Moreover, this device doesn’t need any human intervention which is a major concern with the existing devices.',
        link: '#',
    },
    {
        name: 'RAMP',
        src: dc3_22 ,
        description: 'Presenting to you, Retro-Ramp, a low-cost, low effort device for wheelchair users to climb staircases conveniently and effortlessly. Retro-Ramp achieves ascent and descent with the help of a foldable platform, mounted on a set of railings and pulled by a motor-driven chain hoist. The device can be easily retrofitted in existing buildings and public places and can be easily accessed by wheelchair, thus empowering them to move independently and confidently',
        link: '#',
    }
];

const projects23 = [
    {
        name: 'The fource',
        src: dc1_23,
        description: 'An economical and easy-to-use cleansing system to maintain the hygiene level of toilets. The device cleans the bowl and surroundings with minimal human intervention.',
        link: '#',
    },
    {
        name: 'Bolts of duty',
        src: dc2_23 ,
        description: 'An autonomous landscaping device that adjusts blades according to terrain and collects scrap in a disposable bag.',
        link: '#',
    },
    {
        name: 'ATOM',
        src: dc3_23 ,
        description: 'An efficient and cost-effective unmanned delivery system capable of transporting goods and services to hostels and other departments in an institute to streamline the process of delivery of such goods and services.',
        link: '#',
    },
    {
        name: 'Trichy drifters',
        src: dc4_23 ,
        description: 'Ideation, design, and fabrication of a robust remote-controlled hovercraft capable of climbing a ramp of 20 deg incline. It also had a ball-picking mechanism retrofitted onto it to pick and drop objects.',
        link: '#',
    }
];


const projects24 = [
    {
        name: 'Ioniflow',
        src: dc1,
        description: 'Ioniflow is a novel EV battery thermal management solution that optimizes performance and lifetime by leveraging an emerging cooling technology.',
        link: '#',
    },
    {
        name: 'LeProC',
        src: dc2 ,
        description: 'Designed with precision grooves and fortified with surface treatments, our clamp for radiator to engine pipes ensures secure locking mechanisms for advanced reliability.',
        link: '#',
    },
    {
        name: 'Neogenesis',
        src: dc3 ,
        description: 'It aims to capture excess carbon emissions from air in urban areas. It uses Selective Pressure Swing Adsorption.',
        link: '#',
    },
    {
        name: 'REC-Tube',
        src: dc4 ,
        description: 'It is a semi automated rubber recycling machine that transformers discarded bicycle inner tubes into practical products such as pouches.',
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
    2024: projects24,
    2022: projects22,
};

function DC2024() {
    const [year, setYear] = useState('2024'); 
    const [currentProject, setCurrentProject] = useState(allProjects[2024][0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showYearSelector, setShowYearSelector] = useState(false);
  
    const projectData = allProjects[year];
  
    const nextProject = () => {
      const nextIndex = (currentIndex + 1) % projectData.length;
      setCurrentIndex(nextIndex);
      setCurrentProject(projectData[nextIndex]);
    };
  
    const prevProject = () => {
      const prevIndex = (currentIndex - 1 + projectData.length) % projectData.length;
      setCurrentIndex(prevIndex);
      setCurrentProject(projectData[prevIndex]);
    };
  
    const changeYear = (selectedYear) => {
      setYear(selectedYear);
      setCurrentIndex(0);
      setCurrentProject(allProjects[selectedYear][0]);
      setShowYearSelector(false);
    };
  
    return (
      <div className="project-slider-container">
        <div className="project-title">
          <img className="image-slider h-[100px] w-[100px]" src={dc} alt="Club Logo" />
          <h1>DC</h1>
        </div>
  
        <div className="row">
          <div className="flex justify-center">
            <button
              className="bg- bordergrey-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
              onClick={() => changeYear('2024')}
            >
              2024
            </button>
  
            <button
              onClick={() => changeYear('2023')}
              className="bg-grey border-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
            >
              2023
            </button>
  
            {/* Button to open the year selector dropdown */}
            <button
              className="bg-grey border-[solid_2px_black] text-blue h-[40px] w-[150px] m-5 rounded-lg"
              onClick={() => setShowYearSelector(!showYearSelector)}
            >
              All Years
            </button>
          </div>
        </div>
  
        {/* Dropdown or modal for year selection */}
        {showYearSelector && (
          <div className="year-selector">
            {Object.keys(allProjects).map((yearOption) => (
              <button
                key={yearOption}
                onClick={() => changeYear(yearOption)}
                className="bg-gray-200 text-blue h-[40px] w-[80px] m-2 rounded-lg"
              >
                {yearOption}
              </button>
            ))}
          </div>
        )}
  
        <div className="project-box">
          <button className="slider-button-left" onClick={prevProject}>
            {'<'}
          </button>
  
          <img className="image-slider" src={currentProject.src} alt={currentProject.name} />
          
          <div className="column">
            <h2 className="project-name">{currentProject.name}</h2>
            <div className="project-description">
              {currentProject.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
  
          <button className="slider-button-right" onClick={nextProject}>
            {'>'}
          </button>
        </div>
      </div>
    );
  }

export default DC2024