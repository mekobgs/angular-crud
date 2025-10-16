import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { LocalStorageRepository } from './infrastructure/repositories/local-storage.repository';
import { PRODUCT_REPOSITORY } from './application/interfaces/product-repository.interface';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: PRODUCT_REPOSITORY, useClass: LocalStorageRepository }
  ]
};
