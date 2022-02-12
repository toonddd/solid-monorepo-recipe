import type { Component } from 'solid-js';
import { title } from './App.module.css';
import { Button } from 'components';

export const App: Component = () => {
  return (
    <div>
      <h1 class={title}>Some app</h1>
      <Button>
        button imported from component lib
      </Button>
    </div>
  );
};
