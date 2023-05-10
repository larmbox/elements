import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { EInput } from '~/index';

test('mount component', () => {
  expect(EInput).toBeTruthy();

  const component = mount(EInput, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('EInput');
  expect(component.html()).toContain('EFormControl--field');
});

test('register css variables', () => {
  mount(EInput);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('EInput');
});

test('inherit attributes', () => {
  const component = mount(EInput, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
