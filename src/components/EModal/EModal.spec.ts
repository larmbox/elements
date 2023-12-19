import { mount } from '@vue/test-utils';
import { beforeAll, expect, test } from 'vitest';
import { nextTick } from 'vue';
import { EModal, createElements } from '../..';

beforeAll(() => {
  createElements();
});

test('mount component', async () => {
  expect(EModal).toBeTruthy();

  const wrapper = mount(EModal);

  nextTick(() => {
    expect(wrapper.html()).toContain('teleport');
  });

  expect(document.getElementById('ETeleportTarget')).toBeTruthy();
  expect(document.getElementById('ETeleportTarget-outside')).toBeTruthy();
});
