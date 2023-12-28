import React from 'react';

const EditPanel = ({ onClose }) => {
  return (
    <div className="edit-panel-2">
     <h3>Edit Recieving Station</h3>
      <form >
     <div className='hr-line'/>
     <div className='edit-rst-container'>
      <div style={{display:'flex',flexWrap:'wrap',gap:40}}>
      <div style={{width:"12rem"}}> <label>RST No</label> <br/>
          <input className='input-edit-feeder'></input>
          </div>

      <div style={{width:"12rem"}}> <label>Name of RST</label> <br/>
          <input className='input-edit-feeder'></input>
          </div>

          <div style={{width:"12rem"}}> <label>Feeder</label> <br/>
        <select className='select-adding'>
              <option >Yes</option>
              <option >No</option>
            </select>
          </div>   

        </div>  
      </div>
        
      <div className="hr-line" />
        <button type="submit" className='editSubmit-btn2'>Save Changes</button> 
        <button className='editCancel-btn2' onClick={onClose}>Cancel</button>
      </form>
      
    </div>
  );
};

export default EditPanel;
