import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ESwitch } from '~/index';

test('mount component', async () => {
  expect(ESwitch).toBeTruthy();

  const component = mount(ESwitch);

  expect(component.html()).toContain('EFormInput ESwitch ESwitch--primary');
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(ESwitch);

  expect(document.getElementById('__ElementsTheme')!.innerText).toContain(
    'ESwitch',
  );
});

test('inherit attributes', async () => {
  const component = mount(ESwitch, {
    props: { notaprop: '1', variant: 'primary' },
  });

  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
