import { Injectable } from "@angular/core";
import { cart } from "./cart.model";
@Injectable({providedIn:'root'})
export class cartservice{
    sales:cart[]=[];
    marketing:cart[]=[];
    uIDesigning:cart[]=[];
    Business:cart[]=[];
    IT:cart[]=[];
    Managment:cart[]=[];
    Finance:cart[]=[];
    
}

