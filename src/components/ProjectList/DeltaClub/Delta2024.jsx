import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import del1 from '../../../assets/del-24-1.png';
import del2 from '../../../assets/del-24-2.jpg';

import del1_23 from '../../../assets/del-23-1.png';
import del2_23 from '../../../assets/del-23-2.png';
import del3_23 from '../../../assets/del-23-3.png';
import del4_23 from '../../../assets/del-23-4.jpg';

import del1_22 from '../../../assets/del-22-1.jpg';
import del2_22 from '../../../assets/del-22-2.jpg';
import del3_22 from '../../../assets/del-22-3.jpg';

import del1_21 from '../../../assets/del-21-2.jpg';
import del2_21 from '../../../assets/del-21-3.png';

import { delta } from '../../../assets';

const projects21 = [
    {
        name: 'DAuth',
        src: del1_21 ,
        description: 'DAuth is an OAuth2.0 based SSO (Single Sign On) for NITT students. It serves to replace existing webmail based login and redundant registration. It is more secure and easier to integrate with your services and to use. \n The widespread adoption of DAuth highlights its efficacy and reliability, with every fest, administrative group, department, and community within NITT leveraging its capabilities to authenticate their users. This resounding vote of confidence speaks volumes about DAuth’s impact in simplifying authentication workflows and enhancing user experience across the campus.',
        link: '#',
    },
    {
        name: 'Code character',
        src: del2_21 ,
        description: 'Code Character is a strategy-based programming game where you control troops in a turn-based game with the code you write in one of the multiple programming languages (C++, Python, Java) available in the game. The objective is to destroy and vanquish the opponent’s territory by writing code and creating defenses via the in-game map. With progress and implementation of new competitive strategies, fight your way through, and dominate the top of the leaderboard. \n You can also participate in the daily challenges that challenge your skills in the game by assigning one challenge per day to be solved. You will be awarded a score based on your performance and will hence place you on the leaderboard which can be checked from the leaderboard page. \n Tech Stack - React, Phaser3, Typescript, Springboot, Kotlin, MongoDB, Rust, C++20, RabbitMQ, Golang, Docker',
        link: '#',
    }
];

const projects22 = [
    {
        name: 'UTOPIA',
        src: del1_22 ,
        description: 'Utopia is an online, real-time, 2D arcade-style game made as an orientation event for the freshers of the 2025 batch. Here players can travel around a dream NITT campus along with their friends. \n Tech Stack - React, Typescript, MySQL, sockets, phaser, Go, Docker.',
        link: '#',
    },
    {
        name: 'ATTACK ON ROBOTS',
        src: del2_22 ,
        description: 'Attack on Robots is a multiplayer resource management game based on strategic city planning. Participants attempt to design safe and secure cities with the available resources and as well as attempt to find weaknesses in other cities and attack them while navigating the player in real time across the city. \n Technologies Used - React, Phaser JS, Rust, Redis, Docker, PostgreSQL',
        link: '#',
    },
    {
        name: 'Pragyan premiere league',
        src: del3_22 ,
        description: 'Pragyan Premier League, an online fantasy cricket league, is an annual event part of Pragyan, the techno-managerial fest of NIT, Trichy. In the game, users can purchase players and form their own squad of 11 players minimum to take part in real-time simulated matches against other users. They can also play friendly matches against other users which does not affect the leaderboard or their team’s stats. \n It is an 8-day event where each user is matched up against another user each day, and the matches are simulated in real-time, including commentary, at the end of each day. \n Tech Stack: GoLang, Gin Server, React, Redux',
        link: '#',
    }
];

