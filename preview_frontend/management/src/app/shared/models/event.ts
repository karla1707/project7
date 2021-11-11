import { EventFunction } from './event-function';
import { ContactPerson } from './contact-person.model';
import { Customer } from './customer';
import { Address } from './address.model';

export interface Event {
    name : string,
    contact_person_id : number,
    start_date: Date,
    end_date: Date,
    description: string,
    customer_id: number,
    address_id: number
}

export interface DAOEvent {
    id?: number,
    name : string,
    contact_person : ContactPerson,
    start_date: Date,
    end_date: Date,
    description: string,
    customer_id: number,
    location: Address[],
    function : EventFunction[]
}
