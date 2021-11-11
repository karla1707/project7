export interface Customer {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    email: string;
    phone: string;
    contact_person: string;
    admin_contact_person: string;
    admin_email: string;
    hourly_rate: string;
    dress_code: string;
    remarks: string;
    address_id: string;
    archived: number;
}