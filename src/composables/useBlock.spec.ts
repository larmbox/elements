import { describe, expect, test } from 'vitest';
import { EButton, configuration } from '../components/EButton/EButton';
import { useComponent } from './useComponent';

describe('useBlock', () => {
  test('default class name', () => {
    const component = useComponent<EButton>(configuration, { block: true });
    expect(component.props.value.block).toBe(true);

    const component2 = useComponent<EButton>(configuration, { block: false });
    expect(component2.props.value.block).toBe(false);
  });
});
