import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithHook } from './components/01-useState/CounterWithHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { HookApp } from './HookApp';

ReactDOM.render(
    <SimpleForm />,
  document.getElementById('root')
);

