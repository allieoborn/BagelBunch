# BagelBunch API

## Notes
##### Base URL: https://us-central1-bagelbunch-b5e21.cloudfunctions.net
##### Note: Make sure to add a Content-Type: application/json header to your requests.

## Endpoints

### GET /helloWorld
* Request
* Response
    * message: str
    
### POST /createAccount
* Request
    * name: str
    * email: str
    * password: str
    * type: str (customer, chef, cashier, manager)
    * money: Optional[float] (defaults to 0)
    * favorite: Optional[str] (defaults to None)
* Response
    * success: bool
    * error: Optional[str]
    
### POST /getAccountID
* Request
    * email: str
* Response
    * success: bool
    * error: Optional[str]
    * id: Optional[str]

### POST /updateName
* Request
    * accountID: str
    * name: str
* Response
    * success: bool
    * error: Optional[str]

### POST /updatePassword
* Request
    * accountID: str
    * password: str
* Response
    * success: bool
    * error: Optional[str]

### POST /addMoney
* Request
    * accountID: str
    * money: float
* Response
    * success: bool
    * error: Optional[str]

### POST /login
* Request
    * email: str
    * password: float
* Response
    * success: bool
    * error: Optional[str]
