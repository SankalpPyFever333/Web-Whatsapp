import './App.css';
import ChatComp from './ChatComp';
import Sidebar from './Sidebar';


function App() {
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
