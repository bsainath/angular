import { Component } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'my-app',
  template: `<h5>Hello {{name}}</h5>  <ul> 
  <li *ngFor="let user of users">
 <a [routerLink]="['/user']">
       {{ user }}
      </a>
    
  </li> </ul>
<router-outlet></router-outlet>`,

})

export class AppComponent  { 
users: any;

constructor(private _exampleService: UsersService) {

    }

    ngOnInit() {
       this.users = this._exampleService.getusers();
    }

name = 'test';

}
