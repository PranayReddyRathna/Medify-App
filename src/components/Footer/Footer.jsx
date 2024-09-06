import React from 'react';
import imgcontent from '../../assets/imgcontent.png';
import seekpng from '../../assets/seekpng.png';
import seekpng2 from '../../assets/seekpng2.png'
import imgcontent2 from '../../assets/imgcontent2.png'
import apple_store from '../../assets/apple_store.png';
import google_play from '../../assets/google_play.png'
import styles from './Footer.module.css';
import arrow from '../../assets/arrow.png';
import logo from '../../assets/logo (1).png'
import youtubeicon from '../../assets/youtubeicon.png';
import twittericon from '../../assets/twittericon.png';
import facebookicon from '../../assets/facebookicon.png';
import pininteresticon from '../../assets/pintresticon.png';
function Footer() {
    return (
        <div>
            <div className={styles.maindiv}>
                <div  className={styles.maincontainer} style={{ display: 'flex', alignItems: 'end', marginLeft: '18rem', marginRight: '8rem' }}>
                    <div className={styles.mobile1}>
                        <img src={seekpng} className={styles.seekimg} alt="seekpng"/>
                        <img src={imgcontent} className={styles.contentimg} alt="seekpng" />
                    </div>
                    <div className={styles.mobile2}>
                        <img src={seekpng2} className={styles.seekimg1} alt="seekpng" />
                        <img src={imgcontent2} className={styles.contentimg1} alt="seekpng"/>
                    </div>
                </div>
                <img src={arrow} style={{ marginRight: '1rem' }} alt="seekpng"/>
                <div>
                    <div className={styles.download}>Download the <br /> <span style={{ color: "var(--primary-main-color)" }}>Medify</span> App</div>
                    <div className={styles.link}>Get the link to download the app</div>
                    <div className={styles.inputdiv}>
                        <input className={styles.inputfield1} value="+91" />
                        <input id="phone" type="tel" name="phone" placeholder="Enter phone number" className={styles.inputfield} />
                        <button className={styles.buttonfield}>Send SMS</button>
                    </div>
                    <div className={styles.store}>
                        <img src={google_play} alt='google play store' style={{ padding: '1rem' }} />
                        <img src={apple_store} alt='apple store' style={{ padding: '1rem' }} />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.footerdiv}>
                    <div style={{ marginLeft: '20rem' }}>
                        <div>
                            <div style={{display:'flex',alignItems:"center"}}>
                            <img src={logo} style={{height:'2rem'}} /><span style={{ color: 'var(--primary-main-color)',marginLeft:'1rem',fontWeight:'700',fontSize:'1.5rem'}}>Medify</span>
                            </div>
                            <div style={{ marginTop: '6rem', marginBottom: '1rem' }}>
                                <img src={youtubeicon} style={{ marginRight: '1rem' }} />
                                <img src={twittericon} style={{ marginRight: '1rem' }} />
                                <img src={facebookicon} style={{ marginRight: '1rem' }} />
                                <img src={pininteresticon} style={{ marginRight: '1rem' }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: '10rem' }}>
                        <ol>About Us</ol>
                        <ol>Our Pricing</ol>
                        <ol>Our Gallery</ol>
                        <ol>Appointment</ol>
                        <ol>Privacy Policy</ol>
                    </div>
                    <div style={{ marginLeft: '10rem' }}>
                        <ol>Orthology</ol>
                        <ol>Neurology</ol>
                        <ol>Dental Care</ol>
                        <ol>Opthalmology</ol>
                        <ol>Cardiology</ol>
                    </div>
                    <div style={{ marginLeft: '10rem' }}>
                        <ol>About Us</ol>
                        <ol>Our Pricing</ol>
                        <ol>Our Gallery</ol>
                        <ol>Appointment</ol>
                        <ol>Privacy Policy</ol>
                   </div>
                     {/* <hr style={{color:'white'}}/> */}
                    <div style={{color:'white',marginLeft:'7rem'}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
                </div>
            </div>
        </div>

    );
}

export default Footer;