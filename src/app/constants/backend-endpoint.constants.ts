import {environment} from '../../environments/environment';

export class BackendEndpointConstants {
  private constructor() {
  }

  public static readonly Registration = class {
    public static readonly REGISTRATION: string = environment.backendBaseUrl + 'registration';
    public static readonly PERSIST_REGISTRATION: string = environment.backendBaseUrl + 'persist_registration';
  }
}