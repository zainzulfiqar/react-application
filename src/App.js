import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import UsersAdd from './components/createuser';
import Viewuser from './components/viewuser';
import UpdateUser from './components/updateuser';
import About from './components/about';
import Page404 from './components/page404';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css'
class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            
            <Header/>
            <Switch>
            <Route path='/adduser' component={UsersAdd}/>
            <Route path='/about' component={About}/>
            <Route path='/updateUser' component={UpdateUser}/>
            <Route  exact path='/' component={Viewuser}/>
            <Route path='/' component={Page404}/>

            </Switch>
                <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    );

  }

}

export default App;