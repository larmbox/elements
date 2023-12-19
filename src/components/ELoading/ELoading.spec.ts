import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ELoading } from '~/index';

describe('ELoading', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ELoading);
    expect(wrapper.vm).toBeTruthy();
  });

  it('has correct default props', () => {
    const wrapper = mount(ELoading);
    expect(wrapper.props().role).toBeUndefined();
    expect(wrapper.props().label).toBeUndefined();
  });

  it('sets role prop correctly', () => {
    const role = 'testRole';
    const wrapper = mount(ELoading, {
      props: { role },
    });
    expect(wrapper.props().role).toBe(role);
  });

  it('sets label prop correctly', () => {
    const label = 'testLabel';
    const wrapper = mount(ELoading, {
      props: { label },
    });
    expect(wrapper.props().label).toBe(label);
  });
});
