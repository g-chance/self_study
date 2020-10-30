import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/** 
 * Factory function to create a ShallowWrapper for the App component
*/
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)
});
test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
});
test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
test('clicking on button increments counter display', () => {

  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate("click");

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
})
test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
})
test('clicking on decrement decreases count display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  // const count1 = +findByTestAttr(wrapper, 'count').text();
  button.simulate('click');
  // const count2 = +findByTestAttr(wrapper, 'count').text();
  const count2 = findByTestAttr(wrapper, 'count').text();
  expect(count2).toBe("-1");
})
test('warning message shows if counter tries to go below 0', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const warning = findByTestAttr(wrapper, "warning");
  expect(warning.length).toBe(1);
})
test('no warning message is shown after clicking increment counter', () => {
  const wrapper = setup();
  const dec = findByTestAttr(wrapper, "decrement-button");
  dec.simulate('click');
  const inc = findByTestAttr(wrapper, "increment-button");
  inc.simulate('click');
  const warning = findByTestAttr(wrapper, "warning");
  expect(warning.length).toBe(0);
})