import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('<Footer/>', () => {
  it('should render title "Recebimento"', () => {
    const { getAllByTestId } = render(<Footer />);
    expect(getAllByTestId('title')[0]).toHaveTextContent('Recebimento');
  });

  it('should render option "Cadastro"', () => {
    const { getAllByTestId } = render(<Footer />);
    expect(getAllByTestId('option')[0]).toHaveTextContent('Cadastro');
  });
});
