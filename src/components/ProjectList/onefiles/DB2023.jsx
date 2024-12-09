import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import db1 from '../../../assets/db-1.png';
import db2 from '../../../assets/db-2.png';
import db3 from '../../../assets/db-3.png';
import db4 from '../../../assets/db-4.png';
import db5 from '../../../assets/db-5.png';
import db6 from '../../../assets/db-6.png';

import { db } from '../../../assets';

const projects23 = [
    {
        name: 'Question and answer generation',
        src: db1 ,
        description: 'DataByte is the data science and business analytics club at NIT Trichy. The team is dedicated to fostering a deep interest in specialized fields such as business analysis and computational finance. Through active discussions and the facilitation of advanced data handling techniques, DataByte cultivates a rich environment for students to explore and excel in these niche areas. \n This project focuses on developing AI models that can automatically generate relevant questions and accurate answers from textual data. It explores natural language processing techniques to enhance educational tools and customer support systems.',
        link: '#',
    },
    {
        name: 'AI interviewer',
        src: db2 ,
        description: 'This initiative aims to create an AI-driven interviewer that can simulate realistic interview scenarios, assess candidate responses, and provide feedback. It combines machine learning and natural language processing to assist in recruitment and skill assessment.',
        link: '#',
    },
    {
        name: 'Protecting children from hateful content',
        src: db3 ,
        description: 'This project is dedicated to building AI systems that detect and filter out hateful or inappropriate content from online platforms to protect children. It leverages sentiment analysis and content moderation algorithms to create safer digital environments',
        link: '#',
    },
    {
        name: 'Image background removal',
        src: db4 ,
        description: 'This project focuses on developing machine learning models that can accurately remove backgrounds from images, enabling applications in e-commerce, graphic design, and virtual reality. It explores computer vision techniques for seamless background extraction.',
        link: '#',
    },
    {
        name: 'India case studies',
        src: db5,
        description: 'This initiative analyzes various business and societal challenges within India using data analytics and machine learning. It provides insights into case studies across sectors like healthcare, finance, and education to drive informed decision-making.',
        link: '#',
    },
    {
        name: 'Practical DSA',
        src: db6 ,
        description: 'This project is aimed at applying data structures and algorithms (DSA) to real-world problems, enhancing coding efficiency and problem-solving skills. It offers hands-on experience with practical coding challenges to prepare for competitive programming and technical interviews.',
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
};

function DB2023() {
    const [year, setYear] = useState('2023'); 
    const [currentProject, setCurrentProject] = useState(allProjects[2023][0]);
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
  
    const changeYear = (selectedYear) => {
      setYear(selectedYear);
      setCurrentIndex(0);
      setCurrentProject(allProjects[selectedYear][0]);
      setShowYearSelector(false);
    };
  
    return (
      <div className="project-slider-container">
        <div className="project-title">
          <img className="image-slider h-[100px] w-[100px]" src={db} alt="Club Logo" />
          <h1>DATABYTE</h1>
        </div>
  
        <div className="row">
          <div className="flex justify-center">
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

export default DB2023