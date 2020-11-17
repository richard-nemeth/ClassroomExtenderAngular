import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthenticationService} from "./authentication.service";
import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {LocalStorageServiceStub} from '../test/testServices/localstorage.service.stub';
import {NotificationServiceStub} from '../test/testServices/notification.service.stub';

import {TestAuthData} from '../test/testData/test-auth.data';
import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {TestCommonData} from '../test/testData/test-common.data';
import { RouteConstants } from '../constants/route.constants';


describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let router: Router;
  let notificationService: NotificationService;
  let localStorageService: LocalStorageService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/cookies'};
  let routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: NotificationService,
          useClass: NotificationServiceStub
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
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    authenticationService = injector.inject(AuthenticationService);
    router = injector.inject(Router);
    notificationService = injector.inject(NotificationService);
    localStorageService = injector.inject(LocalStorageService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should display loading on persistAuthentication call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    authenticationService.persistAuthentication(TestAuthData.CODE)

    expect(spy).toHaveBeenCalled();
  });

  it('should call to the backend on persistAuthentication', () => {
    authenticationService.persistAuthentication(TestAuthData.CODE)

    const req =
      httpMock.expectOne(BackendEndpointConstants.Authentication.PERSIST_AUTHENTICATION);

    expect(req.request.method).toBe('POST');

    req.flush(TestCommonData.CourseID);
  });

  it('should remove the userId on logout', () => {
    const spy = spyOn(localStorageService, 'removeUserIdFromStorage');

    authenticationService.doLogout();

    expect(spy).toHaveBeenCalled();
  });

  it('should navigate to the auth page on logout', () => {
    authenticationService.doLogout();

    expect(router.navigate).toHaveBeenCalledWith([RouteConstants.AUTHENTICATION]);
  });
});