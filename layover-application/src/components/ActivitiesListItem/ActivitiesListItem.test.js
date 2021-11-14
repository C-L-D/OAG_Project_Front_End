import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActivitiesListItem from './ActivitiesListItem';

describe('<ActivitiesListItem />', () => {
  test('it should mount', () => {
    render(<ActivitiesListItem />);
    
    const activitiesListItem = screen.getByTestId('ActivitiesListItem');

    expect(activitiesListItem).toBeInTheDocument();
  });
});