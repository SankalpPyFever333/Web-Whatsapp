import mongoose  from "mongoose";

const whatsappSchema = mongoose.Schema({
      message: String,
      name: String,
      timestamp: String,
      receiver:Boolean
});

const Messages = mongoose.model("messageContent" , whatsappSchema);

export default Messages;
