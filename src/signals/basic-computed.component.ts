import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "basic-signal",
  standalone: true,
  template: `
    Counter: {{ counter() }}<br />
    isOdd: {{ isOdd() }}<br />
    <button (click)="update()">Update</button>
  `,
})
export class BasicComputedExampleComponent {
  counter = signal(0);

  isOdd = computed(() => {
    console.log("isOdd called");
    return this.counter() % 2 !== 0;
  });

  update() {
    this.counter.update((value) => value + 1);
  }
}


const counter = signal(0);

const isEven = computed(() => {
    console.log("isEven called");
    return counter() % 2 === 0;
});

counter();

counter.set(1);
counter.update((current) => current + 1);

counter();