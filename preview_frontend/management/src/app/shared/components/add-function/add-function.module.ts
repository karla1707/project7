import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {AddFunctionRoutingModule} from './add-function-routing.module';

import { AddFunctionPage } from './add-function.page';
import {FunctionFormComponent} from "../function-form/function-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFunctionRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddFunctionPage, FunctionFormComponent]
})
export class AddFunctionModule {}
