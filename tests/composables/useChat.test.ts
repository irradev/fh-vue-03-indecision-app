import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola mundo';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].type).toBe('sent');
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({ id: expect.any(Number), type: 'sent', message: text });
  });

  test('add nothing if text is empy', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets her response correctly when message ends with ?', async () => {
    const text = '¿Quires café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);

    // expect(myMessage.type).toBe('sent');
    // expect(myMessage.message).toBe(text);

    expect(myMessage).toEqual({
      id: expect.any(Number),
      type: 'sent',
      message: text,
    });

    // expect(herMessage.type).toBe('received');
    // expect(herMessage.message).toBeTypeOf('string');
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      type: 'received',
      message: expect.any(String),
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    window.fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = '¿Quires café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const [, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);

    expect(herMessage).toEqual({
      id: expect.any(Number),
      type: 'received',
      message: mockResponse.answer,
      image: mockResponse.image,
    });
  });
});
