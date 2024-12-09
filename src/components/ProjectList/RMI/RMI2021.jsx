import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import rmi1 from '../../../assets/21-1.png';
import rmi2 from '../../../assets/21-2.png';
import rmi3 from '../../../assets/21-3.png';
import rmi4 from '../../../assets/21-4.png';
import rmi5 from '../../../assets/21-5.png';
import rmi6 from '../../../assets/21-6.png';
import rmi7 from '../../../assets/21-7.png';

const projects = [
    {
        name: 'ANVI (Assistance in Navigation for the Visually Impaired)',
        src: rmi1 ,
        description: 'We developed this project to address the needs of millions of visually impaired people. The prototype provides audio instructions to the users based on the environment to enable them to understand better. It uses Deep learning models CLIP and LXMERT for image captioning and visual question answering. The models take an input image from a camera and output a text explaining the environment or answering the question posed by the user. \n This text is converted to audio and played in the headphone worn by the user. The image is captured from the wireless camera located on the headband and sent to the computation platform where the process mentioned above takes place. Several safety features are implemented via onboard sensors: fall detection, GPS tracking, and Obstacle detection. \n The MPU6050 is used to detect falls, and an email is sent to emergency contacts. The email contains the GPS coordinates of the person obtained from the GPS sensor. A Li-Po battery powers the entire system.',
        link: '#',
    },
    {
        name: 'ARIBOT (Autonomous Rail Inspection Bot)',
        src: rmi2 ,
        description: 'We propose a prototype that is a fully autonomous 4-wheeled robot, flexible in usage and installation, capable of detecting railway defects by performing various tests such as ultrasonic Nondestructive Test (NDT) for internal crack detection in rails and a 3D-laser profiling system for surface cracks, gauge length, and ballast profile inspection. The robot is also equipped with a machine vision system (camera) for anomaly detection in fasters and sleepers. Once inspection mode is turned on, our proposed system will autonomously inspect the track for defects, mainly in 4 profiles: Ballast, Rails, Sleepers, and Fasteners, checking for deviation from a standard profile by implementing the aforementioned methods. \n The bot is equipped with modules like GPS, odometer, and IMU sensors to locate and know the robots position and status respectively at any given time. All the inspection data, including ongoing data capture and defect location details, are constantly being sent and updated to a user-friendly web server. If any defect or anomaly is detected, the nearby base station is alerted in the webserver mentioned, and the Spatio-temporal coordinates, that is, time and location of defect and type of defect, are shared.',
        link: '#',
    },
    {
        name: 'LEWI (Localization and mapping of Enclosed space using Wi-Fi signals)',
        src: rmi3 ,
        description: 'we use the new theory of compressive sampling (also known by other terms such as compressed sensing, compressive sensing or sparse sensing) shows that under certain conditions, it is possible to reconstruct a signal from a considerably incomplete set of observations, i.e., with a number of measurements much less than predicted by the Nyquist-Shannon theorem. \n Hence, we propose our project LEWI, which stands for “Localization and mapping of Enclosed space using Wi-Fi signals”. Since the Wi-Fi signal has the ability to pass through objects and also decays through objects, we use this property to map the occluded objects. We use the new algorithm of compressive sensing to do the mapping by collecting only very little data. We can also determine the accurate position and shape of the obstacles, which helps in localization of occluded objects inside the enclosed space. Hence our proposed project does the mapping efficiently with minimum amount of measurements and also maps the objects occluded from the view.',
        link: '#',
    },
    {
        name: 'SPARO (Spatial Augmentation and Reconstruction of Objects)',
        src: rmi4 ,
        description: '3D reconstruction of real-world objects in virtual space finds various applications in scene rendering and self-driving cars for scene building and perception. This project aims to create editable 3D models of real-world objects using only a few images of the desired object. The project uses the concepts of Structure from Motion and Neural Radiance Fields to recreate the selected object in virtual space. \n The user inputs the images of the object. Structure from Motion is a concept that determines the relative position of the camera from the entity in consideration. The relative poses of the camera are calculated, and then the data is fed into the neural radiance network. The network outputs the colour RGB and opacity alpha of every voxel in the space. This data is used in the rendering equation, which renders the items volume in the 3D space.',
        link: '#',
    },
    {
        name: 'SPS (Smart Parking System)',
        src: rmi5 ,
        description: 'Parking has always been an issue in metropolitan cities. This calls for a streamlined approach through which people can easily find and park their vehicles close to their destinations. \n Our Smart Parking System (SPS) uses low-cost camera modules installed at multiple parking lots across the city and streams live images to the corresponding remote server. The remote server processes the data from the camera module and decides on the number of vacant parking spaces available in the parking lot. \n The remote server updates the number of vacant and filled parking slots in a cloud database. The number of vacant parking slots and their location are displayed in a web application accessible to the general public and free to use. The database is updated continuously, ensuring a pristine user experience.',
        link: '#',
    },
    {
        name: 'SSC (Sign to Speech Convertor)',
        src: rmi6 ,
        description: 'People with speech disabilities and or who have difficulties talking rely on sign language and gestures to communicate. Our solution to this involves a sign language-to-speech converter device that can read the signs and gestures of a person and convert them to simple speech. Most people with speech disabilities are acquainted with sign language, which acts as the systems input. Based on finger movements and the angular position of the hands, the signs can be decoded into specific words and fed to a speaker with a custom voice set. \n Our device uses signs and gestures as input. We use flex sensors and inertial measurement units (IMU) to obtain the input signals properly. These input signals are used to decode the word/content for communication. For tracking gestures, the IMU data is used to predict the angle of the hand. The indicated data/content is then fed to audio output based on the pre-set voice. The entire system is battery powered, which makes it mobile and unrestrictive.',
        link: '#',
    },
    {
        name: 'STAR (System for Tracking Animals using Radar)',
        src: rmi7 ,
        description: 'This project proposes the use of Frequency Modulated Continuous Wave radar to send and analyze signals to detect and estimate respiration and heartbeat frequencies. Being capable of measuring vital signs(through non-contact methods) and having a wider ﬁeld, it is more advantageous than the existing alternatives. \n Simulations for heartbeat and respiration rate were modelled in MATLAB. It was also figured out that this radar technology also had applications in motion tracking, contour detection, area scanning, etc. The hardware from Texas Instruments, IWR6843AOPEVM, was utilized in this project. Many guides, videos and articles were referred for understanding its working and the potential it holds. \n Works are still being held by RMI members in this project.',
        link: '#',
    }
];

const RMI2021 = () => {
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
                <h1>RMI 2021</h1>
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

export default RMI2021