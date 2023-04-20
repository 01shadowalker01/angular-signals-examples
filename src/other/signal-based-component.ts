// import { Component } from "@angular/core";

// @Component({
//   signals: true,
//   selector: "simple-counter",
//   template: `
//     <button (click)="save()">Save count</button>
//     <button (click)="reset()">Reset count</button>
//     <input #field />
//   `,
// })
// export class SimpleCounter {
//   // Create an optional input without an initial value.
//   firstName = input<string>(); // Signal<string|undefined>

//   // Create an input with a default value
//   lastName = input("Smith"); // Signal<string>

//   // Create an input with options.
//   suspended = input<boolean>(false, {
//     alias: "disabled",
//   }); // Signal<boolean>

//   // Non-signal value
//   name = "Morgan";

//   saved = output<number>(); // EventEmitter<number>
//   cleared = output<number>({ alias: "reset" });

//   save() {
//     this.saved.emit(123);
//   }

//   reset() {
//     this.cleared.emit(456);
//   }

//   input = viewChild<ElementRef>("field"); // Signal<ElementRef>
//   icons = viewChildren(FieldIcon); // Signal<FieldIcon[]>
// }

/////////////////////////////////////////////////////////

// @Component({
//   signals: true,
//   selector: "some-checkbox",
//   template: `
//     <p>Checked: {{ checked() }}</p>
//     <button (click)="toggle()">Toggle</button>
//   `,
// })
// export class SomeCheckbox {
//   // Create a model, which is a *writable* signal that supports two-way binding.
//   checked = model(false);

//   toggle() {
//     // Normal inputs are read-only, but a model is writable
//     // and propagates the value back to the parent.
//     checked.update((c) => !c);
//   }
// }

// @Component({
//   signals: true,
//   selector: "some-page",
//   template: `
//       <!-- Note that the getter is *not* called here, the raw signal is passed -->
//       <some-checkbox [(checked)]="isAdmin" />
//     `,
// })
// export class SomePage {
//   isAdmin = signal(false);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// Signal-based components will retain the following lifecycle methods:
//   - "ngOnInit"
//   - "ngOnDestroy"

// The remaining lifecycle methods will not be available in signal components. For all of these methods, signals provide new patterns to achieve the same use cases:
//   - "ngOnChanges" - is used to observe changes to inputs. As inputs are signal-based, "computed" can be used to derive new values, or effect to react side-effectfully.
//   - "ngDoCheck" - typically this hook was used to implement custom change detection. "effect" is a likely (and more performant) replacement.
//   - "ngAfterViewInit" is often used to perform some action after initial rendering. "afterNextRender" can be used instead (and is more correct).
//   - "ngAfterContentInit", 'ngAfterViewChecked' and "ngAfterContentChecked" are often used to observe query results. Since queries are also signal-based and therefore reactive by default, signals can be used directly.

/////////////////////////////////////////////////////////////////////////////////////////
//Why no decorators in signal-based components

// class UserProfile {
//   @Input() isAdmin = createInputSignal(false);
// } ❌

// class UserProfile {
//   @Input({ defaultValue: false }) isAdmin!: Signal<boolean>;
// } ❌

// class UserProfile {
//   isAdmin = input(false);
// } ✅
