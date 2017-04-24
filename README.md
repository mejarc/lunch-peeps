# lunch-peeps
With Lunch Peeps, everybody gets some fresh folks to join at noon!

Arrange your group into multiple tables, each seating a new-to-you assortment of fascinating coworkers, with the click of a button.

Developed by [Melanie Archer](https://github.com/mejarc/lunch-peeps).


## How to install
You must have [Node.js](https://nodejs.org/en/) already installed to use this project.

Once that's squared away, you can clone all the necessary files for this application using Git:

````shell
git clone git@github.com:mejarc/lunch-peeps.git
````

You can also [download them as a .zip archive](https://github.com/mejarc/lunch-peeps/archive/master.zip).

Then, install this project's dependencies. Go to the folder where you have cloned or downloaded the files, and type the following in the console:

````shell
npm install
````
## How to use
After installing everything, you can start the application on your computer by typing the following in the console:

````shell
npm start
````

The application will now appear in your browser at [http://localhost:3000/](http://localhost:3000/).

## Running the tests
This folder includes unit tests that use the Jest testing framework. To run the tests, type the following into the console:

````shell
npm test
````

## TODO
* devise less technical, less Node-dependent installation/serving process. Edit this README as appropriate.
* complete Table generation function in TablesContainer component
* complete Luncher component
* in Table component, make Table render function iterate over `this.state.lunchers`
  from TablesContainer component
* in Table component, increment Table number
* persist the Lunchers data: localStorage? JSON?
* complete Jest unit tests
* `yarn run eject` to remove development artifacts
* add function to delete a Luncher

## Filing a bug or feature request
Please submit your request on the `lunch-peeps` [GitHub Issues page](https://github.com/mejarc/lunch-peeps/issues)