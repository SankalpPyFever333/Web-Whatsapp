import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export default instance;

// used for making HTTP requests from web browsers and Node.js. It provides a simple and consistent API that allows you to send asynchronous HTTP requests to interact with web services and APIs.

