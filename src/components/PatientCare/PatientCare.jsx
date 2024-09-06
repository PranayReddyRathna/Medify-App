import React from 'react';
import callicon from '../../assets/callicon.png';
import styles from './PatientCare.module.css'
import doccare1 from '../../assets/doccare1.png';
import doccare2 from '../../assets/doccare2.png';
import tickicon from '../../assets/tickicon.png'
function PatientCare() {
    return (
        <div>
        <div className={styles.container}>
            <div style={{paddingRight:"3rem"}}>
                <div style={{borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:'center',background:"white",flexDirection:'column',height:"6rem",width:"15rem",marginBottom:'-10rem',marginLeft:"-2rem",position:"relative"}}>
                    <div style={{textAlign:'center'}}>
                    <img src={callicon} alt="callicon" styles={{height:'15px',width:'15px',PaddingTop:"10px"}}/>
                    <span style={{fontSize:'15px',color:'var(--primary-heading-color)',fontWeight:'500'}}>Free Consultation</span>
                    </div>
                    <p styles={{fontSize:'15px',color:'#77829D'}}>Consultation with the best</p>
                </div>
                <div>
                    <img src={doccare2} className={styles.doc1}/>
                </div>
                <div>
                <img src={doccare1} className={styles.doc2}/>

                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:'flex-start',marginLeft:"1rem"}}>
                <p style={{fontSize:'16px',fontWeight:'600',color:'var(--primary-main-color'}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <p style={{fontWeight:'600',fontSize:"3rem",color:'black'}}>Patient <span style={{color:'var(--primary-main-color)'}}>Caring</span></p>
                <p style={{fontWeight:'500',fontSize:'1.1rem',color:'#77829D'}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                <p style={{color:"black"}} ><img src={tickicon} style={{paddingRight:'1rem'}}/>Stay Updated About Your Health</p>
                <p><img src={tickicon} style={{paddingRight:'1rem'}}/>Manage Your Appointments</p>
                <p><img src={tickicon} style={{paddingRight:'1rem'}}/>Check Your Results Online</p>
            </div>
            </div>
        </div>
    );
}

export default PatientCare;