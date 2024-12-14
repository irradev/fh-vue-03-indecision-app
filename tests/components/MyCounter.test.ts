import { mount } from '@vue/test-utils';

import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: 'Counter',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should renders the counter value correctly', () => {
    const value = 8;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
        text: 'Counter',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    // expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${value * value}`,
    // );

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);

    // console.log(wrapper.html());
  });

  test('should increments the counter when +1 button is clicked', async () => {
    const value = 8;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
        text: 'Counter',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const [, incrementButton] = wrapper.findAll('button');
    await incrementButton.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when -1 button is clicked twice', async () => {
    const value = 8;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
        text: 'Counter',
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const [decrementButton] = wrapper.findAll('button');
    await decrementButton.trigger('click');
    await decrementButton.trigger('click');

    const newValue = value - 2;

    expect(counterLabel.text()).toContain(`Counter: ${newValue}`);
    expect(squareLabel.text()).toContain(`Square: ${newValue * newValue}`);
  });
});
