import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';

@Injectable()
export class LocalStorageService {

  private static readonly USER_KEY: string = 'user';

  public constructor() {
  }

  public setUserToStorage(userId: string): void {
    localStorage.setItem(LocalStorageService.USER_KEY, userId);
  }

  public getUserFromStorage(): string {
   return localStorage.getItem(LocalStorageService.USER_KEY);
  }

  public isUserIdPresent(): boolean {
    return this.getUserFromStorage() !== null;
  }

  public removeUserFromStorage(): void {
    localStorage.removeItem(LocalStorageService.USER_KEY);
  }
}