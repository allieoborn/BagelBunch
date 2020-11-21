import requests


class Test:

    def __init__(self, email: str, password: str):
        self.email: str = email
        self.password: str = password
        self.account_id: str = ''

    def test_endpoint(self, path: str, data: dict):
        url = 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net/'
        response = requests.post(f'{url}/{path}', json=data)
        assert response.status_code == 200
        return response.json()

    def test_login(self):
        data = {
            'email': self.email,
            'password': self.password,
        }
        self.account_id = self.test_endpoint('login', data)['accountID']

    def test_update_name(self):
        data = {
            'accountID': self.account_id,
            'name': 'eli'
        }
        self.test_endpoint('updateName', data)
        data['name'] = 'wesley'
        self.test_endpoint('updateName', data)

    def test_update_password(self):
        data = {
            'accountID': self.account_id,
            'password': 'password'
        }
        self.test_endpoint('updatePassword', data)
        data['password'] = 'different_password'
        self.test_endpoint('updatePassword', data)

    def test_add_money(self):
        data = {
            'accountID': self.account_id,
            'money': 100
        }
        self.test_endpoint('addMoney', data)

    def test_get_menu(self):
        self.test_endpoint('getMenu', {})

    def test(self):
        # self.test_login() must run first so we can get self.account_id
        self.test_login()
        self.test_update_name()
        self.test_update_password()
        self.test_add_money()
        self.test_get_menu()


def main():
    email = 'wdashner11@gmail.com'
    password = 'different_password'
    t = Test(email, password)
    t.test()
    print('All tests succeeded.')


main()
