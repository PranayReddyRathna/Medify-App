import React from 'react';
import styles from './FamilyCare.module.css';
import hospitalsicon from '../../assets/hospitalicon.png'
import drugstoresicon from '../../assets/drugstoresicon.png';
import labs from '../../assets/labs.png';
import safeicon from '../../assets/safeicon.png'
import expertsicon from '../../assets/expertsicon.png'
function FamilyCare() {
    return (
        <div className={styles.container} style={{ background: 'var(--primary-background-color)' }}>
            <div style={{display:'flex',flexDirection:'column',alignItems:"flex-start",paddingRight:'10rem',paddingLeft:'5rem'}}>
                <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--primary-main-color)' }} >CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</span>
                <span style={{ fontSize: "3.5rem", color: 'var(--primary-heading-color)', fontWeight: '600' }}>Our Families</span>
                <p style={{ color: "#77829D", fontSize: "1rem" ,lineHeight:'2.5rem'}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div style={{display:'flex',gap:'2rem',marginTop:'2rem'}}>
                <div style={{display:'flex',gap:'2rem',marginTop:'2rem',marginBottom:'2rem',flexDirection:'column'}}>
                    <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: 'auto', width: '10rem', borderRadius: '1rem', padding: '2rem', background: 'white', boxShadow: "0px 15px 45px -5px #00000012" }}>
                        <img src={hospitalsicon} />
                        <span style={{ fontWeight: "600", color: 'var(--primary-heading-color)', fontSize: '2rem', padding: '1rem' }}>200+</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: '500', fontColor: '#77829D' }}>Hospitals</span>
                    </div>
                    <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: 'auto', width: '10rem', borderRadius: '1rem', padding: '2rem', background: 'white', boxShadow: "0px 15px 45px -5px #00000012" }}>
                        <img src={drugstoresicon} />
                        <span style={{ fontWeight: "600", color: 'var(--primary-heading-color)', fontSize: '2rem', padding: '1rem' }}>200+</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: '500', color: '#77829D' }}>Hospitals</span>
                    </div>
                </div>
                <div  style={{display:'flex',gap:'2rem',flexDirection:'column'}}>
                    <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: 'auto', width: '10rem', borderRadius: '1rem', padding: '2rem', background: 'white', boxShadow: "0px 15px 45px -5px #00000012" }}>
                        <img src={expertsicon} />
                        <span style={{ fontWeight: "600", color: 'var(--primary-heading-color)', fontSize: '2rem', padding: '1rem' }}>200+</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: '500', color: '#77829D' }}>Hospitals</span>
                    </div>
                    <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: 'auto', width: '10rem', borderRadius: '1rem', padding: '2rem', background: 'white', boxShadow: "0px 15px 45px -5px #00000012" }}>
                        <img src={safeicon} />
                        <span style={{ fontWeight: "600", color: 'var(--primary-heading-color)', fontSize: '2rem', padding: '1rem' }}>200+</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: '500', color: '#77829D' }}>Hospitals</span>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

export default FamilyCare;