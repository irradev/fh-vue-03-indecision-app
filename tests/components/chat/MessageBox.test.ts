import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  let wrapper = mount(MessageBox);

  beforeEach(() => {
    wrapper = mount(MessageBox);
  });

  test('should render input and button elements correctly', () => {
    const inputElement = wrapper.find('input[type="text"]');
    const buttonElementWithIconSVG = wrapper.find('button svg');

    // console.log(wrapper.find('button').attributes('class'));

    expect(wrapper.html()).toMatchSnapshot();
    expect(inputElement.exists()).toBe(true);
    expect(buttonElementWithIconSVG.exists()).toBe(true);
  });

  test('should emit sendMessage event when button is clicked', async () => {
    const message = 'Hola Mundo';
    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button');

    await inputElement.setValue(message);
    await buttonElement.trigger('click');

    // Captura todo lo que se a emitido: input, change, click...
    // console.log(wrapper.emitted());

    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect(wrapper.vm.message).toBe('');
  });

  test('should emit sendMessage event when keypress.enter is triggered', async () => {
    const message = 'Hola Mundo';
    const inputElement = wrapper.find('input[type="text"]');

    await inputElement.setValue(message);
    await inputElement.trigger('keyup.enter');

    // Captura todo lo que se a emitido: input, change, click...
    // console.log(wrapper.emitted());

    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect(wrapper.vm.message).toBe('');
  });

  test('should not emit sendMessage event when message is empty', async () => {
    const inputElement = wrapper.find('input[type="text"]');
    const buttonElement = wrapper.find('button');

    await inputElement.trigger('keyup.enter');
    await buttonElement.trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
