import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import PhotoModal from './PhotoModal';

describe('<PhotoModal/>', () => {
  describe('throw error required props', () => {
    const error = 'props {src|alt} undefined';
    it('should not render <PhotoModel /> without props', () => {
      expect(() => render(<PhotoModal />)).toThrow(error);
    });

    it('should not render <PhotoModel /> without src', () => {
      expect(() => render(<PhotoModal alt="teste" />)).toThrow(error);
    });

    it('should not render <PhotoModel /> without alt', () => {
      expect(() => render(<PhotoModal src="teste" />)).toThrow(error);
    });

    it('should not throw error with props', () => {
      expect(() =>
        render(<PhotoModal src="src-test" alt="alt-test" />),
      ).not.toThrow(error);
    });
  });

  describe('rendering components', () => {
    it('should render <PhotoModel/> passing props', () => {
      const { container } = render(
        <BrowserRouter>
          <PhotoModal src="src" alt="alt" />
        </BrowserRouter>,
      );
      expect(container).toBeInTheDocument();
    });

    it('should render <Photo /> passing props', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <PhotoModal src="src" alt="alt" />
        </BrowserRouter>,
      );
      expect(getByTestId('photo-bg-img')).toBeInTheDocument();
      expect(getByTestId('photo-label')).toBeInTheDocument();
    });

    it('should div on <Photo /> has style "background url(src)"', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <PhotoModal src="src" alt="alt" />
        </BrowserRouter>,
      );
      expect(getByTestId('photo-bg-img')).toHaveStyle('background: url(src)');
    });

    it('should render not <DialogPhoto /> without click on the photo', () => {
      const { queryByTestId } = render(
        <BrowserRouter>
          <PhotoModal src="src" alt="alt" />
        </BrowserRouter>,
      );
      expect(queryByTestId('dialog-photo-img')).toBe(null);
    });
  });

  describe('fire actions', () => {
    it('should render <DialogPhoto /> when click on div with photo inside', async () => {
      render(
        <BrowserRouter>
          <PhotoModal src="src" alt="alt" />
        </BrowserRouter>,
      );
      fireEvent.click(screen.getByTestId('photo-modal'));
      await waitForElement(() => screen.getByTestId('dialog-photo-img'));
      expect(screen.getByTestId('dialog-photo-img')).toBeInTheDocument();
    });
  });
});
