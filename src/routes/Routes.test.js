import React from 'react';
// import { create } from 'react-test-renderer';
// import '@testing-library/jest-dom/extend-expect';
// import { render } from '@testing-library/react';

describe('Routes component', () => {
  it('should display login page when user types private url and is not logged', () => {
    // render(
    //     <Routes />
    // )
    // expect(screen.getByText('Fazer login')).toBeInTheDocument()
  });

  it('should display correct page when user types private url and is logged', () => {});

  //   describe('hasRoutes function', () => {
  //     it('should false if undefined routes', () => {
  //       expect(hasRoutes()).toBe(false);
  //     });

  //     it('should false if routes is empty array', () => {
  //       expect(hasRoutes([])).toBe(false);
  //     });
  //   });

  //   it('should throws error when there is no routes props', () => {
  //     const error = new Error('Routes component require routes as props');
  //     expect(() => render(<Routes />)).toThrow(error);
  //   });

  //   it('should throws error when routes is empty array', () => {
  //     const error = new Error('Routes component require routes as props');
  //     expect(() => render(<Routes routes={[]} />)).toThrow(error);
  //   });

  //   it('should display component without errors when path redirect to valid route', () => {
  //     const Todo = () => (
  //       <>
  //         <p>To do</p>
  //       </>
  //     );

  //     const routes = [{ path: '/', component: Todo }];

  //     const component = create(<Routes routes={routes} />);
  //     expect(component.toJSON()).toMatchSnapshot();
  //   });
});
