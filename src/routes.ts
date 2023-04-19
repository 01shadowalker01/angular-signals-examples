import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicSignalComponent } from './signals/basic-signal.component';

export const routes: Route[] = [
  {
    path: 'basic',
    children: [{ path: 'signal', component: BasicSignalComponent }],
  },
  { path: '', component: AppComponent },
];
