import { EstablishmentsPage } from './establishments.po';

describe('Establishments Module', () => {
  let page: EstablishmentsPage;

  beforeEach(() => {
    page = new EstablishmentsPage();
    page.navigateTo();
  });

  it('should display establishments list container', () => {
    expect(page.getListContainer()).toBe(true);
  });

  it('should display cards list', () => {
    expect(page.getListElements()).toBe(22);
  });

  it('should have save button', async () => {
    page.handleCardCLick()
    expect(page.getSaveButton()).toBe(true);
  });

  it('should have establishments list again', async () => {
    page.handleCardCLick()
    page.handleSaveBtnCLick()
    expect(page.getListContainer()).toBe(true);
  });

  afterEach(() => {
    page.log()
  });
});
