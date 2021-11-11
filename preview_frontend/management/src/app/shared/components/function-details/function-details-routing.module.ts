import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionDetailsPage } from './function-details.page';

const routes: Routes = [
  {
    path: '',
    component: FunctionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionDetailsPageRoutingModule {}
