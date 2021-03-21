import { browser, by, element, logging } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLogo(): Promise<any> {
    return element(by.css('app-root .my-delivery-app__header-logo')).isPresent() as Promise<any>;
  }

  getRouter(): Promise<any> {
    return element(by.css('app-root router-outlet')).isPresent() as Promise<any>;
  }

  async log(): Promise<any> {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  }
}
