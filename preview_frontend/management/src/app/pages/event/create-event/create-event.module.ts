import { SubFormModule } from '../../../shared/sub-form/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEventPageRoutingModule } from './create-event-routing.module';

import { CreateEventPage } from './create-event.page';
import { FunctionShiftsComponent } from '../../../shared/components/function-shifts/function-shifts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEventPageRoutingModule,
    ReactiveFormsModule,
    SubFormModule
  ],
  declarations: [CreateEventPage]
})
export class CreateEventPageModule {}
