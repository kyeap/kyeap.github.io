import React from 'react';
import resumepic from '../images/resumepic.jpg';
import { FaGithub, FaLinkedin, FaPhoneSquareAlt, FaRegFilePdf } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import cv from "../download/CV.pdf";
import '../style/main.scss';

export default () => {
    return (
        <div>
            <div id="resume">
                <div className="container-resume">
                    <div className="column">
                        <div className="resume-circle">
                            <img src={resumepic} />
                            <div className="resume-circle-footer-name">Yeap, Ken Joo</div>
                            <div className="container-resume-circle-footer">
                                {/* <div className="container-resume-circle-footer-block"> */}
                                <div className="resume-circle-footer-link">
                                    <FaPhoneSquareAlt /> +44 0792 8888 675
                                    </div>
                                <div className="resume-circle-footer-link desktop">
                                    <a href={`mailto:kenjoo.yeap@gmail.com`}>
                                        <HiMail /> kenjoo.yeap@gmail.com
                                        </a>
                                </div>
                                <div className="resume-circle-footer-link mobile">
                                    <a href={`mailto:kenjoo.yeap@gmail.com`}>
                                        <HiMail /> kenjoo.yeap
                                        </a>
                                    <div class="mobile-gmail">@gmail.com</div>
                                </div>

                                <div className="resume-circle-footer-link desktop">
                                    <a href="https://www.linkedin.com/in/kenjoo-yeap/">
                                        <FaLinkedin /> username: kenjoo-yeap
                                        </a>
                                </div>
                                <div className="resume-circle-footer-link mobile">
                                    <a href="https://www.linkedin.com/in/kenjoo-yeap/">
                                        <FaLinkedin /> kenjoo-yeap
                                        </a>
                                </div>
                                <div className="resume-circle-footer-link desktop">
                                    <a href="https://github.com/kyeap">
                                        <FaGithub /> username: kyeap
                                        </a>
                                </div>
                                <div className="resume-circle-footer-link mobile">
                                    <a href="https://github.com/kyeap">
                                        <FaGithub /> kyeap
                                        </a>
                                </div>

                                <div className="resume-circle-footer-link desktop">
                                    <a href={cv}> <FaRegFilePdf /> Download CV</a>
                                </div>

                                <div className="resume-circle-footer-link mobile">
                                    <a href={cv}> <FaRegFilePdf /> Download CV</a>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="column mid">
                        <div className="section-resume">
                            <div className="section-resume-title">Experience</div>
                            <div className="section-resume-subTitle">Mobile Apps</div>
                            <ul>
                                <li className="list-resume">E-commerce platform for B2B</li>
                                <li className="list-resume">Productivity app for business workflow</li>
                            </ul>
                            <div className="section-resume-subTitle">Websites</div>
                            <ul>
                                <li className="list-resume">Introduction and blog site for COOP</li>
                                <li className="list-resume">Charitable foundation website</li>
                                <li className="list-resume">Marketing site with sales funnel</li>
                                <li className="list-resume">Client data management site</li>
                                <li className="list-resume">Wedding invitation website </li>
                                <li className="list-resume">Social Media Website</li>
                            </ul>
                            <div className="section-resume-subTitle">Software Tools</div>
                            <ul>
                                <li className="list-resume">Predictive energy control for building</li>
                            </ul>

                            <div className="section-resume-subTitle">Engineering</div>
                            <ul>
                                <li className="list-resume">Developed enginnering tools</li>
                                <li className="list-resume">Data analysis</li>
                                <li className="list-resume">Technical support for virtual power plants</li>
                            </ul>

                            <div className="section-resume-subTitle">Sales</div>
                            <ul>
                                <li className="list-resume">Key account manager</li>
                            </ul>
                        </div>


                    </div>

                    <div className="column right">
                        <div className="section-resume">
                            <div className="section-resume-title">Education</div>
                            <div className="section-resume-subTitle">Energy Engineering (MSc)</div>
                            <div className="section-resume-uni">RWTH Aachen University, Germany</div>

                            <div className="section-resume-subTitle">Mechanical Engineering (BSc)</div>
                            <div className="section-resume-uni">University of Duisburg-Essen, Germany</div>
                        </div>

                        <div className="section-resume">
                            <div className="section-resume-title">Other Experiences</div>
                            <ul>
                                <li className="list-resume">House church pioneer and planter</li>
                                <li className="list-resume">Co-organize conferences up to 500 participants</li>
                                <li className="list-resume">Swim trainer for refugees</li>
                                <li className="list-resume">Organized blood donation campaign</li>
                            </ul>
                        </div>

                        <div className="section-resume">
                            <div className="section-resume-title">Tools</div>
                            <div className="container-tag">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">JavaScript</div>
                                <div className="tag">PHP</div>
                                <div className="tag">Python</div>
                                <div className="tag">React Native</div>
                                <div className="tag">React</div>
                                <div className="tag">Laravel</div>
                                <div className="tag">MySQL</div>
                                <div className="tag">Postgresql</div>
                                <div className="tag">GraphQL</div>
                                <div className="tag">Git</div>
                                <div className="tag">NodeJS</div>
                                <div className="tag">Axios</div>
                                <div className="tag">iOS</div>
                                <div className="tag">Android</div>
                                <div className="tag">Heroku</div>
                            </div>
                        </div>

                        <div className="section-resume">

                            <div className="section-resume-title">Languages</div>
                            <ul>
                                <li className="list-resume">English</li>
                                <li className="list-resume">German</li>
                                <li className="list-resume">Mandarin</li>
                                <li className="list-resume">Malay</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section-classic">
                <div class="header"> Work Experience </div>
                <div class="title-container">
                    <div class="title">FREELANCE</div>
                    <div class="date"> 09/2019 - today</div>
                </div>

                <div class="sub-title">Software developer for Uniper SE (Energy company)
                    <div className="tag">OOP</div>
                    <div className="tag">Energy Trading</div>
                </div>
                <ul>
                    <li>Maintained and develop software for energy trading based on business requirements</li>
                    <li>Develop tools for CSV typed data migration using postgresql</li>
                </ul>

                <div class="sub-title">Laravel Developer for Illionis (Commercial app)
                    <div className="tag">Laravel</div>
                    <div className="tag">CMS</div>
                </div>
                <ul>
                    <li>Maintained and develop features needed for the CMS</li>
                </ul>

                <div class="sub-title">React-Native developer for Twine-Monolith (Free to community businesses)
                    <div className="tag">React Native</div>
                    <div className="tag">API</div>
                    <div className="tag">HapiJS</div>
                </div>
                <ul>
                    <li>Developed mobile app with a team of designer and react-native developers</li>
                    <li>Built reusable react native components such as helpSlide and award badges templates</li>
                    <li>Developed API endpoints in controller to get data from postgresql using Knex</li>
                    <li> Developed postgresql database structure for push notification and award badges</li>
                    <li>Deployment in Heroku (Server) and Expo (App)</li>
                </ul>

                <div class="sub-title">Fullstack developer for Bemyownboss (Digital marketing company)
                    <div className="tag">HTML</div>
                    <div className="tag">CSS</div>
                    <div className="tag">JavaScript</div>
                    <div className="tag">PHP</div>
                    <div className="tag">Sales Funnel</div>
                </div>
                <ul>
                    <li>Developed the frontend and backend for the various customer using CSS, HTML, JavaScript and PHP</li>
                    <li>Intergrated auto emailing system with mailchimp API using PHP</li>
                    <li>Payment with stripe using PHP</li>
                    <li>Help customer digitalize and systemize their business with sales funnel strategy</li>
                </ul>

                <div class="sub-title">Fullstack developer for Sooann-solutions(Insurance agency)
                    <div className="tag">HTML</div>
                    <div className="tag">CSS</div>
                    <div className="tag">JavaScript</div>
                    <div className="tag">PHP</div>
                    <div className="tag">CMS</div>
                </div>
                <ul>
                    <li>developed the frontend using CSS, HTML</li>
                    <li>Developed content management system with PHP and MySQL</li>
                </ul>

                <div class="sub-title">Angular Developer for Weco (Social News Company)
                    <div className="tag">Angular</div>
                </div>
                <ul>
                    <li>Implement front-end design with Angular</li>
                </ul>

                <div class="title-container">
                    <div class="title">AEDIFION LTD</div>
                    <div class="date">  06/2018 - 02/2019</div>
                </div>

                <div class="sub-title">Advanced control engineer</div>
                <ul>
                    <li> Build a Model Predictive Control Software to control building energy system with python and weather forecast API</li>
                    <li> Lowered time needed to understand the Cloud application through readability and documentations</li>
                    <li> Maintained training quality and improved support structure of helping new employers</li>
                </ul>

                <div class="title-container">
                    <div class="title">Trianel LTD</div>
                    <div class="date">04/2017 - 04/2018</div>
                </div>

                <div class="sub-title">Engineer</div>
                <ul>
                    <li> Developed tools that enhance efficiency and enable data analysis and technical support for virtual power plants.</li>
                    <li> Developed monitoring tools using excel to lower monitoring time and increase efficiency for troubleshooting with clients</li>
                    <li> Achieved 90 % renewal of power plants in pool</li>
                    <li> Expanded customer base to increase total power reserve in pool</li>
                </ul>

                <div class="title-container">
                    <div class="title">Siemens AG</div>
                    <div class="date"> 03/2013 - 09/2014</div>
                </div>

                <div class="sub-title">Student Engineer</div>
                <ul>
                    <li> Using visual basic to automatize and reduce management workload</li>
                    <li> Graphical construction for Gas Turbine Fuel Changeover processes and overview of turbine model from P 	&amp; ID.</li>
                    <li> Bachelor thesis </li>
                </ul>

                <div class="header"> Education </div>
                <div class="title-container">
                    <div class="title">Masters in Renewable Energy </div>
                    <div class="date">03/2015 – 02/2019</div>
                </div>
                <div class="sub-title">RWTH Aachen University, Germany</div>
                <div class="content">
                    Master Thesis: Proposed refined control method of energy control in building with big thermal mass
                    using weather forecast data that has proven through application on actual building to reduce energy
                    consumption.
                </div>

                <div class="title-container">
                    <div class="title">Bachelor of Science in Mechanical Engineering </div>
                    <div class="date">10/2010- 01/2014</div>
                </div>
                <div class="sub-title">University of Duisburg-Essen, Germany</div>
                <div class="content">
                    Bachelor Thesis: Reduced cost of Gas Turbine Auxiliary by replacing expensive flow dividers with simple
                    solution justified by designed of a 2D simulation capable of being converted to a 3D test bench.
                </div>
            </div>
        </div>
    )
}


