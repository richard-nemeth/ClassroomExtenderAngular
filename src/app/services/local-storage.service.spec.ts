import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {BehaviorSubject} from 'rxjs';

import {LocalStorageService} from "./local-storage.service";

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    localStorageService = injector.inject(LocalStorageService);
  });

  it('should return an a false BehaviourSubject for getisUserLoggedInSubject', () => {
    const isUserLoggedIn: BehaviorSubject<boolean> = localStorageService.getisUserLoggedInSubject();

    expect(isUserLoggedIn.value).toBeFalse();
  });

  it('should set an userId to localStorage for setUserIdToStorage', () => {
    const spy = spyOn(localStorage, 'setItem');

    localStorageService.setUserIdToStorage('id');

    expect(spy).toHaveBeenCalledWith('userId', 'id');
  });

  it('should get an userId from localStorage for getUserIdToStorage', () => {
    const spy = spyOn(localStorage, 'getItem');

    localStorageService.getUserIdFromStorage();

    expect(spy).toHaveBeenCalledWith('userId');
  });

  it('should remove an userId from localStorage for removeUserIdToStorage', () => {
    const spy = spyOn(localStorage, 'removeItem');

    localStorageService.removeUserIdFromStorage();

    expect(spy).toHaveBeenCalledWith('userId');
  });
});