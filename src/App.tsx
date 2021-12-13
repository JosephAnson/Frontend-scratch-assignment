import React from 'react';

import Nav from './components/Nav';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Challenge1 from './routes/challenge-1';
import Challenge2 from './routes/challenge-2';
import Challenge3 from './routes/challenge-3';

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
