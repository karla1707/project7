import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../models/address.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventFunction} from '../../models/event-function';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-function-form',
  templateUrl: './function-form.component.html',
  styleUrls: ['./function-form.component.scss'],
})
export class FunctionFormComponent implements OnInit {

  @Input() name: string;
  @Input() addressList: Array<Address>;

  functionForm: FormGroup;
  eventFunctionObj: EventFunction;

  constructor(
    private modalCtr: ModalController,private fb: FormBuilder

  ) { }


  async close() {
    await this.modalCtr.dismiss(null);
  }

  async save(){

    if (this.functionForm.valid) {
      this.eventFunctionObj = {
        name: this.functionForm.value.name,
        location: this.functionForm.value.location,
        description: this.functionForm.value.description
      }
    }
    await this.modalCtr.dismiss(this.eventFunctionObj);


  }
  ngOnInit() {
    this.functionForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: [''],
    });
  }
  addressString(address: Address): string{
    return  `${address.street}, ${address.house_number}, ${address.postal_code}, ${address.city}, ${address.country}`;
  }


}
