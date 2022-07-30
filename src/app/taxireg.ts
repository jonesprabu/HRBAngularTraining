export class Taxireg {
    Name:string;
    Phone:string;
    Email:string;
    TaxiType:string;
    Extras: string;
    PickupDateTime:Date | undefined;
    PickupPlace:string;
    DropoffPlace:string;
    SpecialInstructions:string;
    id: number;
    constructor(){
        this.Name='';
        this.Email='';
        this.Phone=''; 
        this.TaxiType=''; 
        this.Extras='';
        this.PickupPlace='';
        this.DropoffPlace='';
        this.SpecialInstructions='';
        this.id=0;
  }
}

