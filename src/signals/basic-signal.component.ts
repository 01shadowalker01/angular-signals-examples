import { Component, signal } from "@angular/core";

@Component({
  selector: "basic-signal",
  standalone: true,
  template: `
    Counter: {{ counter() }}<br />
    <button (click)="update()">Update</button>
  `,
})
export class BasicSignalComponent {
  counter = signal(0);

  update() {
    this.counter.set(1);
    // this.counter.update((value) => value + 1);
    // this.counter.mutate((value) => ++value);
  }
}

// const counter = signal(0);

// console.log(counter());

// counter.set(2);
// counter.update((count) => count + 1);
