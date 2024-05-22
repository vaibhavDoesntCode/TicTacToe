import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Players from './pages/Players/Players'; // Ensure this import is correct
import HomePage from './pages/HomePage/HomePage';
import Computer from './pages/Computer/Computer';
import SelectDif from './pages/SelectDif/SelectDif';
import NotFound from './pages/NotFound/NotFound'


const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/player" element={<Players />} /> 
      <Route path="/computer/:diff" element={<Computer />} />
      <Route path="/select" element={<SelectDif />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
