import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';

@Injectable()
export class LocalStorageService {

  private static readonly USER_KEY: string = 'user';

  private storedUserSubject: Subject<boolean>;

  public constructor() {
    this.storedUserSubject = new Subject<boolean>();
  }

  public getStoredUserSubject(): Subject<boolean> {
    return this.storedUserSubject;
  }

  public setUserToStorage(userId: string): void {
    localStorage.setItem(LocalStorageService.USER_KEY, userId);

    this.storedUserSubject.next(true);
  }

  public getUserFromStorage(): string {
   return localStorage.getItem(LocalStorageService.USER_KEY);
  }

  public isUserIdPresent(): boolean {
    return this.getUserFromStorage() !== null;
  }
}