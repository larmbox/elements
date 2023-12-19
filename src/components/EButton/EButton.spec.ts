import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { config } from '~/common/config';
import { useTheme } from '~/composables/useTheme';
import { EButton, ELoading } from '~/index';

describe('EButton', () => {
  test('is a valid Vue instance', () => {
    const component = mount(EButton);
    expect(component.vm).toBeTruthy();
  });

  test('renders correctly', () => {
    const component = mount(EButton, { slots: { default: 'Button Content' } });

    expect(component.classes()).toContain('EButton');
    expect(component.classes()).toContain('EButton--primary');

    expect(component.find('.EButton-content').exists()).toBe(true);
    expect(component.text()).toContain('Button Content');
  });

  test('generates a random id if none is provided', () => {
    const component = mount(EButton);

    expect(component.attributes('id')).toBeDefined();
  });

  test('uses specific id if provided', () => {
    const component = mount(EButton, { props: { id: 'id' } });

    expect(component.attributes('id')).toEqual('id');
  });

  test('renders with the correct type', () => {
    expect(mount(EButton).attributes('type')).toEqual(undefined);
    expect(
      mount(EButton, { props: { type: 'button' } }).attributes('type'),
    ).toEqual('button');
    expect(
      mount(EButton, { props: { type: 'submit' } }).attributes('type'),
    ).toEqual('submit');
  });

  test('renders with the correct tag', () => {
    expect(mount(EButton).element.tagName).toBe('BUTTON');
    expect(mount(EButton, { props: { tag: 'a' } }).element.tagName).toBe('A');
  });

  test('renders with the loading component', () => {
    const component = mount(EButton, { props: { loading: true } });
    expect(component.getComponent(ELoading)).toBeTruthy();
  });

  test('registers css variables', async () => {
    useTheme(config).components.value = {}; // Reset variables.

    mount(EButton);

    const style = document.getElementById('__ElementsTheme');
    expect(style).toBeDefined();
    expect(style!.innerText).toContain('EButton');
  });

  test('renders as disabled', async () => {
    const component = mount(EButton, { props: { disabled: true } });

    expect(component.attributes('disabled')).toBeDefined();
  });

  test('renders with icon', async () => {
    const component = mount(EButton, { props: { icon: 'box' } });

    expect(component.html()).toContain('EIcon');

    // 'icon' is an alias for 'iconLeft'.
    expect(component.html()).toContain('EButton--icon-left');
  });

  test('renders with left icon', async () => {
    const component = mount(EButton, { props: { iconLeft: 'box' } });

    expect(component.html()).toContain('EIcon');
    expect(component.html()).toContain('EButton--icon-left');
  });

  test('renders with right icon', async () => {
    const component = mount(EButton, { props: { iconRight: 'box' } });

    expect(component.html()).toContain('EIcon');
    expect(component.html()).toContain('EButton--icon-right');
  });
});
