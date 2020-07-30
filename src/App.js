import React, { Component } from 'react';
import { Route } from 'react-router';
import {Layout} from './Component/Layout';
import {HomePage} from './Pages/HomePage';
import {CV} from './Pages/CV';
export default class App extends Component {

  render() {
    return (
    <Layout>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/CV' component={CV} />
    </Layout>
    )
  }
}

