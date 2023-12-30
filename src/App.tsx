import React from 'react';
import './App.css';
import {Header} from "./components/layouts/Header/Header";
import {Main} from "./components/layouts/Main/Main";
import {Footer} from "./components/layouts/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
