// export default ClubOrbit
import React from 'react'
import "./ClubOrbit.css";
import ecell from "../assets/ecell.png";
import prof from "../assets/prof.png"
import thirdD from "../assets/3d.png"
import spider from "../assets/spider.png"
import rmi from "../assets/rmi.png"
import dc from "../assets/dc.png"
import delta from "../assets/delta.png"
import graphi from "../assets/graphi.png"

import DC180 from "../assets/180.png"
import nak from "../assets/nak.png"
import psi from "../assets/psi.png"
import sigma from "../assets/sigma.png"
// import logo from "../assets/logo.svg";
const ClubOrbit = () => {
    return (
        <div>
            <div class="orbit">

                <ul class="orbit-wrap">

                    <li class="orbit-center">
                        {/* <div className="logo-orbitcenter">
          <img src={logo} alt="Logo" />
        </div> */}
                        <p className='p1'>A growing space of</p>
                        <p>
                            10+ CLUBS
                            <br />
                            50+ PROJECTS
                            <br />
                            200+ FOOTFALLS
                            <br />
                            15+ STARTUPS
                            <br />
                        </p>
                    </li>


                    <li>
                        <ul class="ring-1">


                        </ul>
                    </li>
                    <li>
                        <ul class="ring-2">
                            <li>
                                <a href="https://3d.nitt.edu/" target="_blank">
                                    <img className="orbit-icon" src={thirdD} alt="ThirdD Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://spider.nitt.edu/" target="_blank">
                                    <img className="orbit-icon" src={spider} alt="Spider Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://sigma.nitt.edu/" target="_blank">
                                    <img className="orbit-icon" src={sigma} alt="Sigma Club" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.180dc.org/branches/NIT-Trichy"
                                    target="_blank"
                                >
                                    <img className="orbit-icon" src={DC180} alt="DC180 Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://nakshatra.nitt.edu/#home" target="_blank">
                                    <img className="orbit-icon" src={nak} alt="Nakshatra Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://delta.nitt.edu/" target="_blank">
                                    <img className="orbit-icon" src={delta} alt="Delta Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://psi.nitt.edu/" target="_blank">
                                    <img className="orbit-icon psi" src={psi} alt="Psi Club" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/graphiquenitt/"
                                    target="_blank"
                                >
                                    <img className="orbit-icon" src={graphi} alt="Graphi Club" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="ring-3">
                            <li>
                                <a href="https://rmi.nitt.edu/" target="_blank">
                                    <img className="orbit-icon" src={rmi} alt="RMI Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/dcnitt/" target="_blank">
                                    <img className="orbit-icon dc" src={dc} alt="DC Club" />
                                </a>
                            </li>
                            <li>
                                <a href="https://ecell-nitt.org/" target="_blank">
                                    <img
                                        className="orbit-icon ecell"
                                        src={ecell}
                                        alt="E-Cell Club"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://profnitt.com/" target="_blank">
                                    <img className="orbit-icon prof" src={prof} alt="Prof Club" />
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default ClubOrbit
