import { TiebardemoPage } from './app.po';

describe('tiebardemo App', () => {
  let page: TiebardemoPage;

  beforeEach(() => {
    page = new TiebardemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
