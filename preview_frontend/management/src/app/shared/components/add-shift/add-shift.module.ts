import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShiftPageRoutingModule } from './add-shift-routing.module';

import { AddShiftPage } from './add-shift.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddShiftPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AddShiftPage]
})
export class AddShiftPageModule {}
