import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {HeaderComponent} from './header.component';

import {LocalStorageService} from 'src/app/services/local-storage.service';
import {AuthenticationService} from 'src/app/services/authentication.service';

import {AuthenticationServiceStub} from 'src/app/test/testServices/authentication.service.stub';
import {LocalStorageServiceStub} from 'src/app/test/testServices/localstorage.service.stub';

describe('AuthenticationComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authenticationService: AuthenticationService;
  let localStorageService: LocalStorageService;
  let injector: TestBed;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        providers: [
          {
            provide: AuthenticationService,
            useClass: AuthenticationServiceStub
          },
          {
            provide: LocalStorageService,
            useClass: LocalStorageServiceStub
          }
        ],
        imports: [
          MatToolbarModule,
          MatButtonModule
        ]
    }).compileComponents();
}));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    authenticationService = injector.inject(AuthenticationService);
    localStorageService = injector.inject(LocalStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call localStorageService getisUserLoggedInSubject onInit', () => {
    const spy = spyOn(localStorageService, 'getisUserLoggedInSubject').and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should call authenticationService doLogout on logOut', () => {
    const spy = spyOn(authenticationService, "doLogout");

    component.logout();

    expect(spy).toHaveBeenCalled();
  });
});