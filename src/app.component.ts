import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
    <h1>Signals</h1>
    <hr>
    <h3>Basic examples</h3>
    <ul>
      <li><a routerLink="basic/signal">basic signal</a></li>
      <li><a routerLink="basic/computed">basic computed signal</a></li>
      <li><a routerLink=""></a></li>
    </ul>
  `,
  imports: [RouterModule],
})
export class AppComponent {}
