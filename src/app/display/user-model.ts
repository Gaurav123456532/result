export class usermodel
{ 
    id:number;
    first_name:string;
    last_name:string;
    email:string;
    gender:string;
    avatar:string;
    domain:string;
    available:boolean;

    constructor(id:number,first_name:string,lastname:string,email:string,avatar:string,domain:string,available:boolean,gender:string)
    {
       this.id=id;
       this.first_name=first_name;
       this.last_name=lastname;
       this.email=email;
       this.avatar=avatar;
       this.domain=domain;
       this.available=available;
       this.gender=gender;
    }

}