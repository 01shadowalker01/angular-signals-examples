import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { BasicSignalComponent } from "./signals/basic-signal.component";
import { BasicComputedExampleComponent } from "./signals/basic-computed.component";
import { SimpleEffectComponent } from "./effects/simple-effect.component";
import { NgZoneEffectExampleComponent } from "./effects/ng-zone-effect.component";
import { ComputedEffectComponent } from "./effects/computed-in-effect.component";
import { FullEffectsComponent } from "./effects/full-effects.component";

export const routes: Route[] = [
  {
    path: "basic",
    children: [
      { path: "signal", component: BasicSignalComponent },
      { path: "computed", component: BasicComputedExampleComponent },
      { path: "effect", component: SimpleEffectComponent }
    ],
  },
  {
    path: "effect",
    children: [
      { path: "computed-in-effect", component: ComputedEffectComponent },
      { path: "ng-zone", component: NgZoneEffectExampleComponent },
      { path: "full-effect", component: FullEffectsComponent }
    ],
  },
  { path: "", component: AppComponent },
];
