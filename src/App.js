import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainContainer } from './containers/MainContainer';
import { Route, Switch } from 'react-router-dom'
import  AboutMe from './components/AboutMe';
import { Portfolio } from './containers/Portfolio';
import { Blogs } from './components/Blogs';
import { TwitterFeed } from './components/TwitterFeed';
import { Weblinks } from './components/Weblinks';


function App() {
  return (
    <div className="App">
      <MainContainer/>
      <Switch>
        <Route path='about-me' component={AboutMe}/>
        <Route path='#portfolio' component={Portfolio}/>
        <Route path='technical-writing' component={Blogs}  />
        <Route path='twitter' component={TwitterFeed} />
        <Route path='contact' components={Weblinks}  />
      </Switch>
    </div>
  );
}

export default App;
