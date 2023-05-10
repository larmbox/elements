import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ERadio } from '~/index';

test('mount component', async () => {
  expect(ERadio).toBeTruthy();

  const component = mount(ERadio, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain(
    'EFormControl ERadio ERadio--md ERadio--primary'
  );
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(ERadio);
  expect(
    document.getElementById('EThemeProvider--global')!.innerText
  ).toContain('--ERadio');
});

test('inherit attributes', async () => {
  const component = mount(ERadio, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