const projects23 = [
    {
        name: 'Pragyan - 2024',
        src: del1_23 ,
        description: 'The Pragyan Web-Ops Team ( Delta ) acts as the technical backbone, overseeing the development of the official website, app, and other fest-related sites, alongside proficiently managing servers and providing support for the fest’s backend technology. Delta Force also hosts its flagship games as events for the fest. \n Sites under Pragyan - Pragyan Campus Ambassador site, Pragyan T-shirt registration site, Pragyan Main Site, InHoTT Site, Sangam Site, Ingenium Site, Hackathon Site. \n Tech Stack - NextJS, React, Strapi (CMS), PHP, TypeScript, Docker, Mantine UI, Tailwind CSS.',
        link: '#',
    },
    {
        name: 'Festember - 2023',
        src: del2_23 ,
        description: 'The Festember Web-Ops Team ( Delta ) acts as the technical backbone, overseeing the development of the official website, app, and other fest-related sites, alongside proficiently managing servers and providing support for the fest’s backend technology. \n Sites under Festember - Inductions website, Festember Campus Ambassador site, Festember T-shirt registration site, Festember Main Site, Festember App, FestAPI - One stop api for all fest, FestAdmin - Admin Interface for fest organizers. \n Tech Stack - React, Payload (CMS), Kotlin, Docker, Typescript, Mantine UI, Tailwind CSS.',
        link: '#',
    },
    {
        name: 'Arcadia',
        src: del3_23 ,
        description: 'Arcadia: Rivals is a strategy-based game where you collect powerful mini-conquerors known as minicons and challenge opponents. Explore regions, collect minicons with unique abilities, place them strategically on your lineup and engage in epic one-on-one battles to gain as many trophies as possible to conquer the world of Arcadia. \n Tech Stack - Phaser3, React, TypeScript, Gin, Golang, Redis, MySQL, Docker.',
        link: '#',
    },
    {
        name: 'Dpay',
        src: del4_23 ,
        description: 'DPay redefines the festival experience by offering students a seamless and hassle-free payment solution. With just a few taps on their mobile devices, students can effortlessly settle their purchases at festival stalls. \n One of the key strengths of DPay lies in its robust security measures and scalable infrastructure. With over 10,000 daily active users and transactions amounting to lakhs of rupees, ensuring the security and scalability of the platform was a monumental challenge, one that we tackled through advanced scalability strategies, stringent authentication mechanisms, and continuous monitoring.',
        link: '#',
    }
];

const projects24 = [
    {
        name: 'Time warp',
        src: del1 ,
        description: 'In a fractured cosmos, the Dimensional Traveler Ace emerges to address the imminent collapse of time, a perilous circumstance threatening chaos. Heeding the call of the Warp, Ace embarks on a rigorous quest to gather essential dimensional energy and prevent the unraveling of reality. Through adept manipulation of time and space, he navigates puzzles spanning ages, inching closer to restoring equilibrium and averting cataclysm. Welcome to TimeWarp, where civilization’s fate rests in your hands. Join the journey and act swiftly. \n Tech stack - React, Phaser3, Typescript, MantineUI, TailwindCSS, Spring boot (kotlin), MongoDB.',
        link: '#',
    },
    {
        name: 'AR hunt',
        src: del2 ,
        description: 'AR Hunt is an Augmented Reality based Android treasure hunt game that enables freshers to explore the campus by solving clues and crossing a variable set of checkpoints to discover AR objects within a time constraint. \n Tech stack - Jetpack compose, Kotlin, Golang, MySQL, ARcore, Docker.',
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
    2024: projects24,
    2022: projects22,
    2021: projects21
};

function Delta2024() {
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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      const nextImageIndex = (currentImageIndex + 1) % currentProject.images.length;
      setCurrentImageIndex(nextImageIndex);
    };
  
    const prevImage = () => {
      const prevImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
      setCurrentImageIndex(prevImageIndex);
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
          <img className="image-slider h-[100px] w-[100px]" src={delta} alt="Club Logo" />
          <h1>DELTA</h1>
        </div>
  
        <div className="row">
          <div className="grid grid-cols-3">
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
          <button className="inner-slider-button-left" onClick={prevImage}>{"<"}</button>
          <button className="inner-slider-button-right" onClick={nextImage}>{">"}</button>
          
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
  
export default Delta2024