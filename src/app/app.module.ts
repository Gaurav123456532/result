import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'Ng2-search-filter';
import {Ng2OrderModule} from 'Ng2-order-pipe';
import {FormsModule} from '@angular/forms';
import {GenericListFilterModule} from 'generic-list-filter';
import { CartComponent } from './cart/cart.component'
import { Routes,RouterModule } from '@angular/router';
const route:Routes=[{path:'carts',component:CartComponent},
{path:'display',component:DisplayComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CartComponent
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    GenericListFilterModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
