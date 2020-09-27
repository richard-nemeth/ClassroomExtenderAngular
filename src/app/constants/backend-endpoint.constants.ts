import {environment} from '../../environments/environment';

export class BackendEndpointConstants {
  private constructor() {
  }

  public static readonly Auth = class {
    public static readonly Authentication: string = environment.backendBaseUrl + 'authentication';
  }
}