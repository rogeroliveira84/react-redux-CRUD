import React from 'react';
import ReactDOM from 'react-dom';
import ClientList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
