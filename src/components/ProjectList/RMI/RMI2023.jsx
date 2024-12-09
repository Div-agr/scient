import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import rmi1_23 from '../../../assets/23-1.jpg';
import rmi2_23 from '../../../assets/23-2.jpg';
import rmi3_23 from '../../../assets/23-3.jpg';
import rmi4_23 from '../../../assets/23-4.jpg';
import rmi5_23 from '../../../assets/23-5.jpg';
import rmi6_23 from '../../../assets/23-6.jpg';
import rmi7_23 from '../../../assets/23-7.jpg';
import rmi8_23 from '../../../assets/23-8.jpg';

import rmi1_22 from '../../../assets/22-1.jpg';
import rmi2_22 from '../../../assets/22-2.jpg';
import rmi3_22 from '../../../assets/22-3.jpg';
import rmi4_22 from '../../../assets/22-4.jpg';
import rmi5_22 from '../../../assets/22-5.jpg';
import rmi6_22 from '../../../assets/22-6.jpg';
import rmi7_22 from '../../../assets/22-7.jpg';
import rmi8_22 from '../../../assets/22-8.webp';
import rmi9_22 from '../../../assets/22-9.webp';

import rmi1_21 from '../../../assets/21-1.png';
import rmi2_21 from '../../../assets/21-2.png';
import rmi3_21 from '../../../assets/21-3.png';
import rmi4_21 from '../../../assets/21-4.png';
import rmi5_21 from '../../../assets/21-5.png';
import rmi6_21 from '../../../assets/21-6.png';
import rmi7_21 from '../../../assets/21-7.png';

import rmi1 from '../../../assets/20-1.png';
import rmi2 from '../../../assets/20-2.png';
import rmi3 from '../../../assets/20-3.png';

import {rmi} from "../../../assets"

