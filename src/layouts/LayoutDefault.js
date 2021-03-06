import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TopBtn from '../components/elements/TopBtn';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer id='contact'/>
    <TopBtn />
  </>
);

export default LayoutDefault;  
