import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ESelect } from '~/index';

test('mount component', () => {
  expect(ESelect).toBeTruthy();

  const component = mount(ESelect, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('ESelect');
  expect(component.html()).toContain('EFormControl--field');
});

test('register css variables', () => {
  mount(ESelect);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('ESelect');
});

test('inherit attributes', () => {
  const component = mount(ESelect, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
