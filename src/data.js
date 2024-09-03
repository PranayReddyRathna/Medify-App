
import axios from "axios";
var url="https://meddata-backend.onrender.com/";
export const getStates=async()=>{
    try{
        const response=await axios.get(`${url}states`)
        const data1=response;
        console.log(data1)
        return data1.data;
    }
    catch(e)
    {
        console.error(e);
    }
}
export const getAllcities=async(state)=>{
    try{
        const response=await axios.get(`${url}cities/${state}`)
        const data1=response;
        return data1.data;
    }
    catch(e){
        console.error(e);
    }
}

export const getMedicalcentres=async(state,city)=>{
    try{
        const response=await axios.get(`${url}data?state=${state}&city=${city}`)
        const data1=response;
        return data1.data;
    }
    catch(e){
        console.error(e);
    }
}


export function getDayFromNo  (no)  {
    switch (no) {
      case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tuesday"
      case 3: return "Wednesday"
      case 4: return "Thusrday"
      case 5: return "Friday"
      case 6: return "Saturday"
      default: return;
    }
  }
  export function getHourFromNo  (no)  {
    if (no > 0 && no <= 12)
      return no;
    return no % 12
  }
  
  export function getMonthFromNo(no){
    switch (no) {
      case 0: return "Jan"
      case 1: return "Feb"
      case 2: return "Mar"
      case 3: return "Apr"
      case 4: return "May"
      case 5: return "Jun"
      case 6: return "Jul"
      case 7: return "Aug"
      case 8: return "Sep"
      case 9: return "OCT"
      case 10: return "Nov"
      case 11: return "Dec"
      default: return;
    }
  }
  export function getSlots  ()  {
    let current = new Date()
    let slotsList = []
    let dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
    // let time = current.getHours
    
    let slot = {
      date: dt, day: "Today", slots: getSlot(current) 
    }
    slotsList.push({...slot})
    current=new Date(current.getTime()+1000*60*60*24)
    dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
    let slot1 = {
      date: dt, day: "Tommorow", slots: getSlot(current)
    }
    slotsList.push({...slot1})
    
    for(let i=3;i<=7;i++){
      current=new Date(current.getTime()+1000*60*60*24)
      dt = current.getFullYear() + '-' + getMonthFromNo(current.getMonth()) + '-' + current.getDate()
      let slot = {
        date: dt, day: getDayFromNo(current.getDay()), slots: getSlot(current)
      }
      slotsList.push({...slot})
    }
    
    return slotsList
  }
  

  
  export function getSlot(date = new Date()) {
    let current = new Date()
  if (date.getDate() > current.getDate()) {
    return {
      Morning: ['10:30AM', '11:00AM', '11:30AM'],
      Afternoon: ['12:00PM', '12:30PM', '01:30PM', '02:00PM', '02:30PM', '03:30PM',],
      Evening: ['5:00PM', '5:30PM', '6:30PM', '07:30PM',]
    }
  }
  if (date.getDate() === current.getDate()) {
    let Morning = []
    let Afternoon = []
    let Evening = []

    for (let i = date.getHours() + 1; i < 12; i++) {
      if (i >= 10) {
        Morning.push(`${i}:00AM`)
        Morning.push(`${i}:30AM`)
      }
    }
    for (let i = date.getHours() + 1; i < 17; i++) {
      if (i >= 12) {
        Afternoon.push(`${getHourFromNo(i)}:00PM`)
        Afternoon.push(`${getHourFromNo(i)}:30PM`)
      }
    }
    for (let i = date.getHours() + 1; i < 20; i++) {
      if (i >= 17) {
        Evening.push(`${getHourFromNo(i)}:00PM`)
        Evening.push(`${getHourFromNo(i)}:30PM`)
      }
    }
    return {
      Morning: Morning,
      Afternoon: Afternoon,
      Evening: Evening
    }
  }
}
