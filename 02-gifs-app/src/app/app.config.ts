import
  {
    type ApplicationConfig,
    provideZoneChangeDetection,
  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from "@angular/common/http";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
};
