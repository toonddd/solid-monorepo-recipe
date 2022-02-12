import { Story } from './_story';
import { Button } from 'components';
import { createSignal } from 'solid-js';

const [children, setChildren] = createSignal('children passed from story');

export default {
  name: 'Button',
  component: Button,
  props: {
    children: children,
    onClick: () => setChildren('can even handle state updates in story definition ;)')
  },
} as Story<typeof Button>;
