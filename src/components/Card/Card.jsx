import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import leftarrowbtn from '../../assets/leftarraowbtn.png';
import rightarrowbtn from '../../assets/rightarrowbtn.png';
import styles from './Card.module.css';
import hospitalimg from '../../assets/hospitalicon.png'
import Pill from '../styledComponents/Pill/Pill';
import SlotPill from '../styledComponents/SlotPill/SlotPill';
import { getSlots } from '../../data';

function Card({ hospitalName, location, BookSlot, isFromBooking, timeofbooking, dateofbooking, bookinghospitalname, bookinglocation }) {
    const [open, setIsOpen] = useState(false);
    const swiperRef = useRef(null);
    const [slotsdata, setSlotsdata] = useState([]);
    const [slots, setSlots] = useState({});
    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    const getDaySlots = (day) => {
        setSlots(day);
    };

    useEffect(() => {

        const data = getSlots();
        setSlotsdata(data);
        setSlots(data[0]);
        const slotsdata = localStorage.getItem("slots");
        console.log(slotsdata)
    }, []);

    return (
        <div>
            {isFromBooking ? (
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.card}>
                            <div className={styles.hospitalcontainer}>
                                <img src={hospitalimg} alt="Hospital" />
                                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span className={styles.hospitalname}>{bookinghospitalname}</span>
                                    <span className={styles.placename}>{bookinglocation}</span>
                                    <span className={styles.description}>Smilessence Center for Advanced Dentistry + 1</span>
                                    <span className={styles.description}>more</span>
                                    <span style={{ color: '#787877' }}>---------------------------------</span>
                                    <Pill/>
                                </div>
                            </div>

                            <div className={styles.bookingContainer}>
                                <p className={styles.slotpill}>{timeofbooking}</p>
                                <p className={styles.slotpillgreen}>{dateofbooking}</p>
                            </div>
                            
                            </div>
                            </div>
                        </div>
                     ) : 
                        
                    (

                         <div className={styles.main}>
                            <div className={styles.container}>
                                <div className={styles.card}>
                                    <div className={styles.hospitalcontainer}>
                                        <img src={hospitalimg} alt="Hospital" />
                                        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <span className={styles.hospitalname}>{hospitalName}</span>
                                            <span className={styles.placename}>{location}</span>
                                            <span className={styles.description}>Smilessence Center for Advanced Dentistry + 1</span>
                                            <span className={styles.description}>more</span>
                                            <span style={{ color: '#787877' }}>---------------------------------</span>
                                            <span className={styles.description1}>
                                                <span style={{ fontWeight: '700', fontSize: '1.3rem', color: '#02A401', marginRight: '0.5rem' }}>FREE</span>
                                                <span style={{ fontWeight: '400', fontSize: '1rem', color: '#787887', textDecoration: 'line-through', marginRight: '0.5rem' }}>₹500</span>
                                                Consultation
                                            </span>
                                            <Pill />
                                        </div>
                                    </div>

                                    <div className={styles.bookingContainer}>
                                        <p style={{ color: '#01A400', fontWeight: '500', fontSize: '1.3rem' }}>Available Today</p>
                                        <button className={styles.bookingbtn} onClick={handleClick}>
                                            BOOK FREE Center visit
                                        </button>
                                    </div>
                                    
                                </div>
                                {open && (
                                    <div className={styles.slotbooking}>
                                        <hr />
                                        <div className={styles.topicon}></div>
                                        <div className={styles.carouselsection}>
                                            <Swiper
                                                ref={swiperRef}
                                                slidesPerView={3}
                                                loop={false}
                                                spaceBetween={11}
                                                className={styles.swiperStyles}
                                                breakpoints={{
                                                    767: {
                                                        spaceBetween: 30,
                                                        slidesPerView: 3
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={leftarrowbtn}
                                                    style={{
                                                        height: '50px',
                                                        width: '50px',
                                                        position: 'absolute',
                                                        left: "0",
                                                        top: '0',
                                                        backgroundColor: '#fff',
                                                        marginTop: '1rem',
                                                        zIndex: '10',
                                                    }}
                                                    alt="Left Arrow"
                                                    onClick={() => swiperRef.current.swiper.slidePrev()}
                                                />
                                                {slotsdata.map((ele) => (
                                                    <SwiperSlide className={styles.swiperslide} key={ele.day}>
                                                        <div className={styles.carouselitems} onClick={() => getDaySlots(ele)}>
                                                            <p style={{ color: '#414146', fontWeight: '700', fontSize: '1rem' }}>{ele.day}</p>
                                                            <span style={{ color: '#01A400', fontSize: '1rem', fontWeight: '400' }}>11 slots available</span>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                                <img
                                                    src={rightarrowbtn}
                                                    style={{
                                                        height: '50px',
                                                        width: '50px',
                                                        position: 'absolute',
                                                        right: "0",
                                                        top: '0',
                                                        backgroundColor: '#fff',
                                                        marginTop: '1rem',
                                                        zIndex: '10',
                                                    }}
                                                    alt="Right Arrow"
                                                    onClick={() => swiperRef.current.swiper.slideNext()}
                                                />
                                            </Swiper>
                                        </div>

                                        <div style={{ background: "white", height: "auto" }}>
                                            <div className={styles.dayslots}>
                                                <div className={styles.day}>Morning</div>
                                                {slots.slots?.Morning?.map((ele) => (
                                                    <SlotPill
                                                        key={ele}
                                                        time={ele}
                                                        date={slots?.date}
                                                        BookSlot={BookSlot}
                                                        location={location}
                                                        hospitalName={hospitalName}
                                                    />
                                                ))}
                                            </div>
                                            <hr />
                                            <div className={styles.dayslots}>
                                                <div className={styles.day}>Afternoon</div>
                                                {slots.slots?.Afternoon?.map((ele) => (
                                                    <SlotPill
                                                        key={ele}
                                                        time={ele}
                                                        date={slots?.date}
                                                        BookSlot={BookSlot}
                                                        location={location}
                                                        hospitalName={hospitalName}
                                                    />
                                                ))}
                                            </div>
                                            <hr />
                                            <div className={styles.dayslots}>
                                                <div className={styles.day}>Evening</div>
                                                {slots.slots?.Evening?.map((ele) => (
                                                    <SlotPill
                                                        key={ele}
                                                        time={ele}
                                                        date={slots?.date}
                                                        BookSlot={BookSlot}
                                                        location={location}
                                                        hospitalName={hospitalName}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    )                    
                }      
                   
                   </div> 
                    );
}
 export default Card;