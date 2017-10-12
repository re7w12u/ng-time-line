import { NgTimelinePage } from './app.po';

describe('ng-timeline App', function() {
  let page: NgTimelinePage;

  beforeEach(() => {
    page = new NgTimelinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
