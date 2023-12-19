import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { ETextarea } from '~/index';

test('mount component', () => {
  expect(ETextarea).toBeTruthy();

  const component = mount(ETextarea);

  expect(component.html()).toContain('ETextarea');
  expect(component.html()).toContain('EFormInput');
  expect(component.html()).toContain('EFormInputField');
});

test('register css variables', () => {
  mount(ETextarea);

  expect(document.getElementById('__ElementsTheme')!.innerText).toContain(
    'ETextarea',
  );
});

test('inherit attributes', () => {
  const component = mount(ETextarea, {
    props: { notaprop: '1', variant: 'primary' },
  });

  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
