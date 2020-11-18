import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {Router} from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import {AuthenticationComponent} from "./authentication.component";

import {LocalStorageService} from 'src/app/services/local-storage.service';
import {AuthenticationService} from 'src/app/services/authentication.service';

import {AuthenticationServiceStub} from 'src/app/test/testServices/authentication.service.stub';
import {LocalStorageServiceStub} from 'src/app/test/testServices/localstorage.service.stub';
import {TestCommonData} from 'src/app/test/testData/test-common.data';

import {RouteConstants} from 'src/app/constants/route.constants';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let authenticationService: AuthenticationService;
  let router: Router;
  let localStorageService: LocalStorageService;
  let injector: TestBed;

  let routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [AuthenticationComponent],
        providers: [
          {
            provide: AuthenticationService,
            useClass: AuthenticationServiceStub
          },
          {
            provide: LocalStorageService,
            useClass: LocalStorageServiceStub
          },
          {
            provide: Router,
            useValue: routerMock
          }
        ],
        imports: [
          MatCardModule
        ]
    }).compileComponents();
}));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.debugElement.componentInstance;
    router = injector.inject(Router);
    authenticationService = injector.inject(AuthenticationService);
    localStorageService = injector.inject(LocalStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call private redirectIfUserRegistrated on creation', () => {
    const spy = spyOn<any>(AuthenticationComponent.prototype, 'redirectIfUserRegistrated');

    new AuthenticationComponent(router, localStorageService, authenticationService);

    expect(spy).toHaveBeenCalled();
  });

  it('should call localStorageService getUserIdFromStorage on creation', () => {
    const spy = spyOn(localStorageService, 'getUserIdFromStorage');

    new AuthenticationComponent(router, localStorageService, authenticationService);

    expect(spy).toHaveBeenCalled();
  });

  it('should redirect to Home on creation if userId present on creation', () => {
    spyOn(localStorageService, 'getUserIdFromStorage').and.returnValue(TestCommonData.UserID);

    new AuthenticationComponent(router, localStorageService, authenticationService);

    expect(router.navigate).toHaveBeenCalledWith([RouteConstants.HOME]);
  });

  it('should start registration on doAuthentication', () => {
    const spy = spyOn(authenticationService, "startAuthentication");

    component.doAuthentication();

    expect(spy).toHaveBeenCalled();
  });
});