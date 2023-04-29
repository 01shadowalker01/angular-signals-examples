import { Component, signal, effect, OnInit } from "@angular/core";

@Component({
  selector: "simple-effect",
  standalone: true,
  template: "",
})
export class SimpleEffectComponent implements OnInit {
  constructor() {
    const counter = signal(0);

    effect(() => {
      console.log("Effect runs with: ", counter());
    });

    counter.set(1);
    counter.set(2);
    counter.update((current) => current + 1);
    counter.update((current) => current + 1);
  }

  ngOnInit(): void {
    // const counter = signal(0);

    // effect(() => {
    //   console.log("Effect2 runs with: ", counter());
    // });

    // counter();

    // counter.set(1);
    // counter.update((current) => current + 1);

    // counter();
  }
}