const projects20 = [
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

const projects21 = [
    {
        name: 'ANVI (Assistance in Navigation for the Visually Impaired)',
        src: rmi1_21 ,
        description: 'We developed this project to address the needs of millions of visually impaired people. The prototype provides audio instructions to the users based on the environment to enable them to understand better. It uses Deep learning models CLIP and LXMERT for image captioning and visual question answering. The models take an input image from a camera and output a text explaining the environment or answering the question posed by the user. \n This text is converted to audio and played in the headphone worn by the user. The image is captured from the wireless camera located on the headband and sent to the computation platform where the process mentioned above takes place. Several safety features are implemented via onboard sensors: fall detection, GPS tracking, and Obstacle detection. \n The MPU6050 is used to detect falls, and an email is sent to emergency contacts. The email contains the GPS coordinates of the person obtained from the GPS sensor. A Li-Po battery powers the entire system.',
        link: '#',
    },
    {
        name: 'ARIBOT (Autonomous Rail Inspection Bot)',
        src: rmi2_21 ,
        description: 'We propose a prototype that is a fully autonomous 4-wheeled robot, flexible in usage and installation, capable of detecting railway defects by performing various tests such as ultrasonic Nondestructive Test (NDT) for internal crack detection in rails and a 3D-laser profiling system for surface cracks, gauge length, and ballast profile inspection. The robot is also equipped with a machine vision system (camera) for anomaly detection in fasters and sleepers. Once inspection mode is turned on, our proposed system will autonomously inspect the track for defects, mainly in 4 profiles: Ballast, Rails, Sleepers, and Fasteners, checking for deviation from a standard profile by implementing the aforementioned methods. \n The bot is equipped with modules like GPS, odometer, and IMU sensors to locate and know the robots position and status respectively at any given time. All the inspection data, including ongoing data capture and defect location details, are constantly being sent and updated to a user-friendly web server. If any defect or anomaly is detected, the nearby base station is alerted in the webserver mentioned, and the Spatio-temporal coordinates, that is, time and location of defect and type of defect, are shared.',
        link: '#',
    },
    {
        name: 'LEWI (Localization and mapping of Enclosed space using Wi-Fi signals)',
        src: rmi3_21 ,
        description: 'we use the new theory of compressive sampling (also known by other terms such as compressed sensing, compressive sensing or sparse sensing) shows that under certain conditions, it is possible to reconstruct a signal from a considerably incomplete set of observations, i.e., with a number of measurements much less than predicted by the Nyquist-Shannon theorem. \n Hence, we propose our project LEWI, which stands for “Localization and mapping of Enclosed space using Wi-Fi signals”. Since the Wi-Fi signal has the ability to pass through objects and also decays through objects, we use this property to map the occluded objects. We use the new algorithm of compressive sensing to do the mapping by collecting only very little data. We can also determine the accurate position and shape of the obstacles, which helps in localization of occluded objects inside the enclosed space. Hence our proposed project does the mapping efficiently with minimum amount of measurements and also maps the objects occluded from the view.',
        link: '#',
    },
    {
        name: 'SPARO (Spatial Augmentation and Reconstruction of Objects)',
        src: rmi4_21 ,
        description: '3D reconstruction of real-world objects in virtual space finds various applications in scene rendering and self-driving cars for scene building and perception. This project aims to create editable 3D models of real-world objects using only a few images of the desired object. The project uses the concepts of Structure from Motion and Neural Radiance Fields to recreate the selected object in virtual space. \n The user inputs the images of the object. Structure from Motion is a concept that determines the relative position of the camera from the entity in consideration. The relative poses of the camera are calculated, and then the data is fed into the neural radiance network. The network outputs the colour RGB and opacity alpha of every voxel in the space. This data is used in the rendering equation, which renders the items volume in the 3D space.',
        link: '#',
    },
    {
        name: 'SPS (Smart Parking System)',
        src: rmi5_21 ,
        description: 'Parking has always been an issue in metropolitan cities. This calls for a streamlined approach through which people can easily find and park their vehicles close to their destinations. \n Our Smart Parking System (SPS) uses low-cost camera modules installed at multiple parking lots across the city and streams live images to the corresponding remote server. The remote server processes the data from the camera module and decides on the number of vacant parking spaces available in the parking lot. \n The remote server updates the number of vacant and filled parking slots in a cloud database. The number of vacant parking slots and their location are displayed in a web application accessible to the general public and free to use. The database is updated continuously, ensuring a pristine user experience.',
        link: '#',
    },
    {
        name: 'SSC (Sign to Speech Convertor)',
        src: rmi6_21 ,
        description: 'People with speech disabilities and or who have difficulties talking rely on sign language and gestures to communicate. Our solution to this involves a sign language-to-speech converter device that can read the signs and gestures of a person and convert them to simple speech. Most people with speech disabilities are acquainted with sign language, which acts as the systems input. Based on finger movements and the angular position of the hands, the signs can be decoded into specific words and fed to a speaker with a custom voice set. \n Our device uses signs and gestures as input. We use flex sensors and inertial measurement units (IMU) to obtain the input signals properly. These input signals are used to decode the word/content for communication. For tracking gestures, the IMU data is used to predict the angle of the hand. The indicated data/content is then fed to audio output based on the pre-set voice. The entire system is battery powered, which makes it mobile and unrestrictive.',
        link: '#',
    },
    {
        name: 'STAR (System for Tracking Animals using Radar)',
        src: rmi7_21 ,
        description: 'This project proposes the use of Frequency Modulated Continuous Wave radar to send and analyze signals to detect and estimate respiration and heartbeat frequencies. Being capable of measuring vital signs(through non-contact methods) and having a wider ﬁeld, it is more advantageous than the existing alternatives. \n Simulations for heartbeat and respiration rate were modelled in MATLAB. It was also figured out that this radar technology also had applications in motion tracking, contour detection, area scanning, etc. The hardware from Texas Instruments, IWR6843AOPEVM, was utilized in this project. Many guides, videos and articles were referred for understanding its working and the potential it holds. \n Works are still being held by RMI members in this project.',
        link: '#',
    }
];

const projects22 = [
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi1_22 ,
        description: 'Underwater robotic vehicle platform with optional ground control, designed to execute tests and missions at different levels of autonomy including testing of specialized payloads. \n This project aims to develop an underwater robotic vehicle platform with optional ground control to execute tests and missions at different levels of autonomy. This platform will be a testbed for hardware, algorithms, and specialized payloads to perform various underwater operations. \n An open-frame configuration is adopted for the vehicle structure to have better control authority at low speeds and allow modularity for a wide range of payloads. The vehicle structure was designed in SolidWorks, considering the resulting weight, buoyancy, and center of mass of all components and the assembly to ensure the vehicle is stable and slightly positively buoyant to make recovery easier in case of any major system malfunction. The vehicles frame was constructed using 0.75-inch UPVC pipes and fittings, and the joints were secured using fasteners',
        link: '#',
    },
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi2_22 ,
        description: 'In the current design, there are 6 thrusters - 2 oriented in the vertical direction and 4 along the horizontal in a vector configuration. This provides the vehicle to perform translation along all 3 principal axes and rotation about two axes (roll and yaw). Pitch control can be achieved by adding 2 more thrusters in the vertical direction, and the vehicle frame was designed to consider this improvement. The propellers of the vehicle were adapted to be used with the available motors and were fabricated using fused deposition modeling (FDM). \n The hull (acrylic tube) houses all the onboard electronics and provides most of the vehicles buoyant force. Machined aluminum end caps and laser-cut acrylic end plates seal the hull. A watertight seal is achieved by machining appropriate grooves in the aluminum end caps to support O-rings. On the forward side, a clear dome provides a better field of view for the forward-facing camera. The camera feed implements computer vision algorithms on the Raspberry Pi for obstacle detection and collision avoidance, visual inspection of critical infrastructure to detect oil leaks and corrosion, and monitoring the marine ecosystem. The pan and tilt mechanism for the camera provides better control over the capture area.',
        link: '#',
    },
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi3_22 ,
        description: 'The vehicle has an array of sensors including IMU, compass, and pressure sensor using which position and heading information can be obtained. This is used for the PID control algorithm for holding the depth and heading during manual operation. This system also allows to hold the position during the absence of any inputs from the operator to counteract any water currents. The battery, power electronics, motor drivers, and the processing units are the other important electronic components inside the hull. \n Since water is impervious to 2.4 GHz radio waves, a tether connects the vehicle to a floating buoy with a transceiver module for wireless communication with the ground station. This is however not needed for fully autonomous missions. The vehicle has a variety of safety features in case of any anomalies such as loss of signal, or leak in the hull, etc. \n The vehicle can perform a wide range of operations depending upon the payloads it carries. For instance, it can be used in conducting intelligence, surveillance, and reconnaissance operations. In addition to that, the vehicle can be equipped with mine countermeasure systems to detect, classify, and neutralize underwater mines.',
        link: '#',
    },
    {
        name: 'VIRYA',
        src: rmi4_22 ,
        description: 'Autonomous Rover for space exploration - A Rover that provides a research platform for the study of autonomous ground vehicles that is capable of mapping the terrain of extra-terrestrial surfaces. \n Mapping the terrain of an extra-terrestrial surface is crucial to the mission of space exploration. Unmanned vehicles are first sent to those surfaces to get information and determine if the outer body is a human exploration fit. Rovers are the go-to robots for space exploration,equipped with advanced navigation and manipulation capabilities. \n The proposed rover is a fully autonomous system traversing an unknown environment with the help of its sensors. Since the terrain of the extra-terrestrial surface is unfamiliar, the rover must be able to maneuver such terrains, making sure the main housing containing all the electronics is safe. This is achieved by designing and implementing a Rocker-Bogie suspension system that ensures the contact of 4-wheels at any point in time. The independence between the left and right wheels adds to the bots dynamic capabilities.',
        link: '#',
    },
    {
        name: 'VIRYA',
        src: rmi5_22 ,
        description: 'It utilizes the Rocker-Bogie suspension mechanism, helping it to traverse uneven terrains.It features a 4DOF arm allowing it to precisely manipulate objects in three-dimensional space. This flexibility, coupled with a two-finger gripper, ensures secure grasping of objects from various orientations.Using the feed from Intel Realsense depth camera, it can detect obstacles and craters along its path, traversing through them , depending on the size. Powered by Nvidia Jetson Orin, the rovers algorithms for crater and object detection, navigation, and pick-and-place operations are executed. These algorithms provide instructions to the microcontrollers within the arm system and drive system, which control motors,sensors and other components to execute tasks efficiently. \n The surface of outer space bodies can be mapped to a certain degree of accuracy with the help of Inertial Measurement Units (IMU), these measure linear and angular accelerations. The hardware filter DMP present in the IMU sensor is responsible for converting the acceleration values to displacement values. When placed on the wheels and the main chassis, these sensors can be compared to give the change in the depth of the terrain. The usage of LIDAR for terrain mapping is a future goal.',
        link: '#',
    },
    {
        name: 'Hexapod',
        src: rmi6_22 ,
        description: 'A six-legged bio-inspired bot with 18 DOF that can intelligently maneuver over harsh terrains and perform different analysis. The project aims to keep pace with current unmanned developments by using the potential of the hexapod due to its adaptability, versatility, mobility, and sensor integration capabilities in defense applications and planetary exploration by traversing challenging terrains on celestial bodies as well as in commercialization. \n Hexapod is a bio-inspired, six-legged multi-directional robot with 18 degrees of freedom capable of dynamic movement with precision. The bot has better maneuverability in rough, uneven terrains, and even climbs inclined surfaces with ease compared to conventional wheeled robots due to its stability and fault-tolerant ability. The basic design of a hexapod has a central body/chassis and six legs with eighteen servo motors.The method of inverse kinematics and Jacobian-based coordinate transformation are employed for movement of the bot. Various gait algorithms like tripod, ripple and wave are used depending on the kind of movement such as yaw, walk, climb, etc., The interchangeability in gait patterns depending on various terrains helps for smoother and steadier motion of the bot.',
        link: '#',
    },
    {
        name: 'Hexapod',
        src: rmi7_22 ,
        description: 'Hexapod V1 (upgraded version) is designed in Fusion 360 considering the structural analysis and fabricated entirely by 3D printing using PLA material. V1 is made almost three times bigger than V0 in order to overcome the shortcomings of V0 such as high payload capacity, faster movement, and climb larger obstacles easily. V1 is equipped with Arduino MEGA, 60 kg cm RDS5160 servo motors, two Pololu mini-maestro servo controllers, a 20A buck converter, and a 22.2V, 5200mAh Li-Po battery. Digital touch feedback by attaching the contact switches to tips of the leg for dynamic obstacle climbing. A custom-made single layer PCB remote controller with NRF24L01 module is used for wireless communication with the bot with better user control for various navigation modes. Autonomous version of V1 is integrated with a KINECT camera to scan and create a 3D map of the surrounding environment, Jetson NANO for processing RGB data, and an LCD touch display. The step size of V1 is 8-24 cm, maximum speed is around 17 cm/s, and a run-time of 53 mins with a payload capacity of 15kgs. \n The capabilities of hexapods can be enhanced by integrating numerous peripheral modules for various tasks to achieve desired functionalities.',
        link: '#',
    },
    {
        name: 'QuaDro',
        src: rmi8_22 ,
        description: 'QuaDro is a fully automated quadcopter with capabilities of carrying out last-mile delivery using vision-based position control. \n Our solution proposes a fully automated quadcopter with capabilities of carrying out last-mile delivery in hard-to-reach regions. The drone shall be capable of carrying first aid kits, health and other medical supplies, with a maximum payload carrying capacity of about 700 grams. \n QuaDro uses location guided flight by means of GPS that will enable outdoor point-to-point navigation, that is, motion from one point to another without any remote controls. \n The drone also contains LiDAR capabilities for obstacle detection and altitude lock, to maintain a specific altitude from ground. 3-D space location lock using image processing functionalities to assist vision-guided position-control will be enabled in the drone. This feature is the most important feature in making the drone entirely autonomous. The visual guidance solely controls precise landing of the drone on an aruco marker and helps the drone position and orient itself accurately.',
        link: '#',
    },
    {
        name: 'Balancing bot',
        src: rmi9_22 ,
        description: 'The two-wheel self-balancing bot is a robotic platform that can be used in hospitals to assist medical staff in maneuvering through tight spaces and reduce the load on healthcare providers. The robot is designed to be lightweight, easy to operate, and equipped with advanced sensors and algorithms that allow it to maintain balance while moving around. \n In the medical sector, the self-balancing bot can be used to transport medical equipment and supplies,reducing the risk of injury to both the patient and the healthcare provider.The robot can be programmed to perform a range of tasks, such as monitoring patient vitals, delivering medications, and assisting with patient care.',
        link: '#',
    }
];

