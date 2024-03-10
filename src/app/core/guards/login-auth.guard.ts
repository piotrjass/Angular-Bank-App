import { CanActivateFn } from '@angular/router';
import axios from 'axios';
import { AuthService } from '../../shared/services/auth.service';
import { Injectable, inject } from '@angular/core';

export const loginAuthGuard: CanActivateFn = async (route, state) => {
  let authService = inject(AuthService);

  // try {
  //   const isValid = await authService.verifyToken();
  //   if (!isValid) {
  //     return false;
  //   }
  //   console.log('go next!');
  //   return true;
  // } catch (error) {
  //   console.error(error);
  //   return false;
  // }

  console.log('works!');
  return true;
};
