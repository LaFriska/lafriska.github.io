import React from 'react';
import '../css/App.css';
import Header from "./Header";
import AboutMe from "./AboutMe";

function App() {

    const style = {
        margin: '1rem 8rem'
    }

    return (
        <div className="app" style={style}>
            <Header />
            <AboutMe/>
        </div>
    );
}

export default App;
