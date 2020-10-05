# The Initial Project Plan

## Summary of the project being built
This project is a Web-based ordering system for a Bagel Shop. With everything stored to the cloud the Bagel Team will be able to see and manage their inventory from any part of the store. 

The ability to create new bagels will be available to both the cashier and the customer from anywhere, either in the store or on their phone at home for in-store pick up or delivery. 

This order is then made available for the Chefs in the kitchen to know how to make the next bagels. 

This Application will also keep track of the Bagels status, for all users involved in the process to know. When a new Bagel is ordered it will be in a Created status and then the chef will move it to In-Progress so the customer can know. Then the cashier will move it to Completed when they are ready to give it to the customer.

## Description of team organization
```
Current Plan
```
+ Allison Oborn - Requirements.txt
+ Andrew McMullin - Initial Project Plan
+ Eli Hermann - Use Case Diagrams
+ Wesley Dashner - [ README.md ](../README.md)
```
Future Plan
```
+ Allison Oborn - Project Management and backend development
+ Andrew McMullin - Data Processing from frontend to backend
+ Eli Hermann - Complex Frontend Problems
+ Wesley Dashner - Backend Database Management

## Description of the overall software development process
The development will be broken up into four phases.  Each phase will be a little like a Sprint in an Agile method and a little like an iteration in a Spiral process.  Specifically, each phase will be like a Sprint, in that work to be done will be organized into small tasks, placed into a “backlog”, and prioritized.   Then, using on time-box scheduling, the team will decide which tasks the phase (Sprint) will address.  The team will use a Scrum Board to keep track of tasks in the backlog, those that will be part of the current Sprint, those in progress, and those that are done.

Each phase will also be a little like an iteration in a Spiral process, in that each phase will include some risk analysis and that any development activity (requirements capture, analysis, design, implementation, etc.) can be done during any phase.  Early phases will focus on understanding (requirements capture and analysis) and subsequent phases will focus on design and implementation.  Each phase will include a retrospective.

    Phase 1 - Requirements Capture
    Phase 2 - Analysis, Architectural, UI, and DB Design
    Phase 3 - Implementation, and Unit Testing
    Phase 4 - More Implementation and Testing 

We will use Unified Modeling Language (UML) to document user goals, structural concepts, component interactions, and behaviors.

## Policies & Procedures
+ We will be using Zoom for video interaction and Slack for other communication, such as ideas and topics to discuss. 
+ Team Meeting plan, is every other day on a Zoom Call or in person. We will discuss the ideas and topics listed in the Overall Software Development Plan and ones that came up in our messaging.
+ [Github.com](https://github.com/allieoborn/BagelBunch) is where we will keep our code for this project.

## Risk analysis
### Risk Structure: Severity  [ Must, should, could, won't ], Consequences,  Workarounds
#
#### All the actors(customers, chefs, cashiers, and the manager) need to have a login
+ Must, Storage Space on Database, None.
#### All the actors need to be able to access the web page at any time
+ Must, Server Cost and Management, None.
#### Chefs, cashiers, and the manager should also be able to order food, whether that be through an additional customer account, or a function of their employee account
+ Should, Added complexity to managing user accounts, adding that to all users accounts.
#### Create an account (with $100 in it)
+ Must, Storage Space on Database, None.
#### Account information includes: name, username, password, email, phone number, and customer ID
+ Must, IDK, None.
#### View the menu and place an order
+ Must, Added development time, In-Store only orders.
#### View the status of their order
+ Should, Added development time, One notify when it's done.
#### If they are at the store in person, their order should be marked as ASAP
+ Must, Needed filtering system to accomodate pushin ASAP to front, Not doing that :).
#### If they are not at the store, specify a pickup time (must be within 24 hours)
+ Must, Added development time, None.
#### Cancel an order if it's before the chef has started making it
+ Should, Deleting an order shouldn't mess up ordering of Orders, IDK.
#### View their account balance
+ Must, None, None.
#### Add money to their account (Just specify an amount and have it added, no need to worry about actual credit card info)
+ Must, Added development time, None.
#### Edit their account info/change their password
+ Should, emailing confirmation, not emailing them just letting them change it whenever.
#### View and re-order previous orders
+ Could, Storing old orders can add a lot to the DB, only save those they want saved.
#### Have a notification sent to them when their order is ready (Notification could be sent through email or text message - I would think text message would be the most convenient for the customer)
+ Could, setting up a messaging server, just make them look at the Status on the web-page.
#### If they buy a dozen bagels, have their account note that they get a free bagel
+ Could, Adding a free status or label on an order, Not offering this.
#### View all open bagel orders
+ Could, Data rendering when there are a lot, Display the top 20 with pagination.
#### View the time it needs to be ready
+ Should, Added development time, None.
#### Mark orders as in-progress
+ Should, Adding the status functionality, None.
#### Remove bagel items from inventory when they make the bagels or when the bagels go bad
+ Should, Added development time, None.
#### Mark orders as complete when they're delivered to the cashier
+ Must, Added development time, Should we jsut delete them.
#### View all open orders
+ Could, Data rendering when there are a lot, Display the top 20 with pagination.
#### Remove drinks and other items from inventory
+ Should, Added development time, None.
#### Take money out of a customer’s account for their order
+ Must, Added development time, None.
#### View all orders
+ Could, Data rendering when there are a lot, Display the top 20 with pagination.
#### Generate the inventory report (would like to have 100 of everything in inventory)
+ Must, Added development time, None.
#### Mark individual inventory items as restocked (Could also include an option for marking the whole store as restocked rather than just individual items)
+ Should, Added development time, None.
#### Approve Cashier/Chef accounts
+ Must, Emailing confirmation, None.
#### Add/Remove menu items
+ Must, Added development time, None.

## Please visit the [README.md](../README.md) for the Configuration Management Plan
