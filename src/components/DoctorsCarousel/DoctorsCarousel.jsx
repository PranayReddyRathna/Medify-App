import React from 'react';
import styles from './DoctorsCarousel.module.css'
import doctor from '../../assets/doctor.png';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png'
import doctor4 from '../../assets/doctor4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function DoctorsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.6,
        slidesToScroll: 3,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div>
            <div className={styles.heading}>Our Medical Specialist</div>
            <div  style={{ display: "block", width: "80%", margin: "0 auto" }}>
            <Slider {...settings} sx={{display:'block'}}>
            <div className={styles.doccontainer}>
                    <div  className={styles.docimage}>
                      <img src={doctor4} alt="docimg"/>

                    </div>
                    <div className={styles.doctorname}>Dr. Lesley Hull</div>
                    <div className={styles.role}>Medicine</div>
                  
                </div>
                <div className={styles.doccontainer}>
                    <div  className={styles.docimage}>
                      <img src={doctor} alt="docimg"/>

                    </div>
                      <div>
                    <div className={styles.doctorname}>Dr. Ahmad Khan</div>
                    <div className={styles.role}>Neurologist</div>
                  </div>
                </div>
                   <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor1} alt="docimg" />
                    </div>
                      <div style={{textAlign:'center'}}>
                    <div className={styles.doctorname}>Dr Ankur Sharma</div>
                    <div className={styles.role}>Medicine</div>
                    </div>
                </div>
                <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor2} alt="docimg" />
                    </div>
                      <div style={{textAlign:'center'}}>
                    <div className={styles.doctorname}>Dr. Heena Sachdeva</div>
                    <div className={styles.role}> Orthopedics</div>
                    </div>
                </div>
                <div className={styles.doccontainer}>
                    <div className={styles.docimage}>
                    <img src={doctor3} alt="docimg" />
                    </div>
                    <div style={{textAlign:'center'}}>
                    <div className={styles.doctorname}>Dr. Shan Phan</div>
                    <div className={styles.role}>Neurologist</div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    );
}

export default DoctorsCarousel;