import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import spi1 from '../../../assets/spi-23-1.png';
import spi2 from '../../../assets/spi-23-2.png';
import spi3 from '../../../assets/spi-23-3.png';
import spi4 from '../../../assets/spi-23-4.png';

const projects = [
  {
    name: 'WatchTower',
    src: spi1,
    description: "Watch Tower is an immersive open-world game designed to promote cyber-hygiene. Participants explore NITT's campus and complete tasks that teach real-life cyber-attacks and hone their security skills. Watch Tower was part of Bytehoc cluster in Pragyan '23.",
    link: '#',
  },
  {
    name: 'Gym and pool registration',
    src: spi2,
    description: 'This is a web project that aims to simplify the registration process for the techno gym and the swimming pool. The project allows students to choose their preferred option, and the allocation is done in real-time. The project also includes an admin panel where the Sports Council can manage the slots, including creating, editing, and deleting them.',
    link: '#',
  },
  {
    name: 'Autonomous drone navigation',
    src: spi3,
    description: 'This project focuses on the development of an advanced autonomous drone navigation system using ArUco markers. By combining computer vision, machine learning, and drone technology, we have created a groundbreaking system that provides precise positioning even in challenging environments. This innovation holds significant potential for various industries, including surveillance and search-and-rescue missions.',
    link: '#',
  },
  {
    name: 'sportsfete',
    src: spi4,
    description: 'A web project for Sportsfete, an intra-college sports fest where various departments participate to win the overall title. The website provides information about the Sportsfete team, and users can register for the marathon event. The website also displays the leaderboard and event details, and users can predict the winner of each match.',
    link: '#',
  }
];

const Spider2023 = () => {
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
                <h1>SPIDER 2023</h1>
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
};

export default Spider2023;
