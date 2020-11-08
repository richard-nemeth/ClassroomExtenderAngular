import {HttpHeaders} from '@angular/common/http';

export class HttpOptions {

  private constructor() {
  }

  public static readonly GET_OPTIONS = {
    headers: new HttpHeaders({
      responseType: 'text/plain'
    })
  }

  public static readonly POST_OPTIONS = {
    headers: new HttpHeaders({
      responseType: 'text/plain',
      contentType: 'application/json'
    })
  }
}