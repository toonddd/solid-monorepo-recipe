import { Story } from './_story';
import { Checkbox } from 'components';
import { createSignal } from 'solid-js';

const [checked, setChecked] = createSignal(false);

export default {
  name: 'Checkbox',
  component: Checkbox,
  props: {
    checked: checked,
    onChange: setChecked,
  },
} as Story<any>;
