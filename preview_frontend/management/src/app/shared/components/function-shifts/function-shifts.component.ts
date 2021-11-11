import {Component, Input, OnInit} from '@angular/core';
import {EventFunction, Shift} from '../../models/event-function';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddShiftPage} from '../add-shift/add-shift.page';
import {ModalController} from '@ionic/angular';
import {AddFunctionPage} from "../add-function/add-function.page";
import {FunctionDetailsPage} from "../function-details/function-details.page";

@Component({
  selector: 'app-function-shifts',
  templateUrl: './function-shifts.component.html',
  styleUrls: ['./function-shifts.component.scss'],
})
export class FunctionShiftsComponent implements OnInit {

  @Input()  eventFunction: EventFunction;
  @Input()  eventStartDate: Date;
  @Input()  eventEndDate: Date;


  functionShiftsForm: FormGroup;

  @Input() showInviteButtons: boolean;

  constructor(private formBuilder: FormBuilder,public modalCtrl: ModalController) { }

  ngOnInit() {
    this.eventFunction.shifts = [];
    this.functionShiftsForm = this.formBuilder.group({

    });
  }

  async addShift(){
    const modal = await this.modalCtrl.create({
      component: AddShiftPage,
      componentProps: {
        eventFunctionName : this.eventFunction.name,
        minDate: this.eventStartDate,
        maxDate: this.eventEndDate
      }
    });
    modal.onDidDismiss().then((modalDataResponse) => {
      console.log('response' + JSON.stringify(modalDataResponse));
      if (modalDataResponse !== null) {
        if(modalDataResponse.data) {
          this.eventFunction.shifts.push(modalDataResponse.data);
        }    }
    });

    return await modal.present();
  }

  async updateEventFunction(){
    const modal = await this.modalCtrl.create({
      component: FunctionDetailsPage,
      componentProps: {
        eventFunction : this.eventFunction,
      }
    });
    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        console.log('FUNCTION DETAILS NAME modal response: ' + JSON.stringify(modalDataResponse.data));

        this.eventFunction = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  removeShiftFromFunction(shift: Shift) {
    const index = this.eventFunction.shifts.indexOf(shift, 0);
    if (index > -1) {
      this.eventFunction.shifts.splice(index, 1);
    }
  }

}
