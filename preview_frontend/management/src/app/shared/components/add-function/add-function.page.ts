import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../models/address.model";

@Component({
  selector: 'app-modal-popover',
  templateUrl: './add-function.page.html',
  styleUrls: ['./add-function.page.scss'],
})
export class AddFunctionPage implements OnInit {

  @Input() name: string;
  @Input() addressList: Array<Address>;

  ngOnInit(): void {
  };
}
