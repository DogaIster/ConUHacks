import { ConUProjPage } from './app.po';

describe('con-uproj App', function() {
  let page: ConUProjPage;

  beforeEach(() => {
    page = new ConUProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
