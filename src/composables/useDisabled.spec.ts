import { describe, expect, test } from 'vitest';
import { EButton, configuration } from '../components/EButton/EButton';
import { useComponent } from './useComponent';

describe('useDisabled', () => {
  test('default class name', () => {
    const component = useComponent<EButton>(configuration, { disabled: true });
    expect(component.props.value.disabled).toBe(true);

    const component2 = useComponent<EButton>(configuration, {
      disabled: false,
    });
    expect(component2.props.value.disabled).toBe(false);
  });
});
