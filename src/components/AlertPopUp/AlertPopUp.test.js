import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
} from '@testing-library/react';
import AlertPopUp from './AlertPopUp';
import AlertContext from '../../contexts/AlertContext';

describe('<AlertPopUp/>', () => {
  it('should render with valid message', () => {
    render(
      <AlertContext.Provider
        value={{
          alert: { message: 'Eita, joia xablau!', alertType: 'success' },
          setAlertMessage: jest.fn(),
        }}
      >
        <AlertPopUp />
      </AlertContext.Provider>,
    );

    expect(screen.getByTestId('alert-message')).toBeInTheDocument();
  });

  it('should show valid message in context', () => {
    render(
      <AlertContext.Provider
        value={{
          alert: { message: 'Eita, joia xablau!', alertType: 'success' },
          setAlertMessage: jest.fn(),
        }}
      >
        <AlertPopUp />
      </AlertContext.Provider>,
    );

    expect(screen.getByText('Eita, joia xablau!')).toBeInTheDocument();
  });

  it('should not render without message in context', () => {
    render(
      <AlertContext.Provider
        value={{
          alert: { message: '', alertType: 'success' },
          setAlertMessage: jest.fn(),
        }}
      >
        <AlertPopUp />
      </AlertContext.Provider>,
    );

    expect(screen.queryByText('Eita, joia xablau!')).toBe(null);
    expect(screen.queryByTestId('alert-message')).toBe(null);
  });
});
