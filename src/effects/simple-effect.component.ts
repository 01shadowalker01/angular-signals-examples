import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'simple-effect',
  standalone: true,
})
export class EffectExampleComponent {
  constructor() {
    const counter = signal(0);

    effect(() => {
      console.log('Effect runs with: ', counter());
    });

    counter.set(1);
    counter.set(2);
    counter.update((current) => current + 1);
    counter.update((current) => current + 1);
  }
}
