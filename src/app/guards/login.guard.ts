import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'

export const loginGuard: CanActivateFn = (route, state) => {
  const usuario = sessionStorage.getItem("usuario");
  const router = inject(Router)

  if(!usuario){
    router.navigate([""]);
    return false;
  }
  return true;
};
