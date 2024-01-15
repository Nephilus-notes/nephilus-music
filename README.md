# NephilusMusic

Event-List: On hover for the map link add a banner that follows the cursor saying "click here to map" or something
Event-List: make the times more readable (Perhaps LiveEvent DTO that has easily readable stringsm, and a converter to make it happen?)
Song-List: figure out pagination
Song/Event Lists: merge into a single view instead of component so they can take up half the screen
Set-List-List: Make a setlist DTO that takes the name and ID of the event it was played at.

1. refresh subsscribe page on success or navigate away.
2. add an auto mailer for events
3. testing activated routes
4. testing components that use api service (that uses a service for http requests/pipelines)

made a change for deploy


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Development Goals

1. Fully integrate backend

2. Build and maintain higher than 90% test coverage

3. Build custom analytics engine

4. Problem solve storage for analytics data/ push frequency vs server load

5. Add page for leatherworking/verbiage about site building

6. Abstract environment into a service

7. Add a wrapper for http requests that creates an insertion point for the logging/tracking


4. 1. ~~Get general location of users (city)~~
<!-- 4. 2. Track time on page without navigating away -->
4. 2. ~~Add analytics to Button component and links~~
4. 3. Time tracking for HTTP reqeusts
4. 4. ~~Track time spent on pages and overall page view count~~
4. 4. 1. Track time before navigating to a new internal page.
4. 5. Adjust services to add a log cadence controller/timer