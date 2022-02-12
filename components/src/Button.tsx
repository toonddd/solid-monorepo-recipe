import type { Component, ComponentProps } from 'solid-js';
import { test } from './Button.module.css';

export const Button: Component<ComponentProps<'button'>> = ({
  children,
  onClick,
}) => {
  return (
    <button class={test} onClick={onClick}>
      {children}
    </button>
  );
};
