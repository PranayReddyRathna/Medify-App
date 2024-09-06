import React from 'react';
import likeicon from '../../../assets/likeicon.png'
function Pill(props) {
    return (
        <div style={{background:'#00A500',width:'2.5rem',height:'1.5rem',display:"flex",alignItems:'center',borderRadius:'3px',justifyContent:"space-around",marginTop:'1.2rem'}}>
            <img src={likeicon} style={{height:"1rem",paddingLeft:"0.2rem"}}/>
            <span style={{color:'white'}}>5</span>
        </div>
    );
}

export default Pill;