#SOFTWARE CONFIGURATION
-----------------------
[required] 
Angular CLI version 6.0.3
$ node -v
v8.15.1
$ npm -v
6.4.1

#create a new project with a specific version of Angular cli

#downgrade/upgrade the angular-cli if required
npm uninstall -g angular-cli
npm cache clean
(optional) npm cache clean --force
npm install -g @angular/cli@6

[bug] ng --version
module.js:550
    throw err;
    ^
Error: Cannot find module '@angular-devkit/core'

[soln]
Looks like a dependency was removed somewhere. I worked around this by:

For local angular-cli: npm install @angular-devkit/core --save-dev
For global angular-cli: npm install -g @angular-devkit/core

Edit: As discussed below, you should perhaps not use --save-dev here.

[run]
ng --version
Angular CLI: 6.2.9
Node: 8.15.1
$ npm --version
6.4.1

#create angular project
ng new userportal-ang6
npm audit fix

[run]
ng serve
http://localhost:4200/
