import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('<Header/>', () => {
  it('should render title "Central de Ventiladores"', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByTestId('title')).toHaveTextContent('central de ventiladores');
  });
});
