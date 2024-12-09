import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import del1 from '../../../assets/del-22-1.jpg';
import del2 from '../../../assets/del-22-2.jpg';
import del3 from '../../../assets/del-22-3.jpg';

const projects = [
    {
        name: 'UTOPIA',
        src: del1 ,
        description: 'Utopia is an online, real-time, 2D arcade-style game made as an orientation event for the freshers of the 2025 batch. Here players can travel around a dream NITT campus along with their friends. \n Tech Stack - React, Typescript, MySQL, sockets, phaser, Go, Docker.',
        link: '#',
    },
    {
        name: 'ATTACK ON ROBOTS',
        src: del2 ,
        description: 'Attack on Robots is a multiplayer resource management game based on strategic city planning. Participants attempt to design safe and secure cities with the available resources and as well as attempt to find weaknesses in other cities and attack them while navigating the player in real time across the city. \n Technologies Used - React, Phaser JS, Rust, Redis, Docker, PostgreSQL',
        link: '#',
    },
    {
        name: 'Pragyan premiere league',
        src: del3 ,
        description: 'Pragyan Premier League, an online fantasy cricket league, is an annual event part of Pragyan, the techno-managerial fest of NIT, Trichy. In the game, users can purchase players and form their own squad of 11 players minimum to take part in real-time simulated matches against other users. They can also play friendly matches against other users which does not affect the leaderboard or their team’s stats. \n It is an 8-day event where each user is matched up against another user each day, and the matches are simulated in real-time, including commentary, at the end of each day. \n Tech Stack: GoLang, Gin Server, React, Redux',
        link: '#',
    }
];

const Delta2022 = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prevIndex) =>
            (prevIndex - 1 + projects.length) % projects.length
        );
    };

    return (
        <div className="project-slider-container">
            <div className="project-title">
                <h1>DELTA 2022</h1>
            </div>
            <div className='row'>
                <button className="slider-button-left" onClick={prevProject}>
                    {'<'}
                </button>
                <div className="project-box">
                    <img className='image-slider'
                        src={projects[currentProject].src}
                        alt={projects[currentProject].name}
                    />
                    <div className='column'>
                        <h2 className="project-name">{projects[currentProject].name}</h2>
                        <div className="project-description">
                            {projects[currentProject].description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="slider-button-right" onClick={nextProject}>
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default Delta2022