export class RouteConstants {
  private constructor() {
  }

  private static readonly HOST: string = 'http://localhost:3000/';

  public static readonly Auth = class {
    public static readonly Authentication: string = RouteConstants.HOST + 'authentication';
  }
}