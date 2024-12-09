import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectSection.css';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever } from "../assets";

const projects = [
    {
        name: 'SPIDER',
        years: [
            { year: 2024, link: '/spider2024' },
            { year: 2023, link: '/spider2023' },
            { year: 2022, link: '/spider2022' }
        ],
        image: spider,
    },
    {
        name: 'E-CELL',
        years: [
            { year: 2023, link: '/Ecell2023' }
        ],
        image: ecell,
    },
    {
        name: 'GRAPHIQUE',
        years: [
            { year: 2023, link: '/GRAPHIQUE/2023' },
            { year: 2022, link: '/GRAPHIQUE/2022' },
            { year: 2021, link: '/GRAPHIQUE/2021' },
            { year: 2020, link: '/GRAPHIQUE/2020' },
        ],
        image: graphique,
    },
    {
        name: 'SIGMA',
        years: [
            { year: 2023, link: '/SIGMA2023' },
            { year: 2022, link: '/SIGMA2022' }
        ],
        image: sigma,
    },
    {
        name: 'EVER',
        years: [
            { year: 2023, link: '/EVER2023' }
        ],
        image: ever,
    },
    {
        name: 'DELTA',
        years: [
            { year: 2024, link: '/Delta2024' },
            { year: 2023, link: '/Delta2023' },
            { year: 2022, link: '/Delta2022' },
            { year: 2021, link: '/Delta2021' }
        ],
        image: delta,
    },
    {
        name: '180 DC',
        years: [
            { year: 2023, link: '/One802023' }
        ],
        image: oedc,
    },
    {
        name: '3D AERODYNAMICS',
        years: [
            { year: 2023, link: '/3D2023' }
        ],
        image: td,
    },
    {
        name: 'FORCE HYPERLOOP',
        years: [
            { year: 2024, link: '/Fhl2023' }
        ],
        image: fh,
    },
    {
        name: 'MAXIMUS',
        years: [
            { year: 2023, link: '/MAXIMUS/2023' },
            { year: 2022, link: '/MAXIMUS/2022' },
            { year: 2021, link: '/MAXIMUS/2021' },
            { year: 2020, link: '/MAXIMUS/2020' },
        ],
        image: max,
    },
    {
        name: 'PROFNITT',
        years: [],
        image: prof
    },
    {
        name: 'RMI',
        years: [
            { year: 2023, link: '/RMI2023' },
            { year: 2022, link: '/RMI2022' },
            { year: 2021, link: '/RMI2021' },
            { year: 2020, link: '/RMI2020' },
        ],
        image: rmi,
    },
    {
        name: 'PSI',
        years: [
            { year: 2023, link: '/Psi2023' }
        ],
        image: psi,
    },
    {
        name: 'DESIGNERS CONSORTIUM',
        years: [
            { year: 2024, link: '/DC2024' },
            { year: 2023, link: '/DC2023' },
            { year: 2022, link: '/DC2022' }
        ],
        image: dc,
    },
    {
        name: 'NAKSHATRA',
        years: [
            { year: 2023, link: '/NAKSHA/2023' },
            { year: 2022, link: '/NAKSHA/2022' },
            { year: 2021, link: '/NAKSHA/2021' },
            { year: 2020, link: '/NAKSHA/2020' },
        ],
        image: naksh,
    },
    {
        name: 'DATABYTE',
        years: [
            { year: 2023, link: '/DB2023' }
        ],
        image: db,
    }
];

const ProjectSection = () => {
    const navigate = useNavigate();

    // Function to navigate to the latest project link
    const handleClick = (latestLink) => {
        navigate(latestLink);
    };

    return (
        <>
            <Navbar/>
            <div className="project-section">
                <h2>PROJECTS</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => {
                        // Get the latest year’s link for each project
                        const latestYear = project.years.length > 0 ? project.years[0].link : null;

                        return (
                            <div 
                                key={index} 
                                className="project-item" 
                                onClick={() => latestYear && handleClick(latestYear)}
                            >
                                <img src={project.image} alt='pics' />
                                <div className="projectname">{project.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectSection;