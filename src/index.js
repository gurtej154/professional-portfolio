import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact'
import Projects from './components/Projects';
import Section from './components/Section';

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/Professional-portfolio' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

