import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router);

  const user = localStorage.getItem('user');
  if(!user){
    return true;
  }

  return router.navigate(['admin', 'posts'])
};
