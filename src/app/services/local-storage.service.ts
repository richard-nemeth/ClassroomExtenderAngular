import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {

  public static readonly USER_KEY: string = 'user';

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
}