import { DigitalParkingSystemPage } from './app.po';

describe('digital-parking-system App', function() {
  let page: DigitalParkingSystemPage;

  beforeEach(() => {
    page = new DigitalParkingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
