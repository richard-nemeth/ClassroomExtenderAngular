import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

import {AuthGuardService} from "./auth-guard.service";
import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {LocalStorageServiceStub} from '../test/testServices/localstorage.service.stub';
import {NotificationServiceStub} from '../test/testServices/notification.service.stub';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  let router: Router;
  let notificationService: NotificationService;
  let localstorageService: LocalStorageService;
  let injector: TestBed;

  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/cookies'};
  let routerMock = {navigateByUrl: jasmine.createSpy('navigateByUrl')}

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
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
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    authGuardService = injector.inject(AuthGuardService);
    router = injector.inject(Router);
    notificationService = injector.inject(NotificationService);
    localstorageService = injector.inject(LocalStorageService);
  });

  it('should not allow empty request to pass', () => {
    const canActivate: boolean = authGuardService.canActivate(routeMock, routeStateMock);

    expect(canActivate).toBeFalse();
  });

  it('should call localStorageService getisUserLoggedInSubject on canActivate', () => {
    const spy = spyOn(localstorageService, 'getisUserLoggedInSubject').and.callThrough();
    
    authGuardService.canActivate(routeMock, routeStateMock);

    expect(spy).toHaveBeenCalled();
  });

  it('should redirect if the user not authorized', () => {
    authGuardService.canActivate(routeMock, routeStateMock);

    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('authentication');
  });

  it('should notify the user about unauthorization', () => {
    const spy = spyOn(notificationService, 'showErrorMessage');

    authGuardService.canActivate(routeMock, routeStateMock);

    expect(spy).toHaveBeenCalledWith('You must authenticate before usage');
  });

  it('should return true, if the user present', () => {
    spyOn(localstorageService, "getisUserLoggedInSubject").and.returnValue(new BehaviorSubject(true));

    const canActivate: boolean = authGuardService.canActivate(routeMock, routeStateMock);

    expect(canActivate).toBeTrue();
  });
});