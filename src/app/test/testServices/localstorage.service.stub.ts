import {BehaviorSubject} from 'rxjs';

export class LocalStorageServiceStub {

  private userId: string = "user1";
  private readonly isUserLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public getisUserLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isUserLoggedInSubject;
  }

  public setUserIdToStorage(userId: string): void {
    this.userId = userId;

    this.isUserLoggedInSubject.next(true);
  }

  public getUserIdFromStorage(): string {
   return this.userId;
  }

  public removeUserIdFromStorage(): void {
    this.userId = null;

    this.isUserLoggedInSubject.next(false);
  }

}