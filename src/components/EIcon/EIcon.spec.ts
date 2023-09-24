import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { EIcon } from '~/index';

test('mount component', async () => {
  expect(EIcon).toBeTruthy();

  const component = mount(EIcon, {
    props: {
      id: 'id',
      icon: 'some-icon',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain('EIcon');
});

test('i alias', async () => {
  const component = mount(EIcon, {
    props: {
      id: 'id',
      i: 'some-icon',
    },
  });

  expect(component.html()).toMatchSnapshot();
});

test('types', () => {
  const component1 = mount(EIcon, {
    props: {
      prefix: 'i-',
      type: 'inline',
      icon: 'some-icon',
    },
  });

  const component2 = mount(EIcon, {
    props: {
      prefix: 'i-',
      type: 'class',
      icon: 'some-icon',
    },
  });

  const component3 = mount(EIcon, {
    props: {
      type: 'sprite',
      icon: 'some-icon',
    },
  });

  const component4 = mount(EIcon, {
    props: {
      type: 'svg',
      icon: 'some-icon',
    },
  });

  expect(component1.text()).toEqual('i-some-icon');
  expect(component2.classes()).toEqual(['EIcon', 'i-some-icon']);

  expect(component3.element.tagName).toEqual('SVG');
  expect(component3.element.children[0].tagName).toEqual('USE');
  expect(component3.element.children[0].getAttribute('href')).toContain(
    '#some-icon'
  );

  expect(component4.element.tagName).toEqual('SVG');
  expect(component4.element.children[0].tagName).toEqual('IMAGE');
  expect(component4.element.children[0].getAttribute('href')).toEqual(
    'some-icon'
  );
});

test('inherit attributes', async () => {
  const component = mount(EIcon, {
    props: { notaprop: '1', prefix: 'i-' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('prefix="i-"');
});
