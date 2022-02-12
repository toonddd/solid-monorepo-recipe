import { Component, ComponentProps } from 'solid-js';

export interface Story<T extends Component> {
  name: string;
  component: T;
  props: ComponentProps<T>;
}
