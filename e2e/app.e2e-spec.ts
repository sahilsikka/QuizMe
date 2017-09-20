import { QuizMePage } from './app.po';

describe('quiz-me App', () => {
  let page: QuizMePage;

  beforeEach(() => {
    page = new QuizMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
