"use strict";
var app_component_1 = require("./app.component");
var users_component_1 = require("./users.component");
var router_1 = require("@angular/router");
var routes = [
    // map '/persons' to the people list component
    {
        path: 'users',
        component: users_component_1.UsersComponent,
    },
    // map '/' to '/app' as our default route
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'appnew',
        component: app_component_1.AppComponent,
    },
];
exports.appRouterModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map