/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Routes, { hasRoutes } from './Routes';

describe('Routes component', () => {
  describe('hasRoutes function', () => {
    it('should false if undefined routes', () => {
      expect(hasRoutes()).toBe(false);
    });

    it('should false if routes is empty array', () => {
      expect(hasRoutes([])).toBe(false);
    });
  });

  it('should display component without errors when no routes props', () => {
    const component = create(<Routes />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display component without errors when routes is empty array', () => {
    const component = create(<Routes routes={[]} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display component without errors when path redirect to valid route', () => {
    const Todo = () => (
      <>
        <p>To do</p>
      </>
    );

    const routes = [{ path: '/', component: Todo }];

    const component = create(<Routes routes={routes} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
