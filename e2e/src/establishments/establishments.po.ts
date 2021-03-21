import { by, element } from 'protractor';
import { AppPage } from '../app.po';

export class EstablishmentsPage extends AppPage {
  getListContainer(): Promise<any> {
    return element(by.css('app-root .establishments-list')).isPresent() as Promise<any>;
  }

  getListElements(): Promise<number> {
    return element.all(by.css('app-root establishment-card')).count() as Promise<number>;
  }

  getSaveButton(): Promise<any> {
    return element(by.css('app-root .my-delivery-app__btn-success')).isPresent() as Promise<any>;
  }

  handleCardCLick(): Promise<any> {
    return element(by.css('app-root establishment-card')).click() as Promise<any>;
  }

  handleSaveBtnCLick(): Promise<any> {
    return element(by.css('app-root .my-delivery-app__btn-success')).click() as Promise<any>;
  }
}
