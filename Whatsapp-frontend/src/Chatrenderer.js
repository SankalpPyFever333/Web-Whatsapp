import React from 'react'
import './Chatrenderer.css'
import DoneAllIcon from "@mui/icons-material/DoneAll";
function Chatrenderer() {
  return (
    <div className="ChatStyle">
      <p className="chat_message chat_reciever">
        I love you Mussu
        <span className="chat_timestamp">{new Date().toUTCString()}</span>
        <DoneAllIcon />
      </p>
    </div>
  );
}

export default Chatrenderer
