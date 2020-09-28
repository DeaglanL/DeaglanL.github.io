import React from 'react';
import { Route } from 'react-router';
import Layout from './Component/Layout';
import HomePage from './Pages/Homepage';
import CV from './Pages/CV';

function App() {

    return (
    <Layout>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/CV' component={CV} />
    </Layout>
    )
  
}
export default App;
