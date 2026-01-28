import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



class MyEventEmitter<T> {
  subcriptions: ((data: T) => void)[] = [];

  subscribe(callback: (data: T) => void): void {
    this.subcriptions.push(callback);
  }

  emit(data: T): void {
    this.subcriptions.forEach(fn => fn(data));
  }
}

const emitter = new MyEventEmitter();
emitter.subscribe(console.log);

setTimeout(() => {
  emitter.emit(100);
}, 2000);