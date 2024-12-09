import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import rmi1 from '../../../assets/20-1.png';
import rmi2 from '../../../assets/20-2.png';
import rmi3 from '../../../assets/20-3.png';

const projects = [
    {
        name: 'Automated Trolley',
        src: rmi1 ,
        description: 'The availability of trolleys at the right place in airports and shopping centres is a big concern for authorities today. It often requires a substantial human force and energy to have a smooth running system at all times. \n The automated trolley is a computerised system that returns to its parking point without any human intervention after being used by a customer. This project involves a tensor-based approach with machine learning to predict and track population in an indoor environment to detect locations with lesser population densities across space and time to achieve a more reliable navigation mechanism in a dynamic environment like an airport. \n A bird-eye camera is used both during the offline (data collection) and online phases to obtain population distribution at a particular instant in time.',
        link: '#',
    },
    {
        name: 'CHAOS (Crop Harvesting Automated and Optimal Solution)',
        src: rmi2 ,
        description: 'Automation is an important current trend and development in the field of agriculture. Like the manufacturing industry, agriculture also involves routine and monotonous tasks. \n CHAOS is an intelligent and efficient robotic system that uses a camera feed to identify ripe crops using Image Processing algorithms. A Robotic manipulator (4DOF) with a soft gripper as its end effector is then used to pluck the crop using Inverse Kinematics.',
        link: '#',
    },
    {
        name: 'HIDQ (Hybrid Inspection Drive Quadcopter)',
        src: rmi3 ,
        description: 'This project focuses on building an efficient and innovative solution to this inspection problem. A convertible hybrid drive quadcopter is manually controlled to move across inaccessible places as a drone or a 4-wheeler convertible using a self-transforming mechanism. It is equipped with a camera to inspect various industrial systems and check for defects and anomalies using Machine Learning and Image Processing algorithms on the controller side. BLDC motors are used to power both the wheels and the propellers in each mode. \n Variable sprawl angles using self-locking gears are put to use to change the dimension of the bot to the required arena/space. Automated crack and rust detection is also performed using integrated Image processing and Deep Learning using Convolutional Neural Networks. \n The convertible bot can be used to inspect various systems of industries like a chimney, ventilation systems, HVAC, pressurized tanks, boilers, or any confined space to detect leakage, corrosion, cracks and other structural defects and anomalies.',
        link: '#',
    }
];

const RMI2020 = () => {
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
                <h1>RMI 2020</h1>
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

export default RMI2020