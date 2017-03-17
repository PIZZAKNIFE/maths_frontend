import { MathsFrontendPage } from './app.po';

describe('maths-frontend App', () => {
  let page: MathsFrontendPage;

  beforeEach(() => {
    page = new MathsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
