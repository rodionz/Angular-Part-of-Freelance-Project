import { UserInterfacePage } from './app.po';

describe('user-interface App', function() {
  let page: UserInterfacePage;

  beforeEach(() => {
    page = new UserInterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
