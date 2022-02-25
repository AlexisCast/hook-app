import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithHook } from './components/01-useState/CounterWithHook';
// import { HookApp } from './HookApp';

ReactDOM.render(
    <CounterWithHook />,
  document.getElementById('root')
);

