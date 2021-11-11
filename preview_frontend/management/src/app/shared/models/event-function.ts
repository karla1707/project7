import { Address } from './address.model';
import {IonDatetime} from '@ionic/angular';

export interface EventFunction {
  name: string;
  location: Address;
  description: string;
  shifts?: Shift[];
}

export interface Shift {
  id?: number;
  startDateTime: Date;
  endDateTime: Date;
  peopleNeeded: bigint;

}
