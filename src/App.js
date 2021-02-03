import { ChatEngine } from 'react-chat-engine';
import './App.css';

import React from 'react'
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="4fa183fb-a727-45d2-9368-7c107271fc14"
        userName="abc"
        userSecret="abc1"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        
            
        />
    )
}

export default App;
