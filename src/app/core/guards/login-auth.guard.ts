import { CanActivateFn } from '@angular/router';
import axios from 'axios';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
