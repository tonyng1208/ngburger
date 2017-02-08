import { NgBurgerPage } from './app.po';

describe('ng-burger App', function() {
  let page: NgBurgerPage;

  beforeEach(() => {
    page = new NgBurgerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
