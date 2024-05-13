import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
 // Import CSS file for styling

function About(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" style={{color:'blue'}}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active style={{color:'red'}}>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                    <div className='row'>
                        <div className="card-container">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s1"src={process.env.PUBLIC_URL+'/images/crop.jpg'} alt="img1" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p>Our platform utilizes cutting-edge image recognition technology to swiftly identify crop diseases from images captured by farmers. By simply uploading a picture of an affected plant, farmers can receive accurate diagnoses within seconds, enabling prompt action to mitigate crop losses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s2"src={process.env.PUBLIC_URL+'/images/crop3.jpg'}alt="img2" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p> Tailoring our recommendations to specific geographical regions, we provide localized solutions to crop disease challenges. By considering local climate, soil conditions, and prevalent pathogens, we empower farmers with actionable insights that are finely tuned to their unique agricultural landscapes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s3"src={process.env.PUBLIC_URL+'/images/crop5.jpg'} alt="img3" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p>Our platform offers comprehensive profiles for a wide range of crop diseases, including detailed information about symptoms, causes, and recommended treatment options. By arming farmers with knowledge, we empower them to make informed decisions to protect their crops effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s4"src={process.env.PUBLIC_URL+'/images/crop7.jpeg'}alt="img4" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p> Fostering collaboration and knowledge-sharing among farmers, our platform hosts an interactive community where users can exchange insights, experiences, and best practices related to crop disease management. By tapping into the collective wisdom of the farming community, farmers can benefit from shared expertise and innovative solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s5"src={process.env.PUBLIC_URL+'/images/crop6.jpg'} alt="img5" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p>In addition to automated disease detection, our platform offers access to expert consultation services, where farmers can seek guidance from agronomists and plant pathologists. By leveraging expert insights, farmers can gain deeper understanding and personalized recommendations to address complex disease challenges.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-front">
                                <img id="s6"src={process.env.PUBLIC_URL+'/images/crop4.jpg'} alt="img6" style={{'width': 370, 'height': 200}}/>
                                </div>
                                <div className="card-back">
                                    <p>Committed to advancing agricultural technology, we continuously innovate and enhance our platform with the latest advancements in machine learning and artificial intelligence. By staying at the forefront of technological innovation, we ensure that farmers have access to state-of-the-art tools for disease detection and crop protection.</p>
                                </div>
                            </div>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default About;
