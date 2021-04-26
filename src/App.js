import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const PrivateRoute = ({ children, logged, ...rest }) => (
  <Route
    {...rest}
    render={() => (logged ? children : <Redirect to="/login" />)}
  />
);

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };

  return (
    <Router>
      <Navbar
        handleCreateAcc={() => setShowModal(true)}
        logged={isLogged}
        auth={fakeAuth}
      />

      <Switch>
        <Route path="/login">
          <Login auth={fakeAuth} />
        </Route>
        <PrivateRoute path="/Dashboard" logged={isLogged}>
          <Dashboard name={name} account={account} />
        </PrivateRoute>
        <Route path="/">
          <Home handleClick={() => setShowModal(true)} />
        </Route>
      </Switch>

      <Footer />
      <AccountModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        auth={fakeAuth}
      />
    </Router>
  );
};

export default App;
