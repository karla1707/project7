import { AddFunctionPage } from './../../../shared/components/add-function/add-function.page';
import { AddAddressComponent } from './../../../shared/components/add-address/add-address.component';
import { ToastController, ModalController } from '@ionic/angular';
import { EventFunction } from './../../../shared/models/event-function';
import { Address } from './../../../shared/models/address.model';
import { Customer } from './../../../shared/models/customer';
import { Validators } from '@angular/forms';
import { ContactPersonFormComponent } from './../../../shared/components/contact-person-form/contact-person-form.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  event;

  constructor(private api : ApiService){}
  
  ngOnInit(): void {
    this.api.getEvent(1).subscribe(d => {
      this.event = d;
      console.log("event", d)
    })
  }
}