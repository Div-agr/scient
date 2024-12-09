import React, {useState} from 'react';
import '../../../styles/AllProj.css';
import rmi1 from '../../../assets/22-1.jpg';
import rmi2 from '../../../assets/22-2.jpg';
import rmi3 from '../../../assets/22-3.jpg';
import rmi4 from '../../../assets/22-4.jpg';
import rmi5 from '../../../assets/22-5.jpg';
import rmi6 from '../../../assets/22-6.jpg';
import rmi7 from '../../../assets/22-7.jpg';
import rmi8 from '../../../assets/22-8.webp';
import rmi9 from '../../../assets/22-9.webp';

const projects = [
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi1 ,
        description: 'Underwater robotic vehicle platform with optional ground control, designed to execute tests and missions at different levels of autonomy including testing of specialized payloads. \n This project aims to develop an underwater robotic vehicle platform with optional ground control to execute tests and missions at different levels of autonomy. This platform will be a testbed for hardware, algorithms, and specialized payloads to perform various underwater operations. \n An open-frame configuration is adopted for the vehicle structure to have better control authority at low speeds and allow modularity for a wide range of payloads. The vehicle structure was designed in SolidWorks, considering the resulting weight, buoyancy, and center of mass of all components and the assembly to ensure the vehicle is stable and slightly positively buoyant to make recovery easier in case of any major system malfunction. The vehicles frame was constructed using 0.75-inch UPVC pipes and fittings, and the joints were secured using fasteners',
        link: '#',
    },
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi2 ,
        description: 'In the current design, there are 6 thrusters - 2 oriented in the vertical direction and 4 along the horizontal in a vector configuration. This provides the vehicle to perform translation along all 3 principal axes and rotation about two axes (roll and yaw). Pitch control can be achieved by adding 2 more thrusters in the vertical direction, and the vehicle frame was designed to consider this improvement. The propellers of the vehicle were adapted to be used with the available motors and were fabricated using fused deposition modeling (FDM). \n The hull (acrylic tube) houses all the onboard electronics and provides most of the vehicles buoyant force. Machined aluminum end caps and laser-cut acrylic end plates seal the hull. A watertight seal is achieved by machining appropriate grooves in the aluminum end caps to support O-rings. On the forward side, a clear dome provides a better field of view for the forward-facing camera. The camera feed implements computer vision algorithms on the Raspberry Pi for obstacle detection and collision avoidance, visual inspection of critical infrastructure to detect oil leaks and corrosion, and monitoring the marine ecosystem. The pan and tilt mechanism for the camera provides better control over the capture area.',
        link: '#',
    },
    {
        name: 'ROV (Remotely operated underwater vehicle)',
        src: rmi3 ,
        description: 'The vehicle has an array of sensors including IMU, compass, and pressure sensor using which position and heading information can be obtained. This is used for the PID control algorithm for holding the depth and heading during manual operation. This system also allows to hold the position during the absence of any inputs from the operator to counteract any water currents. The battery, power electronics, motor drivers, and the processing units are the other important electronic components inside the hull. \n Since water is impervious to 2.4 GHz radio waves, a tether connects the vehicle to a floating buoy with a transceiver module for wireless communication with the ground station. This is however not needed for fully autonomous missions. The vehicle has a variety of safety features in case of any anomalies such as loss of signal, or leak in the hull, etc. \n The vehicle can perform a wide range of operations depending upon the payloads it carries. For instance, it can be used in conducting intelligence, surveillance, and reconnaissance operations. In addition to that, the vehicle can be equipped with mine countermeasure systems to detect, classify, and neutralize underwater mines.',
        link: '#',
    },
    {
        name: 'VIRYA',
        src: rmi4 ,
        description: 'Autonomous Rover for space exploration - A Rover that provides a research platform for the study of autonomous ground vehicles that is capable of mapping the terrain of extra-terrestrial surfaces. \n Mapping the terrain of an extra-terrestrial surface is crucial to the mission of space exploration. Unmanned vehicles are first sent to those surfaces to get information and determine if the outer body is a human exploration fit. Rovers are the go-to robots for space exploration,equipped with advanced navigation and manipulation capabilities. \n The proposed rover is a fully autonomous system traversing an unknown environment with the help of its sensors. Since the terrain of the extra-terrestrial surface is unfamiliar, the rover must be able to maneuver such terrains, making sure the main housing containing all the electronics is safe. This is achieved by designing and implementing a Rocker-Bogie suspension system that ensures the contact of 4-wheels at any point in time. The independence between the left and right wheels adds to the bots dynamic capabilities.',
        link: '#',
    },
    {
        name: 'VIRYA',
        src: rmi5 ,
        description: 'It utilizes the Rocker-Bogie suspension mechanism, helping it to traverse uneven terrains.It features a 4DOF arm allowing it to precisely manipulate objects in three-dimensional space. This flexibility, coupled with a two-finger gripper, ensures secure grasping of objects from various orientations.Using the feed from Intel Realsense depth camera, it can detect obstacles and craters along its path, traversing through them , depending on the size. Powered by Nvidia Jetson Orin, the rovers algorithms for crater and object detection, navigation, and pick-and-place operations are executed. These algorithms provide instructions to the microcontrollers within the arm system and drive system, which control motors,sensors and other components to execute tasks efficiently. \n The surface of outer space bodies can be mapped to a certain degree of accuracy with the help of Inertial Measurement Units (IMU), these measure linear and angular accelerations. The hardware filter DMP present in the IMU sensor is responsible for converting the acceleration values to displacement values. When placed on the wheels and the main chassis, these sensors can be compared to give the change in the depth of the terrain. The usage of LIDAR for terrain mapping is a future goal.',
        link: '#',
    },
    {
        name: 'Hexapod',
        src: rmi6 ,
        description: 'A six-legged bio-inspired bot with 18 DOF that can intelligently maneuver over harsh terrains and perform different analysis. The project aims to keep pace with current unmanned developments by using the potential of the hexapod due to its adaptability, versatility, mobility, and sensor integration capabilities in defense applications and planetary exploration by traversing challenging terrains on celestial bodies as well as in commercialization. \n Hexapod is a bio-inspired, six-legged multi-directional robot with 18 degrees of freedom capable of dynamic movement with precision. The bot has better maneuverability in rough, uneven terrains, and even climbs inclined surfaces with ease compared to conventional wheeled robots due to its stability and fault-tolerant ability. The basic design of a hexapod has a central body/chassis and six legs with eighteen servo motors.The method of inverse kinematics and Jacobian-based coordinate transformation are employed for movement of the bot. Various gait algorithms like tripod, ripple and wave are used depending on the kind of movement such as yaw, walk, climb, etc., The interchangeability in gait patterns depending on various terrains helps for smoother and steadier motion of the bot.',
        link: '#',
    },
    {
        name: 'Hexapod',
        src: rmi7 ,
        description: 'Hexapod V1 (upgraded version) is designed in Fusion 360 considering the structural analysis and fabricated entirely by 3D printing using PLA material. V1 is made almost three times bigger than V0 in order to overcome the shortcomings of V0 such as high payload capacity, faster movement, and climb larger obstacles easily. V1 is equipped with Arduino MEGA, 60 kg cm RDS5160 servo motors, two Pololu mini-maestro servo controllers, a 20A buck converter, and a 22.2V, 5200mAh Li-Po battery. Digital touch feedback by attaching the contact switches to tips of the leg for dynamic obstacle climbing. A custom-made single layer PCB remote controller with NRF24L01 module is used for wireless communication with the bot with better user control for various navigation modes. Autonomous version of V1 is integrated with a KINECT camera to scan and create a 3D map of the surrounding environment, Jetson NANO for processing RGB data, and an LCD touch display. The step size of V1 is 8-24 cm, maximum speed is around 17 cm/s, and a run-time of 53 mins with a payload capacity of 15kgs. \n The capabilities of hexapods can be enhanced by integrating numerous peripheral modules for various tasks to achieve desired functionalities.',
        link: '#',
    },
    {
        name: 'QuaDro',
        src: rmi8 ,
        description: 'QuaDro is a fully automated quadcopter with capabilities of carrying out last-mile delivery using vision-based position control. \n Our solution proposes a fully automated quadcopter with capabilities of carrying out last-mile delivery in hard-to-reach regions. The drone shall be capable of carrying first aid kits, health and other medical supplies, with a maximum payload carrying capacity of about 700 grams. \n QuaDro uses location guided flight by means of GPS that will enable outdoor point-to-point navigation, that is, motion from one point to another without any remote controls. \n The drone also contains LiDAR capabilities for obstacle detection and altitude lock, to maintain a specific altitude from ground. 3-D space location lock using image processing functionalities to assist vision-guided position-control will be enabled in the drone. This feature is the most important feature in making the drone entirely autonomous. The visual guidance solely controls precise landing of the drone on an aruco marker and helps the drone position and orient itself accurately.',
        link: '#',
    },
    {
        name: 'Balancing bot',
        src: rmi9 ,
        description: 'The two-wheel self-balancing bot is a robotic platform that can be used in hospitals to assist medical staff in maneuvering through tight spaces and reduce the load on healthcare providers. The robot is designed to be lightweight, easy to operate, and equipped with advanced sensors and algorithms that allow it to maintain balance while moving around. \n In the medical sector, the self-balancing bot can be used to transport medical equipment and supplies,reducing the risk of injury to both the patient and the healthcare provider.The robot can be programmed to perform a range of tasks, such as monitoring patient vitals, delivering medications, and assisting with patient care.',
        link: '#',
    }
];

const RMI2022 = () => {
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
                <h1>RMI 2022</h1>
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

export default RMI2022