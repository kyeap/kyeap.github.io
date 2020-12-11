import React from 'react';
import resumepic from '../images/resumepic.jpg';
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
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

            <div className="section-classic">
                <div className="section-classic-header">Experience</div>
                <ul className="section-classic-ul">
                    <li>
                        <div className="section-classic-li-left">Laravel developer for Illionis </div>
                        <div className="section-classic-li-right">September 2020 - Present</div>
                    </li>
                    <li>
                        <div>Laravel developer for Illionis </div>
                        <div>September 2020 - Present</div>
                    </li>
                    <li>
                        <div>Laravel developer for Illionis </div>
                        <div>September 2020 - Present</div>
                    </li>
                    <li>
                        <div>Laravel developer for Illionis </div>
                        <div>September 2020 - Present</div>
                    </li>
                </ul>

                <div className="section-classic-header" >Education</div>

            </div>

        </div>
    )
}