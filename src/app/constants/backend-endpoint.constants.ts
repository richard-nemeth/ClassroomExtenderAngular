import {environment} from '../../environments/environment';

export class BackendEndpointConstants {
  private constructor() {
  }

  public static readonly Authentication = class {
    public static readonly AUTHENTICATION: string = environment.backendBaseUrl + 'start_authentication';
    public static readonly PERSIST_AUTHENTICATION: string = environment.backendBaseUrl + 'persist_authentication';
  }
}