import React, {useEffect} from "react";
import {Provider} from "react-redux";
import HomeView from "../views/Home";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "../components/Navbar";
import SettingsView from "../views/Settings";
import WelcomeView from "../views/WelcomeView";
import ChatView from "../views/Chat";
import { listenToAuthChanges } from "../actions/auth";

import initStore from "../store";

const store = initStore();
const App = () => {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [store.dispatch]);


  return (
    <Provider store={store}>
      <Router>
        <div className='content-wrapper'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<WelcomeView/>} exact>
              <Route path=":type" element={<WelcomeView/>}/>
            </Route>
            <Route path="/home" element={<HomeView/>}/>
            <Route path="/settings" element={<SettingsView/>}/>
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