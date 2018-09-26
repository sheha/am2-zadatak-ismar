/**
 * App container - header, meta,routing
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../../components/Header';

import './style.scss';

const App = () => (
  <div className="app">
    <Helmet
      titleTemplate="%s - Zadatak ::: Ismar Sehic "
      defaultTitle="Events Home Page"
    >
      <meta name="description" content="Interview assignment built around react.js redux boilerplate" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>

  </div>
);



export default App;
