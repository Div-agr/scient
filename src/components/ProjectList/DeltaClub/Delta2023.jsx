import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import del1 from '../../../assets/del-23-1.png';
import del2 from '../../../assets/del-23-2.png';
import del3 from '../../../assets/del-23-3.png';
import del4 from '../../../assets/del-23-4.jpg';

const projects = [
    {
        name: 'Pragyan - 2024',
        src: del1 ,
        description: 'The Pragyan Web-Ops Team ( Delta ) acts as the technical backbone, overseeing the development of the official website, app, and other fest-related sites, alongside proficiently managing servers and providing support for the fest’s backend technology. Delta Force also hosts its flagship games as events for the fest. \n Sites under Pragyan - Pragyan Campus Ambassador site, Pragyan T-shirt registration site, Pragyan Main Site, InHoTT Site, Sangam Site, Ingenium Site, Hackathon Site. \n Tech Stack - NextJS, React, Strapi (CMS), PHP, TypeScript, Docker, Mantine UI, Tailwind CSS.',
        link: '#',
    },
    {
        name: 'Festember - 2023',
        src: del2 ,
        description: 'The Festember Web-Ops Team ( Delta ) acts as the technical backbone, overseeing the development of the official website, app, and other fest-related sites, alongside proficiently managing servers and providing support for the fest’s backend technology. \n Sites under Festember - Inductions website, Festember Campus Ambassador site, Festember T-shirt registration site, Festember Main Site, Festember App, FestAPI - One stop api for all fest, FestAdmin - Admin Interface for fest organizers. \n Tech Stack - React, Payload (CMS), Kotlin, Docker, Typescript, Mantine UI, Tailwind CSS.',
        link: '#',
    },
    {
        name: 'Arcadia',
        src: del3 ,
        description: 'Arcadia: Rivals is a strategy-based game where you collect powerful mini-conquerors known as minicons and challenge opponents. Explore regions, collect minicons with unique abilities, place them strategically on your lineup and engage in epic one-on-one battles to gain as many trophies as possible to conquer the world of Arcadia. \n Tech Stack - Phaser3, React, TypeScript, Gin, Golang, Redis, MySQL, Docker.',
        link: '#',
    },
    {
        name: 'Dpay',
        src: del4 ,
        description: 'DPay redefines the festival experience by offering students a seamless and hassle-free payment solution. With just a few taps on their mobile devices, students can effortlessly settle their purchases at festival stalls. \n One of the key strengths of DPay lies in its robust security measures and scalable infrastructure. With over 10,000 daily active users and transactions amounting to lakhs of rupees, ensuring the security and scalability of the platform was a monumental challenge, one that we tackled through advanced scalability strategies, stringent authentication mechanisms, and continuous monitoring.',
        link: '#',
    }
];

const Delta2023 = () => {
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
                <h1>DELTA 2023</h1>
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

export default Delta2023