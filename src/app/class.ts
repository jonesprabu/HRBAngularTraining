export class Class {
    id: number;
    customer_name: string;
    phone_number: number;
    email_address: string;
    taxi: string;
    pickup_time:string;
    pickup_place:string;
    dropoff_place:string;
    comments:string;
    extras:string;


    constructor() {
        this.id=0;
        this.customer_name="";
        this.phone_number=0;
        this.email_address="";
        this.taxi="";
        this.pickup_time="";
        this.pickup_place="";
        this.dropoff_place="";
        this.comments="";
        this.extras="";
    }
}
