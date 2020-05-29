import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header/>', () => {
  it('should render title "Central de Ventiladores"', () => {
    const { getAllByTestId } = render(<Header />);
    expect(getAllByTestId('title')[0]).toHaveTextContent(
      'central de ventiladores',
    );
  });
});
