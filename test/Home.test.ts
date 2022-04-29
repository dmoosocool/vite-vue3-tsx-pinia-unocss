import { shallowMount } from '@vue/test-utils';
import { expect, it, describe, beforeAll } from 'vitest';
import { createPinia } from 'pinia';

import Home from '@/views/home';

let wrapper;
beforeAll(() => {
  wrapper = shallowMount(Home, {
    global: {
      plugins: [createPinia()],
    },
  });
});

describe('tsx vue pinia', () => {
  it('test mounted', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('test events and pinia', async () => {
    const plusBtn = wrapper.find('button.plus-btn');
    const minusBtn = wrapper.find('button.minus-btn');
    await plusBtn.trigger('click');
    expect(wrapper.html()).toContain('<p>your counter: 1</p>');
    await minusBtn.trigger('click');
    expect(wrapper.html()).toContain('<p>your counter: 0</p>');
  });
});
