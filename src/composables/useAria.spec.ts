import { describe, expect, test } from 'vitest';
import { useAria } from './useAria';

describe('useAria', () => {
  test('default class name', () => {
    const { sr } = useAria();

    expect(sr).toEqual('ESr');
  });
});
