import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {EventFunction, Shift} from '../../models/event-function';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.page.html',
  styleUrls: ['./add-shift.page.scss'],
})
export class AddShiftPage implements OnInit {

  @Input() eventFunctionName: string;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  formStatus = false;

  shiftObj: Shift;
  shiftForm: FormGroup;
  constructor(private modalCtrl: ModalController,private fb: FormBuilder) { }

  ngOnInit() {
    this.shiftForm = this.fb.group({
      startDateTime: ['', [Validators.required]],
      endDateTime: ['', [Validators.required]],
      peopleNeeded: ['', [Validators.required]],
    });

  }

  async save(){
    if (this.shiftForm.valid) {
      this.shiftObj = {
        startDateTime: this.shiftForm.value.startDateTime,
        endDateTime: this.shiftForm.value.endDateTime,
        peopleNeeded: this.shiftForm.value.peopleNeeded,
      };
    }
    await this.modalCtrl.dismiss(this.shiftObj);

  }

  async cancel(){
    await this.modalCtrl.dismiss(null);


  }

}
