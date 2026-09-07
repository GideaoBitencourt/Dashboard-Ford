import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(Auth);
  const router = inject(Router);

  // Se o usuário já está logado e tenta acessar o login:
  if (authService.estaLogado()) {
    // Chuta de volta pro dashboard e bloqueia a tela de login
    router.navigate(['/dashboard']); 
    return false;
  }

  // Se não estiver logado, acessa a tela de login normalmente.
  return true;
};
