import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import { EButton, ECheckbox, EIcon } from '~/components';
import createElements from '~/create-elements';

beforeEach(() => {
  createElements();
});

describe('first', async () => {
  test('first', () => {
    const component = mount(EIcon);
    expect(component.vm.first(undefined)).toEqual(undefined);
    expect(component.vm.first(null)).toEqual(undefined);
    expect(component.vm.first(false)).toEqual(false);
    expect(component.vm.first(false, true)).toEqual(false);
    expect(component.vm.first(undefined, 'b')).toEqual('b');
    expect(component.vm.first('a', 'b')).toEqual('a');
    expect(component.vm.first(null, 'b')).toEqual('b');
    expect(component.vm.first(null, null, 'c')).toEqual('c');
    expect(component.vm.first(false, 'b')).toEqual(false);
    expect(component.vm.first(0, 1)).toEqual(0);
  });
});

describe('hasSlot', async () => {
  test('detect default slot', () => {
    const component = mount(EButton, {
      slots: { default: '<div></div>' },
    });
    expect(component.vm.hasSlot('default')).toEqual(true);
  });

  test('detect named slot', () => {
    const component = mount(ECheckbox, {
      slots: { label: '<div></div>' },
    });
    expect(component.vm.hasSlot('label')).toEqual(true);
  });
});

describe('className', async () => {
  test('className', () => {
    const component = mount(EIcon);
    expect(component.vm.css.base()).toEqual('EIcon');
  });

  test('className with global style prefix', () => {
    createElements({ config: { prefix: '_' } });
    const component2 = mount(EIcon);
    expect(component2.vm.css.base()).toEqual('_EIcon');
  });
});

describe('classComponentName', async () => {
  test('classComponentName', () => {
    const component = mount(EIcon);
    expect(component.vm.css.element('test')).toEqual('EIcon-test');
  });

  test('classComponentName with global style prefix', () => {
    createElements({
      config: { prefix: '_', components: { EIcon: { name: 'i' } } },
    });
    const component2 = mount(EIcon);
    expect(component2.vm.css.element('test')).toEqual('_i-test');
  });
});

describe('classNameList', async () => {
  test('classNameList', () => {
    const component = mount(EIcon);
    expect(component.vm.css.element({ test: true })).toEqual({
      'EIcon-test': true,
    });
  });

  test('classNameList with global style prefix', () => {
    createElements({
      config: { prefix: '_', components: { EIcon: { name: 'i' } } },
    });
    const component2 = mount(EIcon);
    expect(component2.vm.css.element({ test: true })).toEqual({
      '_i-test': true,
    });
  });
});
