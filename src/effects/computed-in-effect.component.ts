import { Component, computed, effect, signal } from '@angular/core';
@Component({
  template: `<button (click)="update()">Update</button>`,
  standalone: true,
})
export class ComputedEffectComponent {
  counter = signal(0);

  constructor() {
    const isEven = computed(() => {
      console.log('computed called ');
      return this.counter() % 2 === 0;
    });

    effect(() => {
      console.log('Effect runs with: ', isEven());
    });
  }

  update() {
    this.counter.update((current) => current + 2); // notice + 2
  }
}
