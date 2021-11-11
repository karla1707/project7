import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunctionDetailsPageRoutingModule } from './function-details-routing.module';

import { FunctionDetailsPage } from './function-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunctionDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FunctionDetailsPage]
})
export class FunctionDetailsPageModule {}
