import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Router, RouterModule } from "@angular/router";
import { routes } from "./routes";
import { NgIf } from "@angular/common";

@Component({
  selector: "my-app",
  standalone: true,
  template: `
    <div *ngIf="router.url !== '/'">
      <a routerLink="/">< Home</a>
      <br /><br />
    </div>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule, NgIf],
})
export class Main {
  constructor(public router: Router) {}
}

bootstrapApplication(Main, {
  providers: [provideRouter(routes)],
});
