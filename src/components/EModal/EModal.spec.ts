import { mount } from '@vue/test-utils';
import { beforeAll, expect, test } from 'vitest';
import { createElements, EModal } from '../..';

beforeAll(() => {
  createElements();
});

test('mount component', async () => {
  expect(EModal).toBeTruthy();

  const wrapper = mount(EModal, {
    props: {
      id: 'modal',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('modal');
});
