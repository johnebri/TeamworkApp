import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Gifs from './components/Gifs';
import NewArticle from './components/NewArticle';
import NewGif from './components/NewGif';


import Login from './components/Login';
import Dashbaord from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/dashboard' component={Dashbaord} />
              <Route exact path='/articles' component={Articles} />
              <Route exact path='/gifs' component={Gifs} />
              <Route path="/new_article" component={NewArticle} />
              <Route path="/new_gif" component={NewGif} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
