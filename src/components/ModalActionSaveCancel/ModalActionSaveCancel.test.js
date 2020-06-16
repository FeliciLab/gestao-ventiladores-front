import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ModalActionSaveCancel from './ModalActionSaveCancel';


const error = new Error('handleSave or handleCancel props are undefined or not a function');

describe('<ModalActionSaveCancel />', () => {
  it('should render component with handleSave and handleCancel', () => {
    const { container } = render(
      <BrowserRouter>
        <ModalActionSaveCancel
          handleSave={() => true}
          handleCancel={() => false}
        />
      </BrowserRouter>,
    );
    expect(container).toBeDefined();
  });
  it('should not render component without handleSave', () => {
    expect(() => render(<ModalActionSaveCancel handleCancel={jest.fn()} />))
      .toThrow(error);
  });
  it('should not render component without handleCancel', () => {
    expect(() => render(<ModalActionSaveCancel handleSave={jest.fn()} />))
      .toThrow(error);
  });
});
