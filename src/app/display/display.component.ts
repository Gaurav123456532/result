
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from '../cart/cart.model';
import { cartservice } from '../cart/cart.service';
import { usermodel } from './user-model';
import { userservice } from './user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
 
  firstname:string;
  
  gender;
  availablity;
  p:number=1;
  domain;
  domain1;
  users:usermodel[]=[];
  isclicked=false;
  filterList={
   
    gender:['Male','Female','Agender'],
    availablity:[true,false],
    domain :['Management','UI Designing','Business Development','Marketing','Finance','IT','Sales']
  }
  data=this.users;
  addtocart(domain:string,firstname:string,lastname:string)
  {
     if(domain==='Sales')
     {
     this.isclicked=true;
     this.carts.sales.push(new cart(firstname,lastname));
     
     this.router.navigate(['/carts']);
     }
     if(domain==='Marketing')
     {
     this.isclicked=true;
     this.carts.marketing.push(new cart(firstname,lastname));
     
     this.router.navigate(['/carts']);
     }
     if(domain==='Finance')
     {
     this.isclicked=true;
     this.carts.Finance.push(new cart(firstname,lastname));
  
     this.router.navigate(['/carts']);
     }
     if(domain==='UI Designing')
     {
     this.isclicked=true;
     this.carts.uIDesigning.push(new cart(firstname,lastname));
     
     this.router.navigate(['/carts']);
     }
     if(domain==='IT')
     {
     this.isclicked=true;
     this.carts.IT.push(new cart(firstname,lastname));
     
     this.router.navigate(['/carts']);
     }
     if(domain==='Business Devlopment')
     {
     this.isclicked=true;
     this.carts.Business.push(new cart(firstname,lastname));
     
     this.router.navigate(['/carts']);
     }
     if(domain==='Management')
     {
     this.isclicked=true;
     this.carts.Managment.push(new cart(firstname,lastname));

     this.router.navigate(['/carts']);
     }
  }

  filterChange(appliedfilter)
  { 
  this.availablity=appliedfilter.appliedFilterValues.availablity;
  this.gender=appliedfilter.appliedFilterValues.gender;
  this.domain1=appliedfilter.appliedFilterValues.domain;
   
    
      if(this.availablity&&!this.domain1&&!this.gender)
      {
        this.ngOnInit()
       this.users=this.users.filter(item=>
        {
            return item.available===this.availablity;
        })
      }
     
      if(this.gender&&!this.domain1&&!this.domain1)
      {
        this.ngOnInit()
       this.users=this.users.filter(item=>
        {
            return   item.gender===this.gender;
        })
      }
      
      if(this.domain1&&!this.availablity&& !this.gender)
      {
        this.ngOnInit()
       this.users=this.users.filter(item=>
        {
              return  item.domain===this.domain1;
        })
      } 
      if(!this.availablity&&!this.gender&&!this.domain1) 
      {
           this.ngOnInit()
      }
      if(this.availablity && this.domain1)
      {
        this.ngOnInit();
        this.users=this.users.filter(item=>
          {
          return item.available===this.availablity
      })
      this.users=this.users.filter(item=>
        {
          return item.domain===this.domain1;
        })
      }
      if(this.availablity && this.gender)
      {
        this.ngOnInit();
        this.users=this.users.filter(item=>
          {
          return item.available===this.availablity
      })
      this.users=this.users.filter(item=>
        {
          return item.gender===this.gender;
        })
      }
      if(this.gender && this.domain1)
      {
        this.ngOnInit();
        this.users=this.users.filter(item=>
          {
          return item.gender===this.gender
      })
      this.users=this.users.filter(item=>
        {
          return item.domain===this.domain1;
        })
      }
      
       
     
     
    
  }
  
  constructor(private userservice:userservice,private router:Router,private carts:cartservice)
  {
    
  }
  ngOnInit(): void {
    this.users=this.userservice.getuser();
    
  }
  search()
  {
    if(this.firstname=='')
    {
      this.ngOnInit();
    }
    else
    {
      this.users=this.users.filter(res=>
        {
          
        return res.first_name.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
        }
        )
    }
  }
  
}


