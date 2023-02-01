import React from 'react'

import './assets/styles/main.scss';

import { UpperSection } from './cmps/upper-section.jsx';
import { MiddleSection } from './cmps/middle-section.jsx';
import { BottemSection } from './cmps/bottem-section';



function App() {
  return (
    <section className="main-layout">

      <UpperSection />

      <MiddleSection />

      <BottemSection />


    </section>
  );
}

export default App;
