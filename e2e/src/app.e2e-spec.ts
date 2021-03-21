import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display logo', () => {
    expect(page.getLogo()).toBe(true);
  });

  it('should has router-outlet', () => {
    expect(page.getLogo()).toBe(true);
  });

  afterEach(async () => {
    page.log()
  });
});
