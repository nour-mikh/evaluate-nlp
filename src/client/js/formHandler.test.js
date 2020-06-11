import { callApi } from './formHandler'

describe("Text analysis", () => {
test("should anaylse the test entered", () => {
    const input = 'I am happy'
      const output = {polarity: 'positive',
      subjectivity: 'subjective',
      text: 'i am happy',
      polarity_confidence: 0.9746482968330383,
      subjectivity_confidence: 0.9994852602100733}
  
      expect(callApi(input)).toEqual(output);
  
    });
  });
