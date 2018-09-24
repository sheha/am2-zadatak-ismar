/**
 * App container - header, meta,routing
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import './style.scss';

const App = () => (
  <div className="app">
    <Helmet
      titleTemplate="%s - Zadatak ::: Ismar Sehic "
      defaultTitle="Events Home Page"
    >
      <meta name="description" content="Interview assignment built around react.js redux boilerplate" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
