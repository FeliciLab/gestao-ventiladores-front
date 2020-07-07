import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import CarouselImageScreening from './CarouselImageScreening';

describe('<CarouselImageScreening />', () => {
  it('should render Carousel with item._id', () => {
    render(
      <BrowserRouter>
        <CarouselImageScreening
          item={{ _id: 123 }}
          open={true}
          close={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('photo-dialog-stepper')).toBeInTheDocument();
  });

  it('should not render Carousel with open=false', () => {
    render(
      <BrowserRouter>
        <CarouselImageScreening
          item={{ _id: 123 }}
          open={false}
          close={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(screen.queryByTestId('photo-dialog-stepper')).toBe(null);
  });

  it('should not render Carousel without item._id', () => {
    render(
      <BrowserRouter>
        <CarouselImageScreening item={{}} open={true} close={jest.fn()} />
      </BrowserRouter>,
    );
    expect(screen.queryByTestId('photo-dialog-stepper')).toBe(null);
  });
});
