import { useEffect, useState } from 'react';
import './App.css';
import ChatComp from './ChatComp';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios"


function App() {
  const {messages, setMessage} = useState([]);
  useEffect(()=>{
    axios.get("/messages/sync")
    .then((response)=>{
      setMessage(response.data);
    })
    .catch((error)=>{
      console.log(`error occured: ${error}`);
    })
  },[]);



  useEffect(()=>{
    const pusher = new Pusher("0f26a6208969ac1996f9", {
      cluster: "ap2",
    });

    // We have install pushser-js
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  },[]);
  return (
    // we are using firebase also for hosting, Authentication.
    // And in backend I am using mongoDb, node and express.
    <div className="app">
      <div className="app_body">
        {/* This has three component: status and call icon , SideBar and chat component */}        
        <Sidebar />
        <ChatComp />
      </div>
    </div>
  );
}

export default App;
