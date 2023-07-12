import React, { useState } from "react";
import "./ChatComp.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Chatrenderer from "./Chatrenderer";
import axios from "./axios";
function Chatcomp({ messages }) {
  const [input, setinput] = useState("");
  const [sendButton, setSendButton] = useState(true);

  const handlekeyDown = async (event)=>{
    if(event.key === "Enter"){
      // make a post request:
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
            <input
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
                // Now change the recording icon when user starts typing to send icon.
                if(e.target.value.length!==0){
                  setSendButton(false);
                }
                else{
                  setSendButton(true);
                }

              }}
              onKeyDown={handlekeyDown}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <div className="VoiceMessage">
            {/* render voice icon if nothing in input and if something is in the input , then render send icon. */}
            {sendButton ? (
              <IconButton>
                <KeyboardVoiceIcon />
              </IconButton>
            ) : (
              <IconButton>
                <SendIcon />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatcomp;
