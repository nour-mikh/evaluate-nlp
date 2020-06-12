import { callApi } from './formHandler'
describe("Text analysis", () => {
test("should anaylse the test entered", () => {
    document.body.innerHTML = '<input id="name" value="https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80">'
    const input = 'I am happy'
  // returns undefined if the function was properly called
      expect(callApi(input)).toBe(undefined);
  
    });
  });