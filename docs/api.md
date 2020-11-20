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
    * money: Optional[float] (defaults to 100)
    * favorite: Optional[str] (defaults to None)
* Response
    * success: bool
    * error: Optional[str]
    
### POST /getAccountID (deprecated)
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
    * account: Account
    * accountID: str
    * error: Optional[str]

### POST /getMenu
* Request
* Response
    * success: bool
    * menu: Menu
    * error: Optional[str]

### POST /updateMenu
* Request
    * menu: Menu
* Response
    * success: bool
    * error: Optional[str]

### POST /order
* Request
    * accountID: str
    * milliseconds: float
    * cost: float
    * dishes: List[Dish]
* Response
    * success: bool
    * error: Optional[str]
