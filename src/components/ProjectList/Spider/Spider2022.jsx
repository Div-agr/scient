import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import spi1 from '../../../assets/spi-22-1.png';
import spi2 from '../../../assets/spi-22-2.png';
import spi3 from '../../../assets/spi-22-3.png';
import spi4 from '../../../assets/spi-22-4.png';

const projects = [
  {
    name: 'SECURISE',
    src: spi1,
    description: "Developed an Automatic Number Plate Recognition System for our college campus that logs entrance and exit of vehicles • Designed a vehicle data extraction pipeline from the ground up, using a FasterRCNN implementation with Resnet101 for vehicle data extraction • Working on implementing a frontend and backend to relay data between the camera and the system.",
    link: '#',
  },
  {
    name: 'RECAL UAE Admin portal',
    src: spi2,
    description: 'Admin Portal for the Alumni Association UAE Chapter. Handles data updation, deletion and provides analytics on the data of RecalUAE.',
    link: '#',
  },
  {
    name: 'Document requisition portal',
    src: spi3,
    description: 'The system aims to provide an easy experience for students to request approval on certificates. A unified portal allows both students and administrators to log in using institute credentials to either send or approve requests. The portal handles all the required student information, forms, and receipts to make the process as streamlined as possible for administrators. Functionality is provided for administrators to approve/reject requests in a single click and view student information and required documents on a single interface.',
    link: '#',
  },
  {
    name: 'Happy hunt challenge',
    src: spi4,
    description: 'Happy Hunt Challenge is a PWA React Application built for a Scavenger Hunt game conducted by Event Specials in Pune. The app has 1500+ users who need to solve missions (clues) scattered all over Pune. The website has two portals, one for the Admin and another for end-users. The admin portal has features like auto evaluation, admin evaluation, adding or updating the missions, feed control, etc. The end-user interface consists of a portal to check clues and submit answers to the clues after reaching a particular location. If their submissions are accepted, then the players are awarded points, and their submissions get auto-posted in the feed, where other players can react to it by liking or sharing. The project uses the MERN stack.',
    link: '#',
  }
];

const Spider2022 = () => {
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
                <h1>SPIDER 2022</h1>
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

export default Spider2022