import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/Hello';
import './index.css';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
