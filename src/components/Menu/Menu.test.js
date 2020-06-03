import React from 'react';
import Menu from './Menu';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<Menu />', () => {
  const menuConfigTest = [
    {
      label: 'ordens de serviço',
      path: '/ordens-servicos',
      icon: <LibraryBooksSharpIcon font="small" />,
    },
    {
      label: 'triagem',
      path: '/triagens',
      icon: <AssignmentSharpIcon font="small" />,
    },
  ];

  it('should render a Menu component without errors', () => {
    const component = render(
      <BrowserRouter>
        <Menu menuRoutes={menuConfigTest} />
      </BrowserRouter>,
    );
    expect(component).toBeDefined();
  });

  it('should throw an error when there is no menuRoutes as props', () => {
    const error = new Error('Menu component require menuRoutes as props');
    expect(() => render(<Menu />)).toThrow(error);
  });
});
