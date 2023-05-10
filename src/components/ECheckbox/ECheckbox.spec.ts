import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ECheckbox } from '~/index';

test('mount component', async () => {
  expect(ECheckbox).toBeTruthy();

  const component = mount(ECheckbox, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain(
    'EFormControl ECheckbox ECheckbox--md ECheckbox--primary'
  );
  expect(component.html()).not.toContain('EFormControl--field');
});

test('register css variables', async () => {
  mount(ECheckbox);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('ECheckbox');
});

test('inherit attributes', async () => {
  const component = mount(ECheckbox, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
