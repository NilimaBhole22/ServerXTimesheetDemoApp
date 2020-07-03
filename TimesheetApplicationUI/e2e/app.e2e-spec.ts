import { TimesheetApplicationUIPage } from './app.po';

describe('timesheet-application-ui App', function() {
  let page: TimesheetApplicationUIPage;

  beforeEach(() => {
    page = new TimesheetApplicationUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
