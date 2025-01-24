import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {HttpService} from './http-service.service';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const httpClient = inject(HttpService)
  if (httpClient.userLoginReqDto.token) {
    let modifiedRequest = req.clone({setHeaders: {token: httpClient.userLoginReqDto.token}})
    return next(modifiedRequest);
  }
  return next(req);
};
