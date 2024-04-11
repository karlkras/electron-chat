import React, {useEffect} from "react";
import {Provider} from "react-redux";
import HomeView from "../views/Home";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "../components/Navbar";
import SettingsView from "../views/Settings";
import RegisterView from "../views/Register";
import WelcomeView from "../views/Welcome";
import ChatView from "../views/Chat";
import { listenToAuthChanges } from "../actions/auth";

import initStore from "../store";

const store = initStore();
const App = () => {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <div className='content-wrapper'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WelcomeView/>}/>
            <Route path="/home" element={<HomeView/>}/>
            <Route path="/settings" element={<SettingsView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
            <Route path="/chat" element={<ChatView/>}>
              <Route path=":id" element={<ChatView/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;