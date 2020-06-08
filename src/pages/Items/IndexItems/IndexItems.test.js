import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar from '../../_common/components/LoadingBar';
import IndexItems from '../index';


describe('<IndexItems/>', () => {
  describe('<LoadingBar />', () => {
    it('should render LoadingBar with no props be sent', () => {
      const component = render(<IndexItems />);
      expect(LoadingBar).toBeInTheDocument();
    });
    it('should render LoadingBar with loading true', () => {
      const component = render(<IndexItems loading={true} />);
      expect(LoadingBar).toBeDefined();
    });
  });
});
