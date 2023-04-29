// "Glitch Free" property
// Consider the following setup:

import { signal, computed, effect } from '@angular/core';

const counter = signal(0);
const evenOrOdd = computed(() => counter() % 2 === 0 ? 'even' : 'odd');
effect(() => console.log(counter() + ' is ' + evenOrOdd()));

counter.set(1);
// When the effect is first created, it will print "0 is even", as expected, and record that both counter and evenOrOdd are dependencies of the logging effect.

// When counter is set to 1, this invalidates both evenOrOdd and the logging effect. If counter.set() iterated through the dependencies of counter and triggered the logging effect first, before notifying evenOrOdd of the change, however, we might observe the inconsistent logging statement "1 is even". Eventually evenOrOdd would be notified, which would trigger the logging effect again, logging the correct statement "1 is odd".

// In this situation, the logging effect's observation of the inconsistent state "1 is even" is known as a glitch. A major goal of reactive system design is to prevent such intermediate states from ever being observed, and ensure glitch-free execution.

/////////////////////////////////////////////////////////////////////////////////

// Push/Pull Algorithm

// Angular Signals guarantees glitch-free execution by separating updates to the Producer/Consumer graph into two phases.
// The first phase is performed eagerly when a Producer value is changed. This change notification is propagated through the graph,
// notifying Consumers which depend on the Producer of the potential update. Some of these Consumers may be derived values and thus also Producers,
// which invalidate their cached values and then continue the propagation of the change notification to their own Consumers, and so on.
// Other Consumers may be effects, which schedule themselves for re-execution.