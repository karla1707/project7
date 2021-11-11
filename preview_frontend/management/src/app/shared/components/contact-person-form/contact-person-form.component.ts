import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-person-form',
  templateUrl: './contact-person-form.component.html',
  styleUrls: ['./contact-person-form.component.scss'],
})
export class ContactPersonFormComponent implements OnInit {

  public concatPersonForm: FormGroup;

  @Input()
  contactPerson: any;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.concatPersonForm = this.formBuilder.group({
      first_name: [this.contactPerson?.first_name, [Validators.required]],
      last_name: [this.contactPerson?.last_name, [Validators.required]],
      email: [this.contactPerson?.email, [Validators.required]],
      phone: [this.contactPerson?.phone, [Validators.required]],
    })
  }

}
