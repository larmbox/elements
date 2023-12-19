import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ref } from 'vue';
import { ECheckbox } from '~/index';

describe('ECheckbox', () => {
  test('is a Vue instance', () => {
    const component = mount(ECheckbox);
    expect(component.vm).toBeTruthy();
  });

  test('renders the checkbox', () => {
    expect(ECheckbox).toBeTruthy();

    const component = mount(ECheckbox);

    expect(component.classes()).toContain('EFormInput');
    expect(component.classes()).toContain('ECheckbox');
    expect(component.classes()).toContain('ECheckbox--primary');

    expect(component.find('.ECheckbox-inner').exists()).toBe(true);
    expect(component.find('.ECheckbox-target').exists()).toBe(true);
    expect(component.find('.ECheckbox-icon').exists()).toBe(true);

    expect(component.find('input').attributes('type')).toBe('checkbox');
  });

  test('generates a random id if not provided', () => {
    const component = mount(ECheckbox);
    expect(component.find('input').attributes('id')).toBeDefined();
  });

  test('registers css variables', () => {
    mount(ECheckbox);

    const style = document.getElementById('__ElementsTheme');
    expect(style).toBeDefined();
    expect(style!.innerText).toContain('ECheckbox');
  });

  test('renders as block', () => {
    const component = mount(ECheckbox, {
      props: {
        block: true,
      },
    });

    expect(component.classes()).toContain('ECheckbox--block');
  });

  test('renders as disabled', () => {
    const component = mount(ECheckbox, { props: { disabled: true } });

    expect(component.find('input').attributes('disabled')).toBeDefined();
  });

  test('adds for attribute on label', () => {
    const component = mount(ECheckbox, {
      props: {
        id: 'id',
        label: 'label',
      },
    });

    expect(component.find('.EFormLabel').attributes('for')).toEqual('id');
  });

  test('should update modelValue on change', async () => {
    const r = ref<any>(false);
    const component = mount(ECheckbox, {
      props: {
        modelValue: r,
        'onUpdate:modelValue': (e: any) => (r.value = e),
      },
    });

    await component.find('input').setValue(true);
    expect(component.props('modelValue').value).toBe(true);

    await component.find('input').setValue(false);
    expect(component.props('modelValue').value).toBe(false);
  });

  test('adds descriptors as props', async () => {
    const component = mount(ECheckbox, {
      props: {
        label: 'label',
        description: 'description',
      },
    });

    expect(component.find('.ECheckbox-context').exists()).toBe(true);
    expect(component.find('.EFormLabel').exists()).toBe(true);
    expect(component.find('.EFormDescription').exists()).toBe(true);
    expect(component.find('.EFormLabel').text()).toBe('label');
    expect(component.find('.EFormDescription').text()).toBe('description');

    expect(component.find('.EFormLabel').attributes('id')).toBe(
      component.find('input').attributes('aria-labelledby'),
    );
    expect(component.find('.EFormDescription').attributes('id')).toBe(
      component.find('input').attributes('aria-describedby'),
    );
  });

  test('adds descriptors as slots', async () => {
    const component = mount(ECheckbox, {
      slots: {
        label: '<span>label</span>',
        description: '<span>description</span>',
      },
    });

    expect(component.find('.ECheckbox-context').exists()).toBe(true);
    expect(component.find('.EFormLabel span').exists()).toBe(true);
    expect(component.find('.EFormDescription span').exists()).toBe(true);
    expect(component.find('.EFormLabel').text()).toBe('label');
    expect(component.find('.EFormDescription').text()).toBe('description');

    expect(component.find('.EFormLabel').attributes('id')).toBe(
      component.find('input').attributes('aria-labelledby'),
    );
    expect(component.find('.EFormDescription').attributes('id')).toBe(
      component.find('input').attributes('aria-describedby'),
    );
  });

  test('adds feedback as prop', async () => {
    const component = mount(ECheckbox, {
      props: {
        feedback: 'feedback',
      },
    });

    expect(component.find('.EFormFeedback').exists()).toBe(true);
    expect(component.find('.EFormFeedback').text()).toBe('feedback');
    expect(component.find('input').attributes('aria-invalid')).toBe('true');

    expect(
      component.find('input').attributes('aria-errormessage'),
    ).toBeDefined();
    expect(component.find('.EFormFeedback').attributes('id')).toBe(
      component.find('input').attributes('aria-errormessage'),
    );
  });

  test('adds feedback as slot', async () => {
    const component = mount(ECheckbox, {
      slots: {
        feedback: '<span>feedback</span>',
      },
    });

    expect(component.find('.EFormFeedback span').exists()).toBe(true);
    expect(component.find('.EFormFeedback').text()).toBe('feedback');
    expect(component.find('input').attributes('aria-invalid')).toBe('true');

    expect(
      component.find('input').attributes('aria-errormessage'),
    ).toBeDefined();
    expect(component.find('.EFormFeedback').attributes('id')).toBe(
      component.find('input').attributes('aria-errormessage'),
    );
  });

  test('adds remaining attributes', async () => {
    const component = mount(ECheckbox, {
      props: {
        required: true,
        name: 'name',
        value: true,
        tabindex: 1,
        autofocus: true,
        form: 'form',
      },
    });

    expect(component.find('input').attributes('required')).toBeDefined();
    expect(component.find('input').attributes('name')).toBe('name');
    expect(component.find('input').attributes('value')).toBe('true');
    expect(component.find('input').attributes('tabindex')).toBe('1');
    expect(component.find('input').attributes('autofocus')).toBeDefined();
    expect(component.find('input').attributes('form')).toBe('form');
  });

  test('is indeterminate', async () => {
    const component = mount(ECheckbox, {
      props: {
        indeterminate: true,
      },
    });

    expect(component.find('.EIcon').attributes('class')).toContain('dash');
  });
});
