import React from 'react'
import App from './App'
import {
  createRoot
} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <App/> );

it('renders without crashing', () => {
  const div = document.createElement('div')
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render( <App/> );
  root.unmountComponentAtNode(div)
})
