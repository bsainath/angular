"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UsersComponent = (function () {
    function UsersComponent() {
        this.newval = '';
        // console.log('users');
    }
    UsersComponent.prototype.testclick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = event.target.attributes.id;
        //   console.log(idAttr);
        var value = idAttr.nodeValue;
        // console.log(value);
        //  console.log(event.target.id);
        this.newval = value;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<form><input  [value]='newval' type=\"text\" EmailValidate  /></form>  <div>\n  <button type=\"button\" id=\"ted\" (click)=\"testclick($event)\" >hgfhgfhg</button>\n  <input type=\"radio\" name=\"colors\" >blue\n  <input type=\"radio\" name=\"colors\" (click)=\"color='orange'\">orange\n  <input type=\"radio\" name=\"colors\" (click)=\"color='green'\">green\n</div>",
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map