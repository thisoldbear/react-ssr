import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Layout from './components/Layout';

const App = (
  <Router>
    <Layout />
  </Router>
);

const root = document.getElementById('root');

ReactDOM.hydrate( App, root );
