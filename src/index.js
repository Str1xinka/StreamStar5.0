import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './features/navbar/navbar';
import Layers from './mix_layers//Layers/layers';
import Stream1 from './Preview/stream1/stream1';
import Bottom from './Streams/bottom';
import Q_bank from './mix_layers//q_bank/q_bank';
import Buttons from './mix_layers//_buttons/_buttons';
import Header from './mix_layers//header/header';
import MidleBar from './Preview/midlebar/midlebar'
import Stream2 from './Preview/stream2/stream2'
import Top from './Streams/top'


import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar/>
    <Header/>
    <Layers/>
    <Buttons/>
    <Q_bank/>
    <Stream1/>
    <MidleBar/>
    <Stream2/>
    <Top/>
    <Bottom/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
