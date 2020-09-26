### Requirements Definition
contains both functional and non-functional requirements for the envisioned project
#### Dan needs an app to run his bagel store
- All the actors(customers, chefs, cashiers, and the manager) need to have a login
- All the actors need to be able to access the web page at any time
- Chefs, cashiers, and the manager should also be able to order food, 
whether that be through an additional customer account, or a function of their employee account
#### Customers need to be able to:
- Create an account (with $100 in it)
- Account information includes: name, username, password, email, phone number, and customer ID
- View the menu and place an order
- View the status of their order
- If they are at the store in person, their order should be marked as ASAP
- If they are not at the store, specify a pickup time (must be within 24 hours)
- Cancel an order if it's before the chef has started making it
- View their account balance
- Add money to their account (Just specify an amount and have it added, no need to worry about actual credit card info)
- Edit their account info/change their password
- View and re-order previous orders
- Have a notification sent to them when their order is ready
(Notification could be sent through email or text message - 
I would think text message would be the most convenient for the customer)
- If they buy a dozen bagels, have their account note that they get a free bagel
#### Chef needs to be able to:
- View all open bagel orders
- View the time it needs to be ready
- Mark orders as in-progress
- Remove bagel items from inventory when they make the bagels or when the bagels go bad
- Mark orders as complete when they're delivered to the cashier
#### Cashier needs to be able to:
- View all open orders
- Remove drinks and other items from inventory
- Take money out of a customer’s account for their order
#### Manager needs to be able to:
- View all orders
- Generate the inventory report 
(would like to have 100 of everything in inventory)
- Mark individual inventory items as restocked 
(Could also include an option for marking the whole store as restocked rather than just individual items)
- Approve Cashier/Chef accounts
- Add/Remove menu items
#### Possible additions for improved functionality:
- Store information about which items people buy the most and which items get thrown away, 
so they can improve inventory purchasing strategies in the future
- Sort menu items so that the most popular items are at the top

