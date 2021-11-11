import { EventOverviewDetails } from '../../../shared/models/event-overview-details';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.page.html',
  styleUrls: ['./event-overview.page.scss'],
})
export class EventOverviewPage implements OnInit {

  constructor(private api : ApiService) { }

  events : EventOverviewDetails[] = [];
  eventsLoaded = false;
  ten : number[] = Array.from(Array(20).keys())

  ngOnInit() {
    this.api.getEventOverviewDetails().subscribe(resp => {
      console.log(resp)
      this.events = resp;
      this.eventsLoaded = true;
    })
  }

}
