import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './routes';

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
    <a routerLink="/">< Home</a>
    <br><br>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],
})
export class Main {}

bootstrapApplication(Main, {
  providers: [provideRouter(routes)],
});
