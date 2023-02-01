import React from 'react'

import './assets/styles/main.scss';

import { UpperSection } from './view/upper-section.jsx';
import { MiddleSection } from './view/middle-section.jsx';
import { BottemSection } from './view/bottem-section';



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
