# BagelBunch

## Naming Scheme
* We used the Vue CLI to initialize our project, so it built a file structure for us. Most of our frontend code will live in bagel-bunch/src/views. In here, we will create a directory for each view in the program.

## Version Control
* No one should ever commit directly to the master branch. We will each work on a separate branch and merge it into master once it has been reviewed and tested.

## Tool Stack
* We will use Vue to create the frontend. We're not sure exactly what we will use for the backend yet, but the current leading suggestion is Firebase's database and cloud function functionalities.

## Build Instructions
* Run `npm install` to install all dependencies for building and testing. You can use `npm run serve` inside the bagel-bunch directory to view the site at `http://localhost:8080`

## Hosted site
* The hosted site can be found at https://bagelbunch-b5e21.web.app

## Backend Testing Instructions
* To run the backend tests, do the following:
    * `cd` into the backend directory
    * Install python3
    * `pip3 install requests`
    * `python3 backend_test.py`

## Frontend Testing Documentation
* Before merging anything into master, we manually test the following views:
    * Login
    * Create Account
    * Profile
    * Admin Menu
    * Admin Create Employee
    * Cashier View
    * Chef View
    * Order View

## Sprint Reports
* docs/Planning/StandupReports

## Login Credentials 
* Manager username: manager@bb.com
* Manager password: asdf
* Chef username: chef@bb.com
* Chef password: asdf
* Cashier username: cashier@bb.com
* Cashier password: asdf
* Customer username: customer@bb.com
* Customer password: asdf