import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { EButton } from '~/index';

test('mount component', async () => {
  expect(EButton).toBeTruthy();

  const wrapper = mount(EButton, {
    props: {
      id: 'id',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('EButton EButton--md EButton--primary');
});

test('register css variables', async () => {
  mount(EButton);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('EButton');
});

test('variant', async () => {
  const component = mount(EButton, {
    props: {
      id: 'id',
      variant: 'secondary',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('EButton--secondary');

  await component.setProps({ variant: 'error' });
  expect(component.html()).toContain('EButton--error');
});

test('disabled', async () => {
  const component = mount(EButton, { props: { id: 'button' } });

  expect(component.html()).not.toContain('disabled');

  await component.setProps({ disabled: true });
  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('disabled');
});

test('link types', async () => {
  const component = mount(EButton, {
    props: { id: 'button', href: '/', tag: 'a' },
  });
  expect(component.html()).toMatchSnapshot();
});

test('loading', async () => {
  const component = mount(EButton, {
    props: { loading: true },
  });
  expect(component.html()).toContain('ELoading--inherit');
});

test('inherit attributes', async () => {
  const component = mount(EButton, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
