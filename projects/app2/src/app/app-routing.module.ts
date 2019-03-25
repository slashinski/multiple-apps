import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: "app2/one", component: View1Component },
  { path: "app2/two", component: View2Component },
  { path: "app2", redirectTo: "app2/one" }

  /*
    NOTE: There isn't a catch all route here like this:
    { path: '**', redirectTo: '/app2' }
    This is due to the fact when we integrate these routes into the main
    application, having multiple catch-all routes will cause issues.
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
