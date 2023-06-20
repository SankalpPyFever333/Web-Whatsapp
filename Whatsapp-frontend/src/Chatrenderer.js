import React from 'react'
import './Chatrenderer.css'
import DoneAllIcon from "@mui/icons-material/DoneAll";
function Chatrenderer() {
  return (
    <div className='ChatStyle'>
      <div className="messageAndTime">
            {/* make p and time tick in one div */}
            <p>Abhi Aur milengi</p>
            <div className="timetick">
                  <span>9:30 am</span>
                  <span>
                        <DoneAllIcon/>
                  </span>
            </div>


            
      </div>
      
    </div>
  )
}

export default Chatrenderer
