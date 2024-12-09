// import React from 'react';
// import "./About.css";
// import Footer from '../components/footer'
// // TimelineItem component
// const TimelineItem = ({ data }) => {
//     return (
//         <div className="timeline-item">
//             <div className="timeline-item-content">
//                 <span className="tag" style={{ background: data.category.color }}>
//                     {data.category.tag}
//                 </span>
//                 <time>{data.date}</time>
//                 <p>{data.text}</p>
//                 <label className="label-info">{data.author}</label>
//                 <span className="circle" />
//             </div>
//         </div>
//     );
// };

// // SimpleTimeLine component
// const SimpleTimeLine = ({ timelineData }) => {
//     return (
//         <React.Fragment>
//             {timelineData.length > 0 && (
//                 <div className="timeline-container">
//                     {timelineData.map((data, idx) => (
//                         <TimelineItem data={data} key={idx} />
//                     ))}
//                 </div>
//             )}
//         </React.Fragment>
//     );
// };

// // About page component
// const About = () => {
//   const timelineData = [
//     {
//         text: "At their Silver Jubilee, the 1990’s batch of REC, came up with a vision to further support and nurture the development of technology and innovation at NITT. SCIEnT was founded as a means for alumni to contribute to their alma mater. On the 24th of December of 2015, the SCIEnT Facility was inaugurated by Mr. Uma Maheswaran, Mission Director, GSLV, ISRO in the presence of Dr. Sundarrajan, then Director of NIT, Trichy.",
//         date: "2015",
//         category: {
//             tag: "Genesis of SCIEnT",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "The annual project showcase event, called \"Open House,\" was initiated in 2018. SCIEnT hosted the event, where multiple technical clubs and students displayed their projects. The showcase featured a credited judging panel and an attractive cash prize, motivating individuals to present their best work.",
//         date: "2018",
//         category: {
//             tag: "Launch of 'Open House' Project Showcase",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "During the lockdown period, when physical gatherings were restricted, the focus shifted to online platforms. Guest lectures, workshops, and informative tech series were organised across various social media platforms. These virtual events helped keep the tech community engaged and connected during the challenging times.",
//         date: "2020",
//         category: {
//             tag: "Transitioning Online due to Lockdown",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "After the lockdown, in collaboration with the Technical Council a 48-hour hackathon called 'Transfinite' was organised. The hackathon aimed to bring back the glory days of technical innovation on campus.",
//         date: "2022",
//         category: {
//             tag: "Return to Campus - 'Transfinite' Hackathon",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "In collaboration with E-Cell, we organised an event called 'E-Summit,' focusing on entrepreneurship. Renowned guest speakers and panel discussions were featured over a span of three days.",
//         date: "2023",
//         category: {
//             tag: "'E-Summit'",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "The annual showcase event, 'Open House,' made a comeback in collaboration with Pragyan at Golden Jubilee Convention Hall (GJCH). The display included the work of tech clubs from the past year and 4 exhibits from Pragyan team. This event provided an opportunity for students to exhibit their technological achievements and creations.",
//         date: "2023",
//         category: {
//             tag: "'Open House' in collaboration with Pragyan",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "TransFinitte[the flagship hackathon of NIT Tiruchirappalli] in collaboration with TC, and Genesis in collaboration with IIC.",
//         date: "2023",
//         category: {
//             tag: "'TransFinitte' and 'Genesis",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "Pragyan, in collaboration with SCIEnT, presents another edition of Open House ’24. Witnessing the best inventions, and great opportunity to showcase innovative projects and creations.",
//         date: "2024",
//         category: {
//             tag: "Open House",
//             color: "#28282B"
//         },
//         // author: "Me"
//     },
//     {
//         text: "SCIEnT proudly presents its annual Project Showcase, a chance to witness groundbreaking engineering marvels by NIT Trichy’s students in the SCIEnT Lab which was followed by the Annual Day Celebrations.",
//         date: "2024",
//         category: {
//             tag: "Annual Day",
//             color: "#28282B"
//         },
//         // author: "Me"
//     }
// ];;

//     return (
//         <div>
//             <h1>About Page</h1>
//             <SimpleTimeLine timelineData={timelineData} />
//             <Footer />
//         </div>
//     );
// };

// export default About;
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import Footer from '../components/footer';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <label className="label-info">{data.author}</label>
      <span className="circle" />
    </div>
  </div>
);

const SimpleTimeLine = ({ timelineData }) => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1, // When 10% of the element is in view
      }
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    // Clean up the observer when the component unmounts
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
};

// About page component
const About = () => {
    const timelineData = [
        {
            text: "At their Silver Jubilee, the 1990’s batch of REC, came up with a vision to further support and nurture the development of technology and innovation at NITT. SCIEnT was founded as a means for alumni to contribute to their alma mater. On the 24th of December of 2015, the SCIEnT Facility was inaugurated by Mr. Uma Maheswaran, Mission Director, GSLV, ISRO in the presence of Dr. Sundarrajan, then Director of NIT, Trichy.",
            date: "2015",
            category: {
                tag: "Genesis of SCIEnT",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "The annual project showcase event, called \"Open House,\" was initiated in 2018. SCIEnT hosted the event, where multiple technical clubs and students displayed their projects. The showcase featured a credited judging panel and an attractive cash prize, motivating individuals to present their best work.",
            date: "2018",
            category: {
                tag: "Launch of 'Open House' Project Showcase",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "During the lockdown period, when physical gatherings were restricted, the focus shifted to online platforms. Guest lectures, workshops, and informative tech series were organised across various social media platforms. These virtual events helped keep the tech community engaged and connected during the challenging times.",
            date: "2020",
            category: {
                tag: "Transitioning Online due to Lockdown",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "After the lockdown, in collaboration with the Technical Council a 48-hour hackathon called 'Transfinite' was organised. The hackathon aimed to bring back the glory days of technical innovation on campus.",
            date: "2022",
            category: {
                tag: "Return to Campus - 'Transfinite' Hackathon",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "In collaboration with E-Cell, we organised an event called 'E-Summit,' focusing on entrepreneurship. Renowned guest speakers and panel discussions were featured over a span of three days.",
            date: "2023",
            category: {
                tag: "'E-Summit'",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "The annual showcase event, 'Open House,' made a comeback in collaboration with Pragyan at Golden Jubilee Convention Hall (GJCH). The display included the work of tech clubs from the past year and 4 exhibits from Pragyan team. This event provided an opportunity for students to exhibit their technological achievements and creations.",
            date: "2023",
            category: {
                tag: "'Open House' in collaboration with Pragyan",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "TransfiNITTe[the flagship hackathon of NIT Tiruchirappalli] in collaboration with the Technical Council, and Genesis in collaboration with IIC.",
            date: "2023",
            category: {
                tag: "'TransFinitte' and 'Genesis",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "Pragyan, in collaboration with SCIEnT, presents another edition of Open House ’24. Witnessing the best inventions, and great opportunity to showcase innovative projects and creations.",
            date: "2024",
            category: {
                tag: "Open House",
                color: "#28282B"
            },
            // author: "Me"
        },
        {
            text: "SCIEnT proudly presents its annual Project Showcase, a chance to witness groundbreaking engineering marvels by NIT Trichy’s students in the SCIEnT Lab which was followed by the Annual Day Celebrations.",
            date: "2024",
            category: {
                tag: "Annual Day",
                color: "#28282B"
            },
            // author: "Me"
        }
    ];;
    

  return (
    <div>
      <Navbar/>
      <h1>About Page</h1>
      <SimpleTimeLine timelineData={timelineData} />
      <Footer />
    </div>
  );
};

export default About;