const projects23 = [
    {
        name: 'AURA',
        src: rmi1_23 ,
        description: 'The aerial swarm robotics project represents a significant breakthrough in multi-agent systems, designed to execute complex tasks through precise coordination and synchronization. This project involves a swarm of five drones that ensure reliable operation in diverse environments. The system is anchored by a master drone that handles task allocation, coordination, and real-time communication with the slave drones, ensuring that the entire swarm operates as a unified entity. \n The drones are designed in an X-shaped quadcopter configuration, providing stability and maneuverability. Each drone is equipped with a flight controller, integrated with IMU and GPS sensors, along with ESP32S3 as a companion microcontroller. The communication between drones is handled through the ESP-NOW protocol, ensuring robust and reliable coordination. \n For localization, the swarm uses Extended Kalman Filter (EKF) algorithm that fuses IMU and GPS data, with the potential for differential GPS integration to enhance accuracy. The control strategy revolves around continuous position updates, velocity command computations, and real-time adjustments, allowing the drones to maintain formation and avoid collisions.',
        link: '#',
    },
    {
        name: 'AURA',
        src: rmi5_23 ,
        description: 'The swarm robots capability to adapt and coordinate makes them ideal for various applications, including search and rescue, 3D reconstruction, and smart agriculture. \n Aerial Swarm of five autonomous drones equipped with advanced sensor fusion and real-time communication, designed for seamless coordination and precision in complex task execution across diverse environments.',
        link: '#',
    },
    {
        name: 'Medvisor',
        src: rmi2_23 ,
        description: 'MedVisor represents a groundbreaking advancement in healthcare technology, offering an innovative Augmented Reality (AR) solution in the form of smart glasses. Through the integration of Speech-to-Text conversion and a sophisticated Large Language Model (LLM), MedVisor empowers patients with access to precise and comprehensive answers to any medical query they may have. A voice recognition system using the Porcupine Wake Word engine and Assembly AI STT engine allows the user to ask questions, converting text to speech in real time. The text is transmitted over a socket connection to a server running locally on a smartphone, where a response is generated using the Gemini Large Language Model. By leveraging AR technology, MedVisor revolutionizes patient education by providing individuals with a dynamic and immersive learning experience. \n Through the use of smart glasses, patients can visualize organs superimposed on the human body, allowing for a deeper understanding of their medical conditions. This visual representation facilitates clearer communication between healthcare providers and patients, enabling individuals to make more informed decisions about their health and treatment options.',
        link: '#',
    },
    {
        name: 'Medvisor',
        src: rmi6_23 ,
        description: 'In the realm of immersive healthcare, MedVisor transforms the patient experience by offering real-time insights and visualizations of medical data directly within their field of view. This immersive approach fosters greater engagement and understanding, ultimately leading to improved patient outcomes and satisfaction. \n The applications of MedVisor extend beyond patient education, encompassing immersive healthcare experiences and enhancing surgical accuracy. MedVisor plays a pivotal role in improving surgical accuracy by providing surgeons with augmented visualizations and real-time information during procedures. By superimposing vital data onto the surgical field, MedVisor enhances situational awareness and decision-making, ultimately contributing to safer and more precise surgical interventions. In essence, MedVisor represents a transformative tool at the intersection of technology and healthcare, empowering both patients and healthcare providers with unprecedented capabilities for education, engagement, and procedural excellence.',
        link: '#',
    },
    {
        name: 'Amphibian Bot',
        src: rmi3_23 ,
        description: 'Amphibious four-wheeled thruster robot capable of navigating both submerged environments and remote landscapes with the combination of robust design, advanced propulsion systems, and integrated sensor technologies. \n The multi-mode locomotion bot represents a groundbreaking advancement in robotic technology, offering unparalleled adaptability for disaster response, mapping, and exploration missions. Its modular design seamlessly integrates wheels and thrusters, allowing for effortless customization with peripheral modules tailored to specific tasks. Equipped with actuators at each joint, the bot dynamically configures its thrusters for fluid navigation across diverse environments, from land to water. Its precise control system enables seamless movement in any direction, ensuring precise maneuverability during critical missions.',
        link: '#',
    },
    {
        name: 'Amphibian Bot',
        src: rmi7_23 ,
        description: 'Utilizing four wheels for terrestrial traversal and four thrusters powered by high torque BLDC motors, the bot effortlessly transitions between land and water. A sophisticated engagement-disengagement mechanism, coupled with servo motors, facilitates smooth transmission, enhancing efficiency and speed. Engineered to withstand the rigors of underwater exploration, the bots robust body frame ensures durability and reliability at depth. The synergy between its propulsion system, actuation system, and transition mechanisms ensures seamless operation across varied terrains. \n In conclusion, the multi-mode locomotion bot offers unmatched versatility and efficiency, revolutionizing disaster response, mapping, and exploration endeavors with its groundbreaking capabilities.',
        link: '#',
    },
    {
        name: 'Soft robotics',
        src: rmi4_23 ,
        description: 'A soft robotic gripper project employing SMAs or Pneumatic Control for object manipulation tasks like pick-and-place and harvesting operations. \n For actuation using SMAs: The soft robotic gripper employs Shape Memory Alloys (SMAs) for actuation, enabling precise manipulation tasks like pick-and-place operations in manufacturing, delicate handling in food packaging, and efficient harvesting in agriculture. \n Controlled by SMA phase transitions triggered by thermal or mechanical stimuli, the grippers compliant design facilitates adaptive grasping of objects, ensuring versatility in dynamic environments. Integrated sensors provide real-time feedback for optimized performance, while computer vision algorithms enable object detection, enhancing the grippers adaptability and utility across various industries. \n Furthermore, the soft robotic gripper surpasses conventional rigid grippers by providing gentler handling, precise control, and adaptability to variable object shapes and sizes, thereby reducing product damage and enhancing operational efficiency.',
        link: '#',
    },
    {
        name: 'Soft robotics',
        src: rmi8_23 ,
        description: 'For pneumatic actuation: The anthropomorphic soft gripper integrates a biomimetic design with a compliant silicone structure, enabling precise force modulation and adaptability in manipulation tasks. Each fingers control is governed by a pneumatic system, facilitating real-time adjustments of grip strength based on feedback from integrated pressure sensors. This data informs adaptive control strategies, empowering the gripper to dynamically tailor its grasp to diverse object characteristics, surpassing the limitations of conventional rigid grippers. \n This innovative fusion of biomimetic design and pneumatic control ensures safe human interaction and enables the gripper to delicately handle objects with precision. With its ability to adapt to varying object shapes and sizes, the anthropomorphic soft gripper represents a significant advancement in robotic manipulation technology, offering enhanced versatility and control in intricate environments.',
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
    2021: projects21,
    2022: projects22,
    2020: projects20
  };
  
  
  function RMI2023() {
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
          <img className="image-slider h-[100px] w-[100px]" src={rmi} alt="Club Logo" />
          <h1>RMI</h1>
        </div>
  
        <div className="row">
          <div className="flex justify-center">
            <button
              className="bg- bordergrey-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
              onClick={() => changeYear('2023')}
            >
              2023
            </button>
  
            <button
              onClick={() => changeYear('2022')}
              className="bg-grey border-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
            >
              2022
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
  
  export default RMI2023