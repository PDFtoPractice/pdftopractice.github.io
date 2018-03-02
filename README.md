# Should I Take?

This project is the frontend of am application which allows users to query about drug interaction, drug and operation interaction and drug and condition interaction.

## Architecture

The root component is the app component in which the name and navigation components are shown initially. The name component gives information about the application. Both of these components link to the data card component, which provides the main functionality in the application, allowing users to put data into queries. This will connect to the advice service which queries the backend. The data returned from there is then shown in a results card component.

## Navigation

The main functionality of the application (the data card component) can be reached from the first page via the 'Get Quick Advice on Drug Interaction' banner and the 'GET ADVICE' button. The 'Should I Take?' title in the top left and the 'ABOUT' button go back to the first page.

The three tabs in the data card component represent each of the three use cases described below. The 'Get Results' button sends the form data to the backend and should then display the results in the results card component when the data is available. To get back to the form from the results, there is a button at the bottom of the list of cards on the results page.

## Use cases

There are three use cases or types of queries available to users. The first is drug interaction, where the user inputs two drugs and the application checks for possible interactions between them from the documents it has available. The second is drug-operation, where information relevant to the taking of a particular drug before and after an operation will be returned. The final use case is drug-condition, where the user gives a drug and a condition and should receive data pertaining to taking that drug with the specified condition.

## Disclaimer

"Should I Take?" was developed based on documentation available online about drugs and their interactions with other drugs, conditions and operations. None of the members of the Foxtrot team have medical expertise and the advice is computed by a machine trained to identify key information. If unsure, please have a read of the medical documents suggested by the app or contact your doctor.

# (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
