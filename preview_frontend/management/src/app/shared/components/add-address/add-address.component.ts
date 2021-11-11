import {Component, OnInit, ViewChild} from '@angular/core';
import {Address} from "../../models/address.model";
import {ModalController} from "@ionic/angular";
import {AddressComponent} from "../address/address.component";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {

  @ViewChild(AddressComponent, {static: true}) public addressComponent: AddressComponent;

  addressObj: Address;

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  // Dismiss the modal and add the address
  async getAddressFromTheForm() {

    // validate the form and then add it to an address object
    if (this.addressComponent.addressForm.valid) {
      this.addressObj = {
        street: this.addressComponent.addressForm.value.street,
        house_number: this.addressComponent.addressForm.value.house_number,
        postal_code: this.addressComponent.addressForm.value.postal_code,
        city: this.addressComponent.addressForm.value.city,
        country: this.addressComponent.addressForm.value.country
      }

      // Return the address taken from the form as an Address object and return it to the event-page
      await this.modalCtrl.dismiss(this.addressObj);
    }

    // console.log(JSON.stringify(this.addressComponent.addressForm.value))
  }

  async dismiss() {
      await this.modalCtrl.dismiss();
  }
}
