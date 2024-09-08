import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchResults from '../SearchResults/SearchResults';
import { getStates ,getAllcities,getMedicalcentres} from '../../data';
import { useNavigate, useSearchParams } from 'react-router-dom';
function SearchHospital() {
    const [searchParams,SetsearchParams]=useSearchParams();
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [stateres,setStateRes]=useState([]);
    const [cityres,setCityRes]=useState([]);
    const [hospitals,setHospitals]=useState([]);
    const navigate=useNavigate();
    const handleSearch=async(state,city)=>{
        console.log(state+" "+city)
        
        const data=await getMedicalcentres(state,city);
        setHospitals(data)
        navigate(`/search?state=${state}&city=${city}`)
        console.log(data)
        
    }
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
            console.log(state)
            if(state.length>0)
            {
            const data=await getAllcities(state);
            console.log(data)
            setCityRes(data);
            }
        }
        getcitydata();

    },[state])
    useEffect(()=>{
     const stateparam=searchParams.get("state");
     const cityparam=searchParams.get("city");
      setState(stateparam);
      setCity(cityparam);
      const handleSearch=async(state,city)=>{
        console.log(state+" "+city)
        
        const data=await getMedicalcentres(state,city);
        console.log(data,"OOO")
        setHospitals(data)
      
        console.log(hospitals)
        
    }

    handleSearch(stateparam,cityparam);
      
    },[])
    return (
        <div>
            <div>
                <Navbar state={state} city={city} setState={setState} setCity={setCity} statelist={stateres} citylist={cityres} handleSearch={handleSearch}/>
                <SearchResults hospitals={hospitals} state={state}/>
            </div>
            
        </div>
    );
}

export default SearchHospital;