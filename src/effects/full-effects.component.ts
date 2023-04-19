import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
    <h1>🚦Angular signals fun - effect()</h1>
    <p>Open the console and try to click on the buttons...</p>
    <button (click)="update()">Update</button>
    <button (click)="updateToSameValue()">Update to the same value</button>
    <button (click)="increment(1)">Increment + 1</button>
    <button (click)="increment(2)">Increment + 2</button>
  `,
})
export class FullEffectsComponent {
  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0);

  constructor() {
    effect(() => {
      console.log('called', this.counter());
    });

    effect(() => {
      console.log('called isEven', this.isEven());
      // the effect will demonstrate the
      // push -> poll -> pull behavior
      // the effect will receive push notification from
      // the isEven producer computed signal every time
      // we increment, but the poll will determine
      // if the value has actually changed
      // signal will NOT pull value if the isEven didn't
      // change even if the effect is dirty!
    });

    // sync updates send push notifications
    // to the consumer effect() because it references counter()
    this.counter.set(1);
    this.counter.set(2);
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
    // the effect starts as dirty
    // and runs during change detection (refresh view)
    // and will therefore log only once with value of 4
  }

  update() {
    // repeated calls to the set will send push notification
    // about counter signal producer might have changed
    // effect then runs as click effect also triggers CD
    // effect polls producer if value has changed
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
    // the value has changed so effect will run on every click
    // effect will print only single log statement per click
    // with the prev value + 3 because it only pulls the
    // current value of the counter at the time it runs (during CD)
  }

  updateToSameValue() {
    this.counter.set(100);
    this.counter.set(100);
    this.counter.update((prev) => 100);
    this.counter.update((prev) => 100);
    // only first call will log because after that
    // counter will NOT sent another push notification
    // because primitive values are checked for equality
    // before doing so
    // (objects and arrays are always treated as not equal)
    // so this can't be used for something like
    //  re-fetching of the same entity
  }

  increment(amount: number) {
    this.counter.update((current) => current + amount);
  }
}
