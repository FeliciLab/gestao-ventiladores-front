import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import IndexItems from './IndexItems';


describe('<IndexItems/>', () => {
  describe('<LoadingBar />', () => {
    it('should render LoadingBar with no props be sent', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <IndexItems />
        </BrowserRouter>,
      );
      expect(getByTestId('loadingBar')).toBeInTheDocument();
    });

    it('should render LoadingBar with loading true', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <IndexItems loading={true} />
        </BrowserRouter>,
      );
      expect(getByTestId('loadingBar')).toBeInTheDocument();
    });

    it('should not render LoadingBar with loading false', async () => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <IndexItems loading={false} />
        </BrowserRouter>,
      );

      expect(queryByTestId('loadingBar')).toBeNull();
    });
  });

  describe('<ItemPage>', () => {
    it('should render ItemPage with loading false', async () => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <IndexItems loading={false} />
        </BrowserRouter>,
      );

      expect(queryByTestId('itemPage')).not.toBeNull();
    });
  });
});
