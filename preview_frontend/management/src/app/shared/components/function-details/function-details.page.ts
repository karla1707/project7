import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventFunction} from '../../models/event-function';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-function-details',
  templateUrl: './function-details.page.html',
  styleUrls: ['./function-details.page.scss'],
})
export class FunctionDetailsPage implements OnInit {

 @Input() eventFunction: EventFunction;

 functionDetails: FormGroup;
 locationString: string;

  constructor(
    private modalCtr: ModalController,private fb: FormBuilder

  ) { }


  async close() {
    await this.modalCtr.dismiss(null);
  }

  async save(){
    //initial plan was to make the update possible here however does not work
   /*console.log('obj value' + this.eventFunction.name);
    console.log('form value' + this.functionDetails.controls.name); */
    this.eventFunction = {
        name: this.functionDetails.value.name,
        location: this.functionDetails.value.location,
        description: this.functionDetails.value.description
      };

   // console.log('FUNCTION DETAILS NAME: ' + this.eventFunction.name);
    await this.modalCtr.dismiss(this.eventFunction);


  }
  ngOnInit() {
    this.functionDetails = this.fb.group({
      name: this.eventFunction.name,
      location: this.eventFunction.location,
      description: this.eventFunction.description,
    });

    this.locationString = `${this.eventFunction.location.street}, ${this.eventFunction.location.house_number}, ${this.eventFunction.location.postal_code}, ${this.eventFunction.location.city}, ${this.eventFunction.location.country}`;
  }

}
