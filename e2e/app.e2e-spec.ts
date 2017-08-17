import { Warriors2Page } from './app.po';

describe('warriors2 App', () => {
  let page: Warriors2Page;

  beforeEach(() => {
    page = new Warriors2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
