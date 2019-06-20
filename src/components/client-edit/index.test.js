import React from 'react';
import ReactDOM from 'react-dom';
import ClientEdit from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
