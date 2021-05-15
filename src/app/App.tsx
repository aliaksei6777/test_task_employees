import React from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import Routes from "../components/Routes/Routes";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
