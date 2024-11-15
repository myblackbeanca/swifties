import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowToJoin from './pages/HowToJoin';
import PhotoSubmission from './pages/PhotoSubmission';
import ArtistApplication from './pages/ArtistApplication';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-join" element={<HowToJoin />} />
          <Route path="/submit-photo" element={<PhotoSubmission />} />
          <Route path="/artist-application" element={<ArtistApplication />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;