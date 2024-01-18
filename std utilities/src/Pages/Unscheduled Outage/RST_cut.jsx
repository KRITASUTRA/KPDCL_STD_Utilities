import React, { useState } from 'react';
import "./RstCut.css"

const RstCut = ({ onClose }) => {
  const [metered, setMetered] = useState('Yes');
  const [essential, setEssential] = useState('No');

  const handleMeteredChange = (event) => {
    setMetered(event.target.value);
  };

  const handleEssentialChange = (event) => {
    setEssential(event.target.value);
  };
  
  const handleChange = (event) => {
    setMetered(event.target.value);
  };
  
  return ( 
    <div className="edit-panel-2">
      <strong >RST Cut</strong>
      <form>
      <div className="hr-line" />
      <div className='edit-rst-container'>
        <div style={{flexWrap:'wrap'}}>
         
        <select className='select-adding' id="metered" value={metered} onChange={handleMeteredChange}>
              <option>Select Cut Reason</option>
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>

            <div style={{width:"12rem", display:'flex',flexWrap:'wrap',flexDirection:'row'}}> <strong>Cut Time</strong> <br/>
            <input className='input-new-feeder' type='time'  />
            <input className='input-new-feeder' type='date' placeholder='DD/MM/YYYY' />
            </div>
        </div>
         
      </div>
      <div className="hr-line" />
        <button className='editCancel-btn' onClick={onClose}>Cancel</button>
        <button type="submit" className='editSubmit-btn'>Turn Off</button> 
        
      </form>
      
    </div>
  );
};

export default RstCut;
