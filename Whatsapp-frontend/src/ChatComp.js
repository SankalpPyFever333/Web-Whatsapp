import React, { useState } from "react";
import "./ChatComp.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Chatrenderer from "./Chatrenderer";
import axios from "./axios";
function Chatcomp({ messages }) {
  const [input, setinput] = useState("");

  const handlekeyDown = async (event)=>{
    if(event.key === "Enter"){
      // make a paost request:
      await axios.post("/messages/new" ,{
        message: input,
        name: 'muski',
        timstamp: "6:37pm",
        receiver: true
      });
      setinput("");
    }
  }



  return (
    <div className="chat">
      <div className="Chat_avatar_icons">
        <div className="Avatar_name">
          <Avatar />
          <div className="nameLastseen">
            <h3>Muski</h3>
            <p>Last seen at 9:30 pm</p>
          </div>
        </div>
        <div className="chat_right_icons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* display message and chats: render the message component. */}
      <div className="chatrenderer">
        <Chatrenderer messages={messages} />
      </div>
      {/* message typing begin */}
      <div className="MessageTypingFooter">
        <div className="allIconsContainer">
          <div className="linkEmoji">
            {/* links and emoji button */}

            <SentimentVerySatisfiedIcon />
            <AttachFileIcon />
          </div>
          <div className="TypeMessage">
            <input value={input} onChange={(e)=> setinput(e.target.value)} onKeyDown={handlekeyDown} type="text" placeholder="Type a message" />
          </div>
          <div className="VoiceMessage">
            <IconButton>
              {/* convert voice icon to send icon if we start typing inside the input box. */}
              <KeyboardVoiceIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatcomp;
