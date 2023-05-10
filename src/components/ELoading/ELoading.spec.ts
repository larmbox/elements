import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ELoading } from '../..';

test('mount component', async () => {
  expect(ELoading).toBeTruthy();

  const wrapper = mount(ELoading, {
    props: {
      id: 'id',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('ELoading');
});

test('register css variables', async () => {
  mount(ELoading);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('ELoading');
});

test('inherit attributes', async () => {
  const component = mount(ELoading, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
