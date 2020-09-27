# The Initial Project Plan

## Summary of the project being built
This project is a Web-based ordering system for a Bagel Shop. It includes the creation of new bagels by the cashier or the customer. This is then made available for the Chefs to know what to make. This Application will keep track of the Bagels Status for all to know and observe.

## Description of team organization
+ Allison Oborn - Requirements.txt
+ Andrew McMullin - Initial Project Plan
+ Eli Hermann - Use Case Diagrams
+ Wesley Dashner - [ README.md ](../README.md)

## Description of the overall software development process
( Provided by the Instructor )

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
