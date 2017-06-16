import { TitaniumFrontPage } from './app.po';

describe('titanium-front App', () => {
  let page: TitaniumFrontPage;

  beforeEach(() => {
    page = new TitaniumFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
