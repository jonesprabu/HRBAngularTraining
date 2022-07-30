export class Class {
    id: number;
    customer_name: string;
    email_address: string;
    phone_number: number;
    taxi: string;
    extras: string;
    /* pickup_time: short; */
    pickup_time: string;
    pickup_place: string;
    dropoff_place: string;
    comments: string;
    constructor(){
        this.id=0;
        this.email_address="";
        this.customer_name="";
        this.phone_number=0;
        this.taxi="";
        this.extras="";
        this.pickup_time="";
        this.pickup_place="";
        this.dropoff_place="";
        this.comments="";
    }
}
