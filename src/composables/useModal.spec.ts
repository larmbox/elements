import { describe, expect, test } from 'vitest';
import { config } from '~/common/config';
import { useModal } from './useModal';

describe('useModal', () => {
  test('should add modals to stack', async () => {
    const { stack, open } = useModal(config);

    expect(stack.value).toHaveLength(0);

    open('test');

    expect(stack.value).toHaveLength(1);
  });

  test('should remove modals from stack', async () => {
    const { stack, open, close } = useModal(config);

    expect(stack.value).toHaveLength(0);
    open('test');
    expect(stack.value).toHaveLength(1);
    close('test');
    expect(stack.value).toHaveLength(0);

    open('test');
    close();
    expect(stack.value).toHaveLength(0);
  });

  test('should keep and restore modals', async () => {
    const { stack, open, close } = useModal(config);

    expect(stack.value).toHaveLength(0);
    open('test');
    expect(stack.value).toHaveLength(1);
    open('test2');
    expect(stack.value).toHaveLength(2);
    expect(stack.value[0].idle).toBe(true);

    close('test2');
    expect(stack.value[0].idle).toBe(false);
    expect(stack.value).toHaveLength(1);
  });

  test('should close all modals', async () => {
    const { stack, open, closeAll } = useModal(config);

    expect(stack.value).toHaveLength(0);
    open('test');
    expect(stack.value).toHaveLength(1);
    open('test2');
    expect(stack.value).toHaveLength(2);

    closeAll();
    expect(stack.value).toHaveLength(0);
  });
});
