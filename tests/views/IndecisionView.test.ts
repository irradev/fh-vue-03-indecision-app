// import ChatMessages from '@/components/chat/ChatMessages.vue';
// import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

// const mockChatMessages = {
//   template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
// };

describe('<IndecisionView />', () => {
  test('should render chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.findComponent({ name: 'ChatMessages' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'MessageBox' }).exists()).toBe(true);

    // expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    // expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when sending a message', async () => {
    const message1 = 'Test message 1';
    const message2 = 'Test message 2';
    const wrapper = mount(IndecisionView);
    const messageBoxComponent = wrapper.findComponent({ name: 'MessageBox' });

    await messageBoxComponent.vm.$emit('sendMessage', message1);
    await messageBoxComponent.vm.$emit('sendMessage', message2);

    const messages = wrapper.findAll('.message.sent');

    expect(messages.length).toBe(2);
    expect(messages[0].text()).toBe(message1);
    expect(messages[1].text()).toBe(message2);
  });
});
