import React from 'react';
import './Inventory.css';
import img1 from '../assets/Inventory/value_vacuum_pump.jpg';
import img2 from '../assets/Inventory/Vacuum_Pump_motor.jpg';
import img3 from '../assets/Inventory/Vacuum_Pressure_meter.jpg';
import img4 from '../assets/Inventory/DC_supply.jpg';
import img5 from '../assets/Inventory/Multimeter.jpg';
import img6 from '../assets/Inventory/SMD_Rework.jpeg';
import img7 from '../assets/Inventory/Raspberrypi.jpeg';
import img8 from '../assets/Inventory/ArUno.jpg';
import img9 from '../assets/Inventory/capacitor.jpeg';
import img10 from '../assets/Inventory/Ceramic_cap.jpeg';
import img11 from '../assets/Inventory/transistor.jpg';
import img12 from '../assets/Inventory/Jumper_wire_resistor.jpg';
import img13 from '../assets/Inventory/open_valve.jpg';
import img14 from '../assets/Inventory/Quick_Coupler.jpg';
import img15 from '../assets/Inventory/relay.jpg';
import img16 from '../assets/Inventory/Solder_Setup.jpeg';
import img17 from '../assets/Inventory/Wrench.jpg';
import img18 from '../assets/Inventory/wooden_hammer.jpg';
import Footer from '../components/footer'
const inventoryItems = [
  {
    title: 'High Reliability Vacuum Pump (VE 115 N)',
    description:
      'The VE 115 N high-reliability vacuum pump offers efficient, continuous operation for precise vacuum applications, with robust performance and durability.',
    imgSrc: img1,
  },
  {
    title: 'Vacuum Pump Motor (SDF1 - 45)',
    description:
      'The SDF1-45 vacuum pump motor provides reliable drive for vacuum pumps, designed for consistent performance in industrial and laboratory applications.',
    imgSrc: img2,
  },
  {
    title: 'Vacuum Pressure Meter (VE 115N)',
    description:
      'The VE 115N vacuum pressure meter measures low-pressure levels and vacuum conditions with high accuracy, designed for use in precise vacuum applications.',
    imgSrc: img3,
  },
  {
    title: 'DC Power Supply (30V/10A)',
    description:
      'A DC power supply with 30V/10A provides adjustable voltage up to 30 volts and current up to 10 amps for powering and testing electronic devices.',
    imgSrc: img4,
  },
  {
    title: '600V CAT Multimeter',
    description:
      'A 600V CAT-rated multimeter is designed for safely measuring AC/DC voltage, current, and resistance up to 600 volts, offering overload protection for use in high-voltage environments.',
    imgSrc: img5,
  },
  {
    title: '850A SMD Rework Station',
    description:
      'The 850A SMD Rework Station by VAR Tech features a 450W hot air gun with adjustable temperature control (100°C-500°C), ideal for SMD soldering, desoldering, and rework applications.',
    imgSrc: img6,
  },
  {
    title: 'Raspberry Pi (V4)',
    description:
      'The Raspberry Pi 4 is a compact, high-performance single-board computer with a quad-core ARM Cortex-A72 processor, up to 8GB of RAM, dual 4K display support, and multiple connectivity options.',
    imgSrc: img7,
  },
  {
    title: 'Arduino Uno R3 Microcontroller',
    description:
      'The Arduino Uno R3 is an open-source microcontroller board based on the ATmega328P, widely used for beginner-friendly electronics projects and prototyping.',
    imgSrc: img8,
  },
  {
    title: 'Capacitors',
    description:
      'Capacitors store and release electrical energy, commonly used in circuits for filtering and energy storage.',
    imgSrc: img9,
  },
  {
    title: 'Ceramic Capacitors (104 Micro Farad)',
    description:
      'A 104 ceramic capacitor has a capacitance of 100,000 pF (0.1 µF), used for high-frequency applications and filtering in electronic circuits.',
    imgSrc: img10,
  },
  {
    title: 'Transistors (BC 547)',
    description:
      'The BC547 is a NPN bipolar junction transistor used for switching and amplification in electronic circuits, with a maximum collector current of 100 mA and a maximum collector-emitter voltage of 45V.',
    imgSrc: img11,
  },
  {
    title: 'Post Title',
    description:
      'Jumper wires are flexible connectors used for prototyping on breadboards or circuit boards. Resistors, typically rated in ohms (e.g., 10 Ω, 100 kΩ), regulate current flow in circuits, with values ranging from micro-ohms (µΩ) to mega-ohms (MΩ), depending on the application.',
    imgSrc: img12,
  },
  {
    title: 'Open Valve (CT-339)',
    description:
      'The CT-339 open valve is designed for controlling fluid flow in various systems, featuring a durable construction and reliable operation for efficient performance.',
    imgSrc: img13,
  },
  {
    title: 'Quick Coupler and Open Valve Blue/Red (R134a)',
    description:
      'The Quick Coupler and Open Valves (Blue for low-pressure and Red for high-pressure) enable quick connection and disconnection of refrigerant lines in R134a systems.',
    imgSrc: img14,
  },
  {
    title: 'Relay',
    description:
      'A relay is an electrically operated switch that uses an electromagnet to control a circuit, allowing low-current signals to control higher-current loads.',
    imgSrc: img15,
  },
  {
    title: '936A Solder Machine',
    description:
      'The 936A Soldering Station features adjustable temperature control (200°C-480°C), a 60W heating element, and an ESD-safe design for precision soldering tasks.',
    imgSrc: img16,
  },
  {
    title: 'Wrench(Brand - JSW)',
    description:
      'The JSW 10mm-12mm wrench is a hand tool designed for gripping and turning nuts and bolts within the specified size range, known for its durability and precision.',
    imgSrc: img17,
  },
  {
    title: 'Wooden Hammer',
    description:
      'A wooden hammer is a hand tool with a wooden handle and a heavy, flat head, used for striking and shaping materials with precision.',
    imgSrc: img18,
  },
  // Add more items as needed
];

export default function Inventory() {
  return (
    <>
    <div className="inventorypage">
      <div className="mainbox">
        {inventoryItems.map((item, index) => (
          <div className="inventorycard" key={index}>
            <div className="inventorybox">
              <div className="imagebox">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="inventcontentbox">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
