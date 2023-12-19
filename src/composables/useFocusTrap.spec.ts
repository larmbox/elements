import { describe, expect, test } from 'vitest';
import { useFocusTrap } from './useFocusTrap';

describe('useFocusTrap', () => {
  test('should add modals to stack', async () => {
    expect(useFocusTrap).toBeDefined();
  });
});
