// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomRoutes from './CustomRoutes'; // Corrected import

const App = () => {
  return (
    <Router>
      <CustomRoutes /> 
    </Router>
  );
};

export default App;
