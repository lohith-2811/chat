import React from 'react';
import ChatClient from './components/ChatClient'; // Assuming you saved the component in src/components/ChatClient.js
import './App.css'; // Keep standard CSS for basic setup

function App() {
  return (
    <div className="App" style={appStyle}>
      {/* 
        The ChatClient component handles all the room joining, 
        E2EE simulation, messaging, and image sharing logic.
      */}
      <ChatClient />
    </div>
  );
}

export default App;


// --- Minimal Styling to Center the Chat ---
const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f7f6', // Light background color
};