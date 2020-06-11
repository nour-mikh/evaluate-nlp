import {checkForName} from './nameChecker.js'

test('testing with a number', () => {
  window.alert = () => {};
  expect(checkForName(32)).toBe("not a number");
});