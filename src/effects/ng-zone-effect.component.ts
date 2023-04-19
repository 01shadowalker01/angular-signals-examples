import { Component, effect, signal } from '@angular/core';

@Component({
  template: `<button (click)="update()">Update</button>`,
  standalone: true,
})
export class EffectExampleComponent {
  counter = signal(0);

  constructor() {
    effect(() => {
      console.log('Effect runs with: ', this.counter());
    });
    // logs "Effect runs with: 0" when component is initialy rendered
  }

  update() {
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
  }
}
