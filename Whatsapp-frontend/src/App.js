import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios"
import Chatcomp from './ChatComp';

function App() {
  const [messages, setMessage] = useState([]);
  useEffect(()=>{
    const fetchdata = async ()=>{
      try{
        const response = await axios.get("/messages/sync");
        setMessage(response.data);
      }
      catch(error){
        console.log(`error occured: ${error}`);
      }

    }

    fetchdata();
  },[]);



  useEffect(()=>{
    const pusher = new Pusher("0f26a6208969ac1996f9", {
      cluster: "ap2",
    });

    // We have install pushser-js

    // When you subscribe to a channel, you can listen for events triggered on that channel and perform actions accordingly.
    // Inisde the bind(), we give the event name(here "inserted"), When that event occured in the subscribed channel, we listen it using bind() method.
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessages) {
      alert(JSON.stringify(newMessages));
      setMessage([...messages, newMessages]);
      // ... is spread operator
    });

    // clean-up function: This is used to ensure that all the resources, event listeners, timers are released when they are not in use. You should return that function.
    
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
      // releasing the resources.

    }


  },[messages]); // We should include message as a dependency in this, this will triggered whenever the messages state variable changes.
  console.log(messages);

  // if(messages.length == 0){
  //   return <h3>Loading...</h3>
  // }

  return (
    // we are using firebase also for hosting, Authentication.
    // And in backend I am using mongoDb, node and express.
    <div className="app">
      <div className="app_body">
        {/* This has three component: status and call icon , SideBar and chat component */}
        <Sidebar />
        <Chatcomp messages={messages} />
        {/* passing message as a prop to chat cmponent. */}
      </div>
    </div>
  );
}

export default App;
