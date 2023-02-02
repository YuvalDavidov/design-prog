import React from 'react'

import './assets/styles/main.scss';

import { UpperSection } from './cmps/upper-section.jsx';
import { MiddleSection } from './cmps/middle-section.jsx';
import { BottemSection } from './cmps/bottem-section';
import { ContactUs } from './cmps/contact-us';
import { Footer } from './cmps/app-footer';



function App() {
  return (
    <section className="main-layout">

      <UpperSection />

      <MiddleSection />

      <BottemSection />

      <ContactUs />

      <Footer />

    </section>
  );
}

export default App;
