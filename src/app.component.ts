import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "my-app",
  standalone: true,
  template: `
    <h1>Signals</h1>
    <hr />
    <ng-container *ngFor="let group of linkGroups">
      <h3>{{ group.groupName }}</h3>
      <ul>
        <li *ngFor="let route of group.routes">
          <a [routerLink]="route.url">{{ route.name }}</a>
        </li>
      </ul>
    </ng-container>
  `,
  imports: [RouterModule, NgFor],
})
export class AppComponent {
  linkGroups: { groupName: string; routes: { name: string; url: string }[] }[] =
    [
      {
        groupName: "Basic examples",
        routes: [
          { name: "basic signal", url: "basic/signal" },
          { name: "basic computed signal", url: "basic/computed" },
          { name: "basic effect", url: "basic/effect" },
        ],
      },
      {
        groupName: "Effect examples",
        routes: [
          { name: "computed in effect", url: "effect/computed-in-effect" },
          { name: "effect + ng-zone", url: "effect/ng-zone" },
          { name: "effects full examples", url: "effect/full-effect" },
        ],
      },
    ];
}
