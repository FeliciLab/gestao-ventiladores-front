/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { create } from 'react-test-renderer';
import Header from './Header';
import { Router } from 'react-router';

import { createBrowserHistory } from 'history';
import Routes from '../../components/Routes/Routes';
import getRoutes from '../../router';


describe('Header component', () => {
  it('should render Header component without errors', () => {
    const history = createBrowserHistory();
    const Wrapper = ( ) => (
        <>
            <Router history={history}> 
                <Routes routes={getRoutes()}/> 
            </Router>
        </>
    )
    const component = create(<Wrapper />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
