import { DAOEvent } from './../../../shared/models/event';
import { ContactPersonFormComponent } from '../../../shared/components/contact-person-form/contact-person-form.component';
import { ToastController } from '@ionic/angular';
import { Customer } from '../../../shared/models/customer';
import { ApiService } from '../../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, NgModule, ViewChild, Input, ViewChildren, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddAddressComponent } from '../../../shared/components/add-address/add-address.component';
import { Address } from '../../../shared/models/address.model';
import { AddFunctionPage } from '../../../shared/components/add-function/add-function.page';
import { EventFunction } from '../../../shared/models/event-function';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;
  customers: Customer[] = [];
  eventAddresses: Address[] = [];
  eventFunctionObj: EventFunction;
  eventFunctions: EventFunction[] = [];

  @Input()
  update: boolean = false;

  @Input()
  eventdata: any = null; //this is a tuple with ["event" => ..., "contactperson" => ..., "locations" => [...] ]



  @ViewChild(ContactPersonFormComponent)
  public contactPersonComponent: ContactPersonFormComponent;


  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    private toastController: ToastController,
    public modalCtrl: ModalController) {
  }

  ngOnInit() {


    if(this.eventdata?.locations.length > 0) {
      this.eventAddresses = this.eventdata.locations;
    }
   
    this.eventForm = this.formBuilder.group({
      name: [this.eventdata?.event.name, [Validators.required]],
      customer_id: [this.eventdata?.event.customer_id, [Validators.required]],
      end_date: [this.eventdata?.event.end_date],
      start_date: [this.eventdata?.event.start_date],
      description: [this.eventdata?.event.description],
      contact_person: this.contactPersonComponent
    },
      {
        validator: this.dateLessThan('start_date', 'end_date')
      });
    this.api.getCustomers().subscribe(d => {
      this.customers = d;
    });

  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "End date of the event should be later than the start date"
        };
      }
      return {};
    }
  }

  private getEventObject(): DAOEvent {
    let e: DAOEvent = this.eventForm.value;
    if(this.eventdata.event.id) e.id = this.eventdata.event.id;
    e.contact_person = this.contactPersonComponent.concatPersonForm?.value;
    if(this.eventdata.contactperson.id) e.contact_person.id = this.eventdata.contactperson.id;

    e.location = this.eventAddresses;
    e.function = this.eventFunctions;
    return e;
  }

  actionEvent() {
    if (this.update) {
      this.updateEvent();
    } else {
      this.createEvent();
    }
  }



  createEvent() {
    if (!this.eventForm.valid) {
      this.presentToast(this.eventForm.controls.details.errors?.dates ? this.eventForm.controls.details.errors?.dates.toString() : 'Please fill in all the information');
    } else {
      this.api.createEvent(this.getEventObject()).subscribe(d => {
        if (d.status_code == 500) {
          this.presentToast(d.status_code + '; Error: ' + d.data);
        }
      })
    }
  }
  updateEvent() {
    if (!this.eventForm.valid) {
      console.log(this.eventForm.errors)
      this.presentToast('Please fill in all the information');
    } else {
      this.api.updateEvent(this.getEventObject()).subscribe(d => {
        if(d.is_error) {
          this.presentToast('Could not update the event. Please try again later.');
        } else {
          this.presentToast('Successfully updated event!');
        }
      })
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

  async presentAddressModal() {
    const modal = await this.modalCtrl.create({
      component: AddAddressComponent
    });

    await modal.present();

    // Add the new address to a list of addresses when dismissing the modal
    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        // Make sure the values are Truthy https://developer.mozilla.org/en-US/docs/Glossary/Truthy
        if (modalDataResponse.data) {
          this.eventAddresses.push(modalDataResponse.data);
        }
      }
    });
  }

  removeAddressFromList(eventAddress: Address) {
    const index = this.eventAddresses.indexOf(eventAddress, 0);
    if (index > -1) {
      this.eventAddresses.splice(index, 1);
    }
  }

  removeEventFunctionFromList(eventFunction: EventFunction) {
    const index = this.eventFunctions.indexOf(eventFunction, 0);
    if (index > -1) {
      this.eventFunctions.splice(index, 1);
    }
  }


  async addFunction() {
    const modal = await this.modalCtrl.create({
      component: AddFunctionPage,
      componentProps: {
        'name': this.eventForm.get('name').value,
        'addressList': this.eventAddresses,
      }
    });
    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        if (modalDataResponse.data) {
          this.eventFunctionObj = modalDataResponse.data;
          this.eventFunctions.push(this.eventFunctionObj);
        }
      }
    });

    return await modal.present();
  }

}
