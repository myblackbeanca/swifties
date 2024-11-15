import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Mixtapes from '../components/Mixtapes';
import Merch from '../components/Merch';
import Artists from '../components/Artists';
import FAQ from '../components/FAQ';
import BuyMINY from '../components/BuyMINY';
import UnboxingVideo from '../components/UnboxingVideo';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <BuyMINY />
      <Mixtapes />
      <Merch />
      <Artists />
      <FAQ />
      <UnboxingVideo />
    </div>
  );
}