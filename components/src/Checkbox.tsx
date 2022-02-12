import type { Accessor, Component } from 'solid-js';
import { test } from './Checkbox.module.css';

type Props = {
  checked: Accessor<boolean>;
  onChange: (checked: boolean) => void;
};

export const Checkbox: Component<Props> = ({
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        class={test}
        type='checkbox'
        checked={checked()}
        onChange={e => onChange(e.currentTarget.checked)}
      />
      <Test checked={checked} />
    </>
  )
}

const Test: Component<{ checked: Accessor<boolean> }> = ({
  checked,
}) => (
  <div>{checked() ? 'yes' : 'no'}</div>
);
