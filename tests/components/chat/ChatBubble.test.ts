import { describe, expect, test } from 'vitest';
import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  test('should render a own message correctly', () => {
    const message = 'Hola Mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        type: 'sent',
        message,
      },
    });

    const messageElementSent = wrapper.find('.message.sent');
    const messageElementReceived = wrapper.find('.message.received');

    expect(messageElementSent.exists()).toBe(true);
    expect(messageElementReceived.exists()).toBe(false);

    expect(messageElementSent.text()).toContain(message);
  });

  test('should render a received message correctly', () => {
    const message = 'Hola Mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        type: 'received',
        message,
      },
    });

    const messageElementSent = wrapper.find('.message.sent');
    const messageElementReceived = wrapper.find('.message.received');

    expect(messageElementSent.exists()).toBe(false);
    expect(messageElementReceived.exists()).toBe(true);

    expect(messageElementReceived.text()).toContain(message);
  });

  test('should render a received message with image correctly', () => {
    const message = 'Hola Mundo';
    const image = 'https://via.placeholder.com/150';
    const wrapper = mount(ChatBubble, {
      props: {
        type: 'received',
        message,
        image,
      },
    });

    const messageElementSent = wrapper.find('.message.sent');
    const messageElementReceived = wrapper.find('.message.received');
    const imageElement = wrapper.find('img');

    expect(messageElementSent.exists()).toBe(false);
    expect(messageElementReceived.exists()).toBe(true);
    expect(imageElement.exists()).toBe(true);
    expect(imageElement.attributes('src')).toBe(image);

    expect(messageElementReceived.text()).toContain(message);
  });
});
