import { PdftopracticePage } from './app.po';

describe('pdftopractice App', () => {
  let page: PdftopracticePage;

  beforeEach(() => {
    page = new PdftopracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
