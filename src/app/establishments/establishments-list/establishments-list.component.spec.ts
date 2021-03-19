import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EstablishmentsService } from "../establishments.service";
import { EstablishmentsListComponent } from "./establishments-list.component";

describe('EstablishmentsListComponent', () => {
  let fixture: ComponentFixture<EstablishmentsListComponent>;
  let app: EstablishmentsListComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ EstablishmentsListComponent ],
      providers: [
        EstablishmentsService
      ]
    })

    await TestBed.compileComponents();

    fixture = TestBed.createComponent(EstablishmentsListComponent);
    app = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

    fixture.detectChanges();
  })

  it('should render wrapper element', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.establishments-list')).not.toBeUndefined()
  });

  describe('call http', () => {
    let req: any;
    const establishments = [
      { name: 'one' },
      { name: 'two' },
    ];

    beforeEach(() => {
      app.establishmentService.findAll();
      req = httpMock.expectOne(
        'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
      );
      req.flush(establishments);
    })

    afterEach(() => {
      httpMock.verify();
    });

    it('should do the GET request method', () => {
      expect(req.request.method).toBe('GET');
    });

    it('should get the establishments', () => {
      expect(app.establishments.length).toEqual(2);
    });
  })
});
