import React from 'react';
import styles from './HeroSection.module.css'
import logo from '../../assets/logo (1).png'
import doctors from '../../assets/doctors.png'
import SearchSection from '../SearchSection/SearchSection';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import xray from '../../assets/xray.png';
import Stethoscopeicon from '../../assets/Stethoscopeicon.png'
import Drugstoreicon from '../../assets/Drugstoreicon.png';
import Heartratemonitoricon from '../../assets/Heartratemonitoricon.png'
import Heartrateicon from '../../assets/Heartrateicon.png'
import Bloodsampleicon from '../../assets/Bloodsampleicon.png';
import immuneicon from '../../assets/immuneicon.png';
import DoctorsCarousel from '../DoctorsCarousel/DoctorsCarousel';
import PatientCare from '../PatientCare/PatientCare';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import detox from '../../assets/detox.png';
import leeimg from '../../assets/leeimg.png'
import FamilyCare from '../FamilyCare/FamilyCare';
import Faq from '../Faq/Faq';
import {useNavigate} from 'react-router-dom';
function HeroSection() {
    
    const navigate=useNavigate();
    const handleBooking=()=>{
        navigate("/booking");
    }
   
  
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.navbarsection}>
                    <div className={styles.appname}>
                        <img src={logo} alt="logo" />
                        <span>Medify</span>
                    </div>
                    <div className={styles.navbar}>
                        <div>FindDoctors</div>
                        <div onClick={()=>navigate("/search")}>Hospitals</div>
                        <div>Medicines</div>
                        <div>Surgeries</div>
                        <div>Software for Provider</div>
                        <div>Facilities</div>
                        <button type="button" className={styles.bookingbtn} onClick={handleBooking}>My Bookings</button>
                    </div>
                </div>
                <div className={styles.displaysec}>
                    <div className={styles.text}>
                        Skip the travel! Find Online
                        <span>Medical <span>Centers</span></span>
                        <div className={styles.caption}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</div>
                        <button className={styles.centers}>Find Centers</button>
                    </div>
                    <div>
                        <img src={doctors} alt="doctors" className={styles.doctorsimg} />
                    </div>
                </div>
                <SearchSection />

            </div>
            <div className={styles.advcontainer}>
                <div className={styles.advimg}>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className={styles.specialsec}>
                <p>Find By Specialization</p>
                <div className={styles.allignicons}>
                    <div className={styles.indspecialsec}>
                        <img src={xray} alt="img" />
                        <p>X-Ray</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Stethoscopeicon} alt="img" />
                        <p>Primary Care</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Drugstoreicon} alt="img" />
                        <p>Dentistry</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Bloodsampleicon} alt="img" />
                        <p>Blood Test</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={immuneicon} alt="img" />
                        <p>Piscologist</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Heartrateicon} alt="img" />
                        <p>Cardiology</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Drugstoreicon} alt="img" />
                        <p>Laboratory</p>
                    </div>
                    <div className={styles.indspecialsec}>
                        <img src={Heartratemonitoricon} alt="img" />
                        <p>MRI Resonance</p>
                    </div>
                </div>
                <button className={styles.bookingbtn}>View All</button>
            </div>
            <DoctorsCarousel />
            <PatientCare />
            <div >
                <div style={{marginTop:"1.5rem",lineHeight:"1.5rem" ,fontSize: "1rem", fontWeight: '600', color: "#2AA7FF" }}>Blog & News</div>
                <div style={{ fontSize: "3rem", fontWeight: '600', color: "var(--primary-heading-color)", marginTop: "1rem", paddingBottom: "1rem", marginBottom: "1.5rem" }}>Read our Latest News</div>
                <div  className={styles.newscard}>
                   
                        <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="detox"
                                height="250"
                                image={detox}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#77829D", fontSize: "1.3rem" }}>
                                    Medical |  March 31,2022
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "var(--primary-heading-color)", fontSize: "16px", fontWeight: "600" }}>
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>
                                <Typography sx={{ marginLeft: "0rem", display: "flex", alignItems: "flex-end" }}>
                                    <img src={leeimg} style={{ width: "40px", height: "40px", marginRight: "1rem", paddingTop: '0.2rem' }} />
                                    <span style={{ fontWeight: '600', color: 'var(--primary-heading-color)' }}>Rebecca Lee</span>
                                </Typography>
                            </CardContent>
                        </Card>
                   
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="detox"
                                height="250"
                                image={detox}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#77829D", fontSize: "1.3rem" }}>
                                    Medical |  March 31,2022
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "var(--primary-heading-color)", fontSize: "16px", fontWeight: "600" }}>
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>
                                <Typography sx={{ marginLeft: "0rem", display: "flex", alignItems: "flex-end" }}>
                                    <img src={leeimg} style={{ width: "40px", height: "40px", marginRight: "1rem", paddingTop: '0.2rem' }} />
                                    <span style={{ fontWeight: '600', color: 'var(--primary-heading-color)' }}>Rebecca Lee</span>
                                </Typography>
                            </CardContent>
                        </Card>
                   
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="detox"
                                height="250"
                                image={detox}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#77829D", fontSize: "1.3rem" }}>
                                    Medical |  March 31,2022
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "var(--primary-heading-color)", fontSize: "16px", fontWeight: "600" }}>
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>
                                <Typography sx={{ marginLeft: "0rem", display: "flex", alignItems: "flex-end" }}>
                                    <img src={leeimg} style={{ width: "40px", height: "40px", marginRight: "1rem", paddingTop: '0.2rem' }} />
                                    <span style={{ fontWeight: '600', color: 'var(--primary-heading-color)' }}>Rebecca Lee</span>
                                </Typography>
                            </CardContent>
                        </Card>
                   
                </div>
                <FamilyCare/>
                <Faq/>
               
            </div>

        </div>
    );
}

export default HeroSection;