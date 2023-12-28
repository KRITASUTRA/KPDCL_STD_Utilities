import React, { useState } from 'react';

const EditFeeder = ({ onClose }) => {
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
    <div className="edit-panel">
      <h3>Edit Feeder</h3>
      <form>
      <div className="hr-line" />
      <div className='edit-rst-container'>
        <div style={{display:'flex',flexWrap:'wrap',gap:30}}>
        <div style={{width:"12rem"}}> <label>Select Sub Division</label> <br/>
          <input className='input-new-feeder'></input>
          </div>

        <div style={{width:"12rem"}}> <label>Select Receiving Station</label> <br/>
          <input className='input-new-feeder'></input>
          </div>

        <div style={{width:"12rem"}}> <label>Feeder Number</label> <br/>
          <input className='input-new-feeder'></input>
          </div>

        <div style={{width:"12rem"}}> <label>Feeder Name</label> <br/>
          <input className='input-new-feeder'></input>
          </div>

        <div style={{width:"12rem"}}> <label>Feeder Area</label> <br/>
          <input className='input-new-feeder'></input>
          </div>
        <div style={{width:"12rem"}}> <label>Peak Load(Summer)</label> <br/>
          <input className='input-new-feeder'></input>
          </div>
        <div style={{width:"12rem"}}> <label>Peak Load(Winter)</label> <br/>
          <input className='input-new-feeder'></input>
          </div>

        <div style={{width:"12rem"}}> <label>Commissioned on?</label> <br/>
          <input className='input-new-feeder' type='date' placeholder='DD/MM/YYYY' />
          </div>
        <div style={{width:"12rem"}}> <label>Metered?</label> <br/>
        <select className='select-adding' id="metered" value={metered} onChange={handleMeteredChange}>
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
        <div style={{width:"12rem"}}> <label>Essential?</label> <br/>
        <select className='select-adding' id="essential" value={essential} onChange={handleEssentialChange}>
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
        <div style={{width:"12rem"}}> <label>Urban Share [%]</label> <br/>
          <input className='input-new-feeder' type='number' min={0} max={100} step={0.1} defaultValue={0}/>
          </div>
        <div style={{width:"12rem"}}> <label>Rural Share [%]</label> <br/>
          <input className='input-new-feeder' type='number' min={0} max={100} step={0.1} defaultValue={0}/>
          </div>
        </div>
         
      </div>
      <div className="hr-line" />
        <button type="submit" className='editSubmit-btn'>Save Feeder</button> 
        <button className='editCancel-btn' onClick={onClose}>Cancel</button>
      </form>
      
    </div>
  );
};

export default EditFeeder;
