import React from 'react'
import './Chatrenderer.css'
import DoneAllIcon from "@mui/icons-material/DoneAll";
function Chatrenderer({messages}) {
  return (
    <div className="ChatStyle">
      {
        messages.map((message)=>{
          return (
            // adding the chat_reciever class only when the reciever is true.
            <p
              className={`chat_message ${message.receiver && "chat_reciever"} `}
            >
              {message.message}
              <span className="chat_timestamp">{message.timestamp}</span>
              <DoneAllIcon />
            </p>
          );
        })
      }
    </div>
  );
}

export default Chatrenderer
