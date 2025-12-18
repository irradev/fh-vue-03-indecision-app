import { describe, expect, test, vi } from 'vitest';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hola',
    type: 'sent',
  },
  {
    id: 2,
    message: 'Mundo',
    type: 'received',
    image: 'https://via.placeholder.com/150',
  },
];

describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages },
  });

  test('should render chat messages correctly', () => {
    // console.log(wrapper.html());
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('should scroll to bottom when messages are added', async () => {
    // Habilita el uso de temporizadores
    vi.useFakeTimers();
    const scrollToSpy = vi.fn();
    const chatRef = wrapper.vm.$refs.chatRef as { scrollTo: typeof scrollToSpy };
    chatRef.scrollTo = scrollToSpy;

    await wrapper.setProps({
      messages: [
        ...messages,
        { id: 3, message: 'Yes', type: 'received', image: 'https://via.placeholder.com/150' },
      ],
    });

    // await new Promise((resolve) => setTimeout(resolve, 500));
    vi.advanceTimersByTime(200);

    // Verificamos que el método scrollTo haya sido llamado
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });

    vi.useRealTimers();
  });
});
