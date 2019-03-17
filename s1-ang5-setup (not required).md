#SOFTWARE CONFIGURATION
-----------------------
[required] 
angular cli : 1.6.3
$ node -v
v8.15.1

#create a new project with previous version of Angular cli

#downgrade the angular-cli if required
npm uninstall -g angular-cli
npm cache clean
(optional)ng  npm cache clean --force
npm install -g @angular/cli@1.6.3

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
Angular CLI: 1.6.3
Node: 8.15.1

#create angular project
ng new userportal-ang6
npm audit fix
