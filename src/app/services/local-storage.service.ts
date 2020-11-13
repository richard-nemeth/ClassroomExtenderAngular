import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LocalStorageService {

  private static readonly USER_KEY: string = 'userId';

  private isUserLoggedInSubject: BehaviorSubject<boolean>;

  public constructor() {
    this.isUserLoggedInSubject = new BehaviorSubject(false);

    if (this.getUserIdFromStorage()) {
      this.isUserLoggedInSubject.next(true);
    } else {
      this.isUserLoggedInSubject.next(false);
    }
  }

  public getisUserLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isUserLoggedInSubject;
  }

  public setUserIdToStorage(userId: string): void {
    localStorage.setItem(LocalStorageService.USER_KEY, userId);

    this.isUserLoggedInSubject.next(true);
  }

  public getUserIdFromStorage(): string {
   return localStorage.getItem(LocalStorageService.USER_KEY);
  }

  public removeUserIdFromStorage(): void {
    localStorage.removeItem(LocalStorageService.USER_KEY);

    this.isUserLoggedInSubject.next(false);
  }

}