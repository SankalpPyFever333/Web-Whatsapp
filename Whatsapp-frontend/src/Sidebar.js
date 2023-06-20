import React from 'react'
import "./Sidebar.css"
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Sidebarchats from './Sidebarchats';
function Sidebar() {
  /*
      Sidebar contain a header having avatar and other items.
      It has a search box.
      and then it has all the new chats section.
 */
  return (
    <div className="sidebar">
      {/* sidebar header */}

      <div className="sidebar_header">
        <Avatar src="	https://images.unsplash.com/photo-1633354931133-27…ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon/>
          <input type="text" placeholder='Search or start new chat' />
        </div>
      </div>
      <div className="sidebar_chats">
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
      </div>
    </div>
  );
}

export default Sidebar
