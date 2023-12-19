import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ERadio } from '~/index';

test('mount component', async () => {
  expect(ERadio).toBeTruthy();

  const component = mount(ERadio);

  expect(component.html()).toContain('EFormInput ERadio ERadio--primary');
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(ERadio);

  expect(document.getElementById('__ElementsTheme')!.innerText).toContain(
    '--ERadio',
  );
});

test('inherit attributes', async () => {
  const component = mount(ERadio, {
    props: { notaprop: '1', variant: 'primary' },
  });

  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
