import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router'
import { DisplayComponent } from '../display/display.component';
import { cart } from './cart.model';
import { cartservice } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private router:Router,private display:DisplayComponent,private carts:cartservice)
  {}
  
  sales:cart[]=[];
  business:cart[]=[];
  marketing:cart[]=[];
  management:cart[]=[];
  finance:cart[]=[];
  it:cart[]=[];
  designing:cart[]=[];
  ngOnInit(): void {
    this.sales=this.carts.sales;
    this.business=this.carts.Business;
    this.marketing=this.carts.marketing;
    this.management=this.carts.Managment;
    this.finance=this.carts.Finance;
    this.it=this.carts.IT;
    this.designing=this.carts.uIDesigning;
    
  }
  domain;
 
  
   addtocart()
   {
    this.router.navigate(['/display']);
    this.display.isclicked=false;
    
   }
}
