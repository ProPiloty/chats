import React from 'react';
import './App.css';

import {HashRouter as Router} from 'react-router-dom';
import routes from './utils/router';

function App() {
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
