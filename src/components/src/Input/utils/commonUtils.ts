import type { InputProps } from '../Input';

export function hasAddon(props: InputProps) {
  return props.addonBefore || props.addonAfter;
}
