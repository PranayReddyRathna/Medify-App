import React from 'react';
import doctoricon from '../../assets/doctoricon.png';
import ambulanceicon from '../../assets/ambulanceicon.png';
import hospitalicon from '../../assets/hospitalicon.png';
import pillicon from '../../assets/pillicon.png'
import Drugstoreicon from '../../assets/Drugstoreicon.png'
import Search from "@mui/icons-material/Search";
import styles from './SearchSection.module.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { getStates ,getAllcities,getMedicalcentres} from '../../data';
function SearchSection() {
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [stateres,setStateRes]=useState([]);
    const [cityres,setCityRes]=useState([]);
    const [hospitals,setHospitals]=useState([]);
    const handleState = (e) => {

        setState(e.target.value)
    }
    const handleCity = (e) => {
        setCity(e.target.value)
        console.log(e.target.value);
    }
    const handleSearch=async()=>{
        console.log(state+" "+city)
        navigate(`/search?state=${state}&city=${city}`)
        const data=await getMedicalcentres(state,city);
        setHospitals(data)
        console.log(data)
        
    }
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchstatedata=async()=>{
            const data=await getStates();
            console.log(data)
            setStateRes(data)
        }
     fetchstatedata();
    },[]);
    useEffect(()=>{
        const getcitydata=async()=>{
          
            if(state.length>0)
            {
            const data=await getAllcities(state);
          
            setCityRes(data);
            }
        }
        getcitydata();

    },[state])
    return (
        <div styles={{ zIndex: '1' }}>
            <div className={styles.container}>
                <div className={styles.inputsection}>
                    <div className={styles.inputsearch}>
                        <Search sx={{ color: '#ABB6C7',fontSize:'2.5rem' }} />
                        <select id="state" value={state} className={styles.inputfield} onChange={handleState} >
                                    <option value="">Select a state</option>
                                    {stateres?.length > 0 && stateres.map((state) => (
                                        <option value={state} style={{ color: 'black' }}>
                                            {state}
                                        </option>
                                    ))}
                                </select>                    </div>
                    <div className={styles.inputsearch}>
                        <Search sx={{ color: '#ABB6C7',fontSize:'2.5rem' }} />
                        <select id="city" value={city} className={styles.inputfield} onChange={handleCity} >
                                    <option value="">Select a City</option>
                                    {cityres?.length > 0 ? cityres.map((city) => (
                                        <option value={city} style={{ color: 'black' }}>
                                            {city}
                                        </option>
                                    )) : <> <input type="text" placeholder='City' className={styles.inputfield} /> </>}
                                </select>                    </div>

                    <button className={styles.searchbtn} onClick={handleSearch} sx={{fontSize:'2.5rem'}}>Search</button>

                </div>
                <div className={styles.lookup}>
                    <div className={styles.textstyle}>You may be looking for</div>
                    <div className={styles.arrangeicons}>
                        <div className={styles.iconsection}>
                            <img src={doctoricon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Doctors</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={pillicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '143px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Medical Store</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={hospitalicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Hospitals</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={Drugstoreicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Labs</div>
                        </div>
                        <div className={styles.iconsection}>
                            <img src={ambulanceicon} alt="doctoricon" height="60px" width="60px" />
                            <div style={{ width: '43px', height: '27px', color: '#ABB6C7', fontWeight: '400', fontFamily: 'Poppins', fontSize: '18px', lineHeight: '27px',paddingTop:'2px' }}>Ambulance</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchSection;