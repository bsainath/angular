import { Component } from '@angular/core';


@Component({
  selector: 'user',
  template: `<form><input  [value]='newval' type="text" EmailValidate  /></form>  <div>
  <button type="button" id="ted" (click)="testclick($event)" >hgfhgfhg</button>
  <input type="radio" name="colors" >blue
  <input type="radio" name="colors" (click)="color='orange'">orange
  <input type="radio" name="colors" (click)="color='green'">green
</div>`,
})

export class UsersComponent {
newval= '';
  constructor() {
 // console.log('users');
  }

testclick (event: any) {
  let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = event.target.attributes.id;
 //   console.log(idAttr);
    let value = idAttr.nodeValue;
 // console.log(value);
 //  console.log(event.target.id);
  this.newval = value;
  }
 }
