import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import './App.scss';

import posts from './data/posts';

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>
    <Institutional />
  </div>
);

export default App;
