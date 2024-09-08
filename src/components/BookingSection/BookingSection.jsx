import React, { useEffect,useState } from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import ad from '../../assets/ad.png'
import styles from './BookingSection.module.css'
function BookingSection() {
    const [searchbookingdata,setSearchbookingdata]=useState([]);
    const [bookingdata,setBookingdata]=useState([]);
    const handleSubmitbooking=()=>{
        console.log(searchbookingdata)
        const query=searchbookingdata.toLowerCase();
       const res=bookingdata.filter((ele)=>ele.hospitalName.toLowerCase().includes(query));
       console.log(res)
       setBookingdata(res)
    }
    useEffect(()=>{
        setBookingdata(JSON.parse(localStorage.getItem("slots")))
    },[])
    
    return (
        <div>
            <Navbar isFromBooking={true} setSearchbookingdata={setSearchbookingdata} handleSubmitbooking={handleSubmitbooking}/>
         <div className={styles.container}>
         <div>
            {bookingdata?.map((ele,index)=>{
                return (<div key={index}>
                 <Card isFromBooking={true} timeofbooking={ele.time} dateofbooking={ele.date} bookinghospitalname={ele.hospitalName} bookinglocation={ele.location}/>
                 </div>)
            }) 
            }
            </div>
            <div className={styles.advertisement}>
                <img src={ad} alt="advertisement" width={500} height={300} style={{ marginTop: "6rem" }} />
            </div>
        </div>
        </div>
    ); 
}

export default BookingSection;