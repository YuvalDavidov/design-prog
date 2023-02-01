import React from 'react'

import './assets/styles/main.scss';

import { UpperSection } from './view/upper-section.jsx';
import { MiddleSection } from './view/middle-section.jsx';



function App() {
  return (
    <section className="main-layout">

      <UpperSection />

      <MiddleSection />



    </section>
  );
}

export default App;
