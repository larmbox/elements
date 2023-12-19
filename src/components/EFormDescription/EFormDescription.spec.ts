import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { EFormDescription } from '~/index';

describe('EFormDescription', () => {
  test('is a Vue instance', () => {
    const component = mount(EFormDescription);
    expect(component.vm).toBeTruthy();
  });

  test('renders correctly', () => {
    const component = mount(EFormDescription, {
      props: { text: 'Description' },
    });

    expect(component.classes()).toContain('EFormDescription');
  });

  describe('renders correctly with default slot', () => {
    test('text content', () => {
      const component = mount(EFormDescription, {
        props: { useSlot: true },
        slots: {
          default: 'Description',
        },
      });

      expect(component.classes()).toContain('EFormDescription');
      expect(component.text()).toEqual('Description');
    });

    test('html content', () => {
      const component = mount(EFormDescription, {
        props: { useSlot: true },
        slots: {
          default: '<span>Description</span>',
        },
      });

      expect(component.html()).toContain('<span>Description</span>');
    });
  });

  test('inherits attributes', () => {
    const component = mount(EFormDescription, {
      props: {
        text: 'Description',
        notaprop: 'value',
      },
      attrs: {
        class: 'description',
      },
    });

    expect(component.classes()).toContain('description');
    expect(component.attributes('notaprop')).toEqual('value');
  });
});
