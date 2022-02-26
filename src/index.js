import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithHook } from './components/01-useState/CounterWithHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { HookApp } from './HookApp';

ReactDOM.render(
    <MultipleCustomHooks />,
  document.getElementById('root')
);

