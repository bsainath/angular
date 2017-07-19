import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UsersComponent }  from './users.component';
import { UsersService } from './users.service';
import {EmailValidateDirective} from './email-validate.directive';
import { appRouterModule } from "./app.routes";
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule,appRouterModule ],
  declarations: [ AppComponent,UsersComponent,EmailValidateDirective ],
  bootstrap:    [ AppComponent ],
  providers: 	[UsersService]
  
})

export class AppModule { }
