import express from "express";
import mongoose, { mongo } from "mongoose";
import Messages from "../WhatsApp-backend/dbmessages.js";
import cors from "cors";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 9000;


// DB config:
const connection_url =
  "mongodb+srv://CHLbTFYnoprQNwGz:CHLbTFYnoprQNwGz@atlascluster.u8qelrv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
      useUnifiedTopology:true
});

// app config:

const pusher = new Pusher({
  appId: "1628636",
  key: "0f26a6208969ac1996f9",
  secret: "0c7ab86426cfd656c7fd",
  cluster: "ap2",
  useTLS: true,
});

// We use Puhser, bcoz mongoDb is not real-time. So, tomake it so, we use pusher.


// middlewares:
app.use(express.json());     

app.use(cors());




const db = mongoose.connection;
db.once("open" ,()=>{
      console.log("DB is connected");
      const msgCollection = db.collection("messagecontents");
      const changeStream = msgCollection.watch();
      // watch() method returns a ChangeStream object that represents a change in collection in real-time. It allows to monitor and react to that change.
      // It provide methods to interact with it like on(), close(), isClosed() , stream() etc.

      changeStream.on("change" ,(change)=>{
            console.log(`Change type is ${change.operationType}`);
            if(change.operationType === "insert"){
              const messageDetails = change.fullDocument; //This represent the document that was inserted, updated, replaced as a result of chnage event.

              // pusher.trigger(channelName, eventName, eventData);
              pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                recieved: messageDetails.receiver,
              });
            }
            else{
                  console.log("error in triggering pusher!");
            }
      })
})

// once() add a one-tiome listener to the event.



app.post("/messages/new" , (req,res)=>{
      const dbMessage = req.body;

      Messages.create(dbMessage)
      .then((data)=>{
            res.status(201).send(data);
      })
      .catch(error=>{
            res.status(500).send(error);
      })

      
})


app.get("/messages/sync",(req,res)=>{
      
      Messages.find({})
      .then((data)=>{
            res.status(200).send(data);

      })
      .catch(error=>res.status(500).send(error));
})




app.get("/",(req,res)=>{
      res.status(200).send("Hii, I am the home page");
});







app.listen(port , ()=>{
      console.log(`listening on port ${port}`);
});

