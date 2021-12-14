import React from 'react';

import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Nav from './components/Nav';

import Challenge1 from './routes/Challenge1/Challenge1';
import Challenge2 from './routes/Challenge2/Challenge2';
import Challenge3 from './routes/Challenge3/Challenge3';

export default function App() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate replace to="/challenge-1" />} />
          <Route path="/challenge-1" element={<Challenge1 />} />
          <Route path="/challenge-2" element={<Challenge2 />} />
          <Route path="/challenge-3" element={<Challenge3 />} />
        </Routes>
      </div>
    </>
  );
}
