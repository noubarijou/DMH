import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../../utils/testHelpers/helpers';
import { Button } from '../Button';
import '@testing-library/jest-dom';

describe('<Button>', () => {
  it('should render button by deafult theme', async () => {
    const { getByText, getByRole } = renderWithTheme(<Button>button</Button>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveStyle({
      backgroundColor: '#C1FD35',
      padding: '1.25rem 0.875rem',
      width: '18.5rem',
    });
  });

  it('should render the small button', () => {
    renderWithTheme(
      <Button size="xsmall" variant="disabled">
        Small Button
      </Button>,
    );

    expect(
      screen.getByRole('button', { name: /Small Button/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.625rem 1.25rem',
    });
  });

  it('should render the button with secondary (#201F22) background color', () => {
    renderWithTheme(<Button variant="secondary">Button secondary</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      backgroundColor: '#201F22',
    });
  });

  it('should render the large button with tertiary(#CECECE) background color', () => {
    renderWithTheme(
      <Button variant="tertiary" size="large">
        Button Large
      </Button>,
    );

    const btnLarge = screen.getByRole('button');

    expect(btnLarge).toHaveStyle({
      width: '18.5rem',
      padding: '1.25rem',
      backgroundColor: '#CECECE',
    });
  });
});
