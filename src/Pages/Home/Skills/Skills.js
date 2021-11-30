import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import './Skills.css';

const Skills = () => {
    return (
        <Container id="skill">
            <div class="professional-experience row">
                <div class="work-experience col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card">
                        <div class="card-icon">
                            <FaBriefcase className="icon rounded-img p-2" />
                            {/* <!-- <img class="rounded-img" src="images/work.png" alt="">   --> */}
                        </div>
                        <div class="card-title">
                            <h4>VOLUNTEER EXPERIENCE</h4>
                        </div>
                        <div class="card-description">
                            <ol>
                                <li>
                                    <strong>Session management team</strong><br/>
                                    14/02/2020–16/02/2020 <br/>
                                    2nd International Conference on Cyber Security and Computer Science (ICONCS 2020)
                                    <br/>
                                    Daffodil International University, Dhaka (Bangladesh) <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Team colabration</strong> <br/>
                                    01/07/2019–02/08/2019 <br/>
                                    Korean ICT volunteer Project Team <br/>
                                    Daffodil International University, Dhaka (Bangladesh) <br/>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>


                <div class="education col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card">
                        <div class="card-icon">
                            {/* <!-- <i class="fa fa-briefcase fa-2x" aria-hidden="true"  style="font-size:120px;color:white"></i> --> */}
                            <FaGraduationCap className="icon rounded-img p-2" />                            {/* <!-- <img class="rounded-img" src="images/book.png" alt="">   --> */}
                        </div>
                        <div class="card-title">
                            <h4>PROFESSIONAL TRAINING</h4>
                        </div>
                        <div class="card-description">
                            <ol>
                                <li>
                                    <strong>Complete Web Development Course With Jhankar Mahbub</strong> <br/>
                                    Issued Nov 2021 <br/>
                                    Programming Hero <br/>
                                    <a href="https://web.programming-hero.com/" target="blank">https://web.programming-hero.com/</a> <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Mobile Forensic</strong> <br/>
                                    Issued Sep 2020 <br/>
                                    Cyber Security Center, DIU <br/>
                                    Daffofil International University <br/>
                                    <a href="https://daffodilvarsity.edu.bd/"
                                        target="blank">https://daffodilvarsity.edu.bd/</a> <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Convolutional Neural Networks</strong> <br/>
                                    Issued Jul 2020<br />
                                    DeepLearning.AI <br/>
                                    Coursera <br/>
                                    <a href="https://www.coursera.org/" target="blank">https://www.coursera.org/</a>
                                    <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Neural Networks and Deep Learning</strong> <br/>
                                    Issued Jul 2020 <br/>
                                    DeepLearning.AI <br/>
                                    Coursera <br/>
                                    <a href="https://www.coursera.org/" target="blank">https://www.coursera.org/</a>
                                    <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Introduction to Cyber Security</strong> <br/>
                                    Issued Jul 2018 <br/>
                                    ISACA student group, DIU <br/>
                                    Daffofil International University <br/>
                                    <a href="https://daffodilvarsity.edu.bd/"
                                        target="blank">https://daffodilvarsity.edu.bd/</a> <br/>
                                </li>
                                <hr/>
                                <li>
                                    <strong>Baseline: Data, ML, AI</strong> <br/>
                                    Issued Jul 2020 <br/>
                                    Qwiklabs <br/>
                                    <a href="https://www.qwiklabs.com/" target="blank">https://www.qwiklabs.com/</a>
                                    <br/>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>


                <div class="skills col-12 col-md-6 col-lg-4" id="skill-id">
                    <div class="card">
                        <div class="card-icon">
                            {/* <!-- <img class="rounded-img" src="images/skill.png" alt="" />                --> */}
                            <FaLaptopCode className="icon rounded-img p-2" />
                        </div>
                        <div class="card-title">
                            <h4>SKILLS</h4>
                        </div>
                        <div class="card-description">
                            <div class="skills-container">
                                <ul>
                                    <li class="react">React.js</li>
                                    <li class="js">JavaSCript</li>
                                    <li class="python">Python</li>
                                    <li class="django">Django</li>
                                    <li class="html">HTML</li>
                                    <li class="css">CSS</li>
                                    <li class="bootstrap">Bootstrap</li>
                                    <li class="node">Node.js</li>
                                    <li class="express">Express.js</li>
                                    <li class="git">GitHub</li>
                                    <li class="jquery">JQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skills;