import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import dc1 from '../../../assets/dc-22-1.png';
import dc2 from '../../../assets/dc-22-2.png';
import dc3 from '../../../assets/dc-22-3.png';

const projects = [
    {
        name: 'WALL-E',
        src: dc1,
        description: 'Our product is a station-based device with has 2 arms on each side which are controlled by 3 motors with encoders. The assembly translates along a lead screw. It is capable of doing a variety of exercises including active and passive exercises. The exercises are regulated using an Arduino Mega unit. \n WALL-E is a one-of-a-kind product in the market. There is no limitation on the age of the user. It can be coded to have various different types of exercise. Also, it can be used independently by the user without any need for external supervision.',
        link: '#',
    },
    {
        name: 'AUTOCATH',
        src: dc2 ,
        description: 'Our device consists of a pinching valve mechanism which closes and opens the valve based on the pressure measurement of urine in the bladder through a specialised pressure sensor. Some of the major advantages of this product are its retrofit abilities in the existing catheter system and longer uses. Moreover, this device doesn’t need any human intervention which is a major concern with the existing devices.',
        link: '#',
    },
    {
        name: 'RAMP',
        src: dc3 ,
        description: 'Presenting to you, Retro-Ramp, a low-cost, low effort device for wheelchair users to climb staircases conveniently and effortlessly. Retro-Ramp achieves ascent and descent with the help of a foldable platform, mounted on a set of railings and pulled by a motor-driven chain hoist. The device can be easily retrofitted in existing buildings and public places and can be easily accessed by wheelchair, thus empowering them to move independently and confidently',
        link: '#',
    }
];

const DC2022 = () => {
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
                <h1>DC 2022</h1>
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

export default DC2022