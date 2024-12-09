import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import dc1 from '../../../assets/dc-23-1.png';
import dc2 from '../../../assets/dc-23-2.png';
import dc3 from '../../../assets/dc-23-3.png';
import dc4 from '../../../assets/dc-23-4.png';

const projects = [
    {
        name: 'The fource',
        src: dc1,
        description: 'An economical and easy-to-use cleansing system to maintain the hygiene level of toilets. The device cleans the bowl and surroundings with minimal human intervention.',
        link: '#',
    },
    {
        name: 'Bolts of duty',
        src: dc2 ,
        description: 'An autonomous landscaping device that adjusts blades according to terrain and collects scrap in a disposable bag.',
        link: '#',
    },
    {
        name: 'ATOM',
        src: dc3 ,
        description: 'An efficient and cost-effective unmanned delivery system capable of transporting goods and services to hostels and other departments in an institute to streamline the process of delivery of such goods and services.',
        link: '#',
    },
    {
        name: 'Trichy drifters',
        src: dc4 ,
        description: 'Ideation, design, and fabrication of a robust remote-controlled hovercraft capable of climbing a ramp of 20 deg incline. It also had a ball-picking mechanism retrofitted onto it to pick and drop objects.',
        link: '#',
    }
];

const DC2023 = () => {
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
                <h1>DC 2023</h1>
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

export default DC2023