/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { create } from 'react-test-renderer';
import UsersControl from './UsersControl';

describe('UsersControl component', () => {
  it('should render UsersControl component without errors', () => {
    const component = create(<UsersControl />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
