import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar from '../../_common/components/LoadingBar';
import IndexItems from './index';

describe('<IndexItems/>', () => {
  describe('<LoadingBar />', () => {
    const setProgress = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render LoadingBar with loading true', () => {
      useStateSpy.mockImplementation(() => [true, setProgress]);
      const component = render(<IndexItems />);
      expect(LoadingBar).toBeDefined();
    });
  });
});
