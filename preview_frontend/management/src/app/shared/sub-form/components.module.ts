import { EventFormComponent } from '../components/event-form/event-form.component';
import { FunctionShiftsComponent } from '../components/function-shifts/function-shifts.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from '../components/address/address.component';
import { ContactPersonFormComponent } from '../components/contact-person-form/contact-person-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {FunctionDetailsPage} from "../components/function-details/function-details.page";
import {FunctionDetailsPageModule} from "../components/function-details/function-details.module";



@NgModule({
  declarations: [
    ContactPersonFormComponent,
    AddressComponent,
    FunctionShiftsComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
    FunctionDetailsPageModule
  ],
  exports: [
    ContactPersonFormComponent,
    AddressComponent,
    FunctionShiftsComponent,
    EventFormComponent
  ]
})
export class SubFormModule { }
