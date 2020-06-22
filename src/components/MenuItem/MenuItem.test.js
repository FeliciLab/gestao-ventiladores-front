import React from 'react';
import MenuItem from './MenuItem';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<MenuItem />', () => {
  const menuItemTest = {
    label: 'ordens de serviço',
    path: '/ordens-servicos',
    icon: <LibraryBooksSharpIcon font="small" />,
  };

  it('should render a MenuItem component without errors', () => {
    const component = render(
      <BrowserRouter>
        <MenuItem item={menuItemTest} />
      </BrowserRouter>,
    );
    expect(component).toBeDefined();
  });

  it('should throw an error when a property of item is missed', () => {
    const menuItemWithoutLabel = {
      path: '/ordens-servicos',
      icon: <LibraryBooksSharpIcon font="small" />,
    };
    const error = new Error('MenuItem component require label as props');
    expect(() =>
      render(
        <BrowserRouter>
          <MenuItem item={menuItemWithoutLabel} />
        </BrowserRouter>,
      ),
    ).toThrow(error);
  });
});
