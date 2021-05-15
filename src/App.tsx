import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import Routes from "./components/routes/Routes";
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
