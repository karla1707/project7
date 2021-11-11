import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventOverviewPageRoutingModule } from './event-overview-routing.module';

import { EventOverviewPage } from './event-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventOverviewPageRoutingModule
  ],
  declarations: [EventOverviewPage]
})
export class EventOverviewPageModule {}
