# Calculator-frontend

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

If you have problems with install angular-cli on Windows:
1. Updated to the current version of node(v6.3.1 or higher, includes npm v3.10.3 or higher)
After that:

2. npm uninstall -g angular-cli
3. npm cache clean
4. npm install -g node-gyp
5. npm install --global --production windows-build-tools => installs Python and visual studio visual C++ build tools). Be patient. This installation takes about 15 minutes. Further information: https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules
6. npm install -g node-pre-gyp
7. npm install -g chokidar (recommended for all Windows users to "simulate" fs-events-functions) => File system watching events (fs-events) is a module for OS Apple Macintosh. It’s not possible to install it on a windows operating system. The alternative for windows is chokidar. It will take the position of watching for file system events on Windows (Macintosh uses fs-events module for this). Ignore errors and warnings during installation. Further information: nodejs/node#7858
8. npm install -g angular-cli@webpack

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
