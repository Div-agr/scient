import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import del1 from '../../../assets/del-21-2.jpg';
import del2 from '../../../assets/del-21-3.png';

const projects = [
    {
        name: 'DAuth',
        src: del1 ,
        description: 'DAuth is an OAuth2.0 based SSO (Single Sign On) for NITT students. It serves to replace existing webmail based login and redundant registration. It is more secure and easier to integrate with your services and to use. \n The widespread adoption of DAuth highlights its efficacy and reliability, with every fest, administrative group, department, and community within NITT leveraging its capabilities to authenticate their users. This resounding vote of confidence speaks volumes about DAuth’s impact in simplifying authentication workflows and enhancing user experience across the campus.',
        link: '#',
    },
    {
        name: 'Code character',
        src: del2 ,
        description: 'Code Character is a strategy-based programming game where you control troops in a turn-based game with the code you write in one of the multiple programming languages (C++, Python, Java) available in the game. The objective is to destroy and vanquish the opponent’s territory by writing code and creating defenses via the in-game map. With progress and implementation of new competitive strategies, fight your way through, and dominate the top of the leaderboard. \n You can also participate in the daily challenges that challenge your skills in the game by assigning one challenge per day to be solved. You will be awarded a score based on your performance and will hence place you on the leaderboard which can be checked from the leaderboard page. \n Tech Stack - React, Phaser3, Typescript, Springboot, Kotlin, MongoDB, Rust, C++20, RabbitMQ, Golang, Docker',
        link: '#',
    }
];

const Delta2021 = () => {
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
                <h1>DELTA 2021</h1>
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

export default Delta2021