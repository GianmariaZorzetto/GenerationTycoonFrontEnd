import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {HttpService} from './http-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const httpClient = inject(HttpService)
  const router = inject(Router)
  if (!httpClient.userLoginReqDto.token)
  {
    router.navigate(["/"])
    return false;
  }

  return true;
};
