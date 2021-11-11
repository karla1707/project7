import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers = [
  { provide: 'API_URL', useValue: environment.apiUrl },
  { provide: 'STORAGE_URL', useValue: environment.storageUrl },
];



platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
