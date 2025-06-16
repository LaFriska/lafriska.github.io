import React from 'react';
import '../App.css';
import Header from "./Header";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
