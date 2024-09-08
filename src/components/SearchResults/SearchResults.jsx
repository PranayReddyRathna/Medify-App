import React from 'react';
import { useEffect } from 'react';
import uncoltick from '../../assets/uncoltick.png';
import Card from '../Card/Card';
import styles from './SearchResults.module.css';
import ad from '../../assets/ad.png';
import { useNavigate } from 'react-router-dom';




function SearchResults({ hospitals }) {
    const navigate=useNavigate("")
    const BookSlot = (time, date, location, hospitalName) => {
        const slotData = {
            time,
            date,
            location,
            hospitalName
        };
        let existingData = JSON.parse(localStorage.getItem('slots')) || [];
        existingData.push(slotData);
        localStorage.setItem('slots', JSON.stringify(existingData));
      navigate("/booking")

    };
    useEffect(()=>{

    },[])
    return (
        <div className={styles.containers}>
            <div>
                <div className={styles.container}>
                    <p style={{ fontWeight: "500", color: "#000000", fontSize: '1.8rem' }}>
                        {hospitals.length} Medical centers available in {hospitals[0]?.State}
                    </p>
                    <p>
                        <img src={uncoltick} alt="tick" />
                        <span style={{ color: '#787887', fontWeight: '400', fontSize: '1.2rem' }}>
                            Book appointments with minimum wait-time & verified doctor details
                        </span>
                    </p>
                </div>

                {hospitals?.map((hospital, index) => (
                    <Card
                        key={index}
                        hospitalName={hospital['Hospital Name']}
                        location={`${hospital.Address}, ${hospital.City}, ${hospital.State} ${hospital['ZIP Code']}`}
                        BookSlot={BookSlot} // Passing the function here
                    />
                ))}
            </div>

            <div className={styles.advertisement}>
                <img src={ad} alt="advertisement" width={500} height={300} style={{ marginTop: "11rem" }} />
            </div>
        </div>
    );
}

export default SearchResults;