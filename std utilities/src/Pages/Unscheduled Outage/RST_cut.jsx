import React, { useState } from 'react';
import "./RstCut.css"

const RstCut = ({ onClose, onTurnOffSwitch }) => {
  const [metered, setMetered] = useState('');
  const [, setEssential] = useState('No');
  const [cutTime, setCutTime] = useState('');
  const [cutDate, setCutDate] = useState('');

  const handleMeteredChange = (event) => {
    setMetered(event.target.value);
  };

  const handleEssentialChange = (event) => {
    setEssential(event.target.value);
  };
  
  const handleChange = (event) => {
    setMetered(event.target.value);
  };
  const handleTurnOff = () => {
    // Additional logic if needed before turning off the switch
    onTurnOffSwitch();
  };
  
  return ( 
    <div className="edit-panel3">
      <strong >RST Cut</strong>
      <form>
      <div className="hr-line" />
      <div className='edit-rst-container'>
        <div style={{flexWrap:'wrap'}}>
         
        <select className='select-adding' id="metered" value={metered} onChange={handleMeteredChange}>
              <option>Select Cut Reason</option>
              <option value={"Scheduled local containment"}>Scheduled local containment</option>
              <option value={"Maintenance and Repairs"}>Maintenance and Repairs</option>
              <option value={"Weather Conditions"}>Weather Conditions</option>
              <option value={"Equipment Failure"}>Equipment Failure</option>
        </select>

            <div><strong>
            Cut Time
            </strong></div>

            <div className='cut-time'>
            <input className='input-new-feeder-time' type='time' id="meeting-time" placeholder="Select a time" />
            <input className='input-new-feeder-date' type='date' placeholder='DD/MM/YYYY' />
            </div>
        </div>
         
      </div>
      <div className="hr-line submit-reason" />
        <button className='editCancel-btn' onClick={onClose}>Cancel</button>
        <button type="button" className='editSubmit-btn' onClick={handleTurnOff}>Turn Off</button>
      </form>  
    </div>
  );
};

export default RstCut;
