/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import Nearby from './Nearby.jsx';
import Description from './Description.jsx';
import Host from './Host.jsx';
import Location from './Location.jsx';
import Recommend from './Recommend.jsx';
import SiteName from './SiteName.jsx';

export default function renderWithRouterMatch(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>,
    ),
  };
}

const mockSite = {
  siteName: 'Mock Site',
  hostName: 'Mock Host',
  hostAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg',
  starHost: 1,
  description: 'Mock Description',
  country: 'Mock Country',
  state: 'Mock State',
  covid: 1,
  verified: 1,
  nearby: 'Mock State Park',
};

describe('Sanity Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

// describe('React Test', () => {
//   test('should render without throwing an error', () => {
//     renderWithRouterMatch(App, {
//       path: '/:siteId',
//       route: '/2',
//     });
//     const { getByText } = rerender(<App />);
//     expect(getByText('Nearby')).toBeInTheDocument();
//     done();
//   });
// });

describe('React testing', () => {
  it('should render the Nearby component correctly', () => {
    const { getByText } = render(<Nearby site={1} />);
    expect(getByText('Nearby:')).toBeInTheDocument();
  });

  it('should render the Description component correctly', () => {
    const { getByTestId } = render(<Description site={mockSite} />);
    expect(getByTestId('descriptionTest')).toBeInTheDocument();
  });

  it('should render the Host component correctly', () => {
    const { getByText } = render(<Host site={mockSite} />);
    expect(getByText('Hosted By')).toBeInTheDocument();
  });

  it('should render the Location component correctly', () => {
    const { getByTestId } = render(<Location site={mockSite} />);
    expect(getByTestId('locationTest')).toBeInTheDocument();
  });

  it('should render the Recommend component correctly', () => {
    const { getByTestId } = render(<Recommend recommendList={[]} />);
    expect(getByTestId('recommendTest')).toBeInTheDocument();
  });

  it('should render the siteName component correctly', () => {
    const { getByTestId } = render(<SiteName site={mockSite} />);
    expect(getByTestId('siteNameTest')).toBeInTheDocument();
  });
});
