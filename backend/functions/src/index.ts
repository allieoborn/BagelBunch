import * as functions from 'firebase-functions';
import * as firebaseHelper from 'firebase-functions-helper';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    if (request.method === 'OPTIONS') {
        response.set('Access-Control-Allow-Methods', 'POST');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.status(204).send('');
        return;
    }
    response.status(200).json({message: 'hello from firebase'});
    return;
});

export const createAccount = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const name = request.body.name;
    if (!name) {
        response.status(400).json({success: false, error: 'name argument required'});
        return;
    }
    const email = request.body.email;
    const accountsWithGivenEmail = await admin.firestore().collection('accounts').where('email', '==', email).get();
    if (accountsWithGivenEmail.docs.length !== 0) {
        response.status(400).json({success: false, error: `account with that email (${email}) already exists`});
        return;
    }
    if (!email) {
        response.status(400).json({success: false, error: 'email argument required'});
        return;
    }
    const password = request.body.password;
    if (!password) {
        response.status(400).json({success: false, error: 'password argument required'});
        return;
    }
    const type = request.body.type;
    if (!type) {
        response.status(400).json({success: false, error: 'type argument required'});
        return;
    }
    if (!['customer', 'chef', 'cashier', 'manager'].includes(type.toLowerCase())) {
        response.status(400).json({success: false, error: 'type argument must be customer, chef, cashier, or manager'});
        return;
    }
    let money = request.body.money;
    if (!money) {
        money = 100;
    }
    await firebaseHelper.firestore.createNewDocument(db, 'accounts', {
        name: name,
        email: email,
        password: password,
        type: type,
        money: money
    });
    response.status(200).json({success: true});
    return;
});

export const updateName = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const accountID = request.body.accountID;
    if (!accountID) {
        response.status(400).json({success: false, error: 'accountID argument required'});
        return;
    }
    const name = request.body.name;
    if (!name) {
        response.status(400).json({success: false, error: 'name argument required'});
        return;
    }
    const account = await firebaseHelper.firestore.getDocument(db, 'accounts', accountID);
    if (!account) {
        response.status(400).json({success: false, error: `no account with that accountID (${accountID}) was found`});
        return;
    }
    account.name = name;
    await firebaseHelper.firestore.updateDocument(db, 'accounts', accountID, account);
    response.status(200).json({success: true});
    return;
});

export const updatePassword = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const accountID = request.body.accountID;
    if (!accountID) {
        response.status(400).json({success: false, error: 'accountID argument required'});
        return;
    }
    const password = request.body.password;
    if (!password) {
        response.status(400).json({success: false, error: 'password argument required'});
        return;
    }
    const account = await firebaseHelper.firestore.getDocument(db, 'accounts', accountID);
    if (!account) {
        response.status(400).json({success: false, error: `no account with that accountID (${accountID}) was found`});
        return;
    }
    account.password = password;
    await firebaseHelper.firestore.updateDocument(db, 'accounts', accountID, account);
    response.status(200).json({success: true});
    return;
});

export const addMoney = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const accountID = request.body.accountID;
    if (!accountID) {
        response.status(400).json({success: false, error: 'accountID argument required'});
        return;
    }
    let money = request.body.money;
    if (!money) {
        response.status(400).json({success: false, error: 'money argument required'});
        return;
    }
    if (typeof money !== 'number') {
        response.status(400).json({success: false, error: 'money argument must be a number'});
        return;
    }
    const account = await firebaseHelper.firestore.getDocument(db, 'accounts', accountID);
    if (!account) {
        response.status(400).json({success: false, error: `no account with that accountID (${accountID}) was found`});
        return;
    }
    account.money += money
    await firebaseHelper.firestore.updateDocument(db, 'accounts', accountID, account);
    response.status(200).json({success: true});
    return;
});

export const login = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const email = request.body.email;
    const password = request.body.password;
    if (!email) {
        response.status(400).json({success: false, error: 'email argument required'});
        return;
    }
    if (!password) {
        response.status(400).json({success: false, error: 'password argument required'});
        return;
    }
    const accounts = await admin.firestore().collection('accounts').where('email', '==', email).get();
    if (accounts.docs.length === 0) {
        response.status(400).json({success: false, error: 'no account found with that email'});
        return;
    }
    const account = accounts.docs[0];
    if (account.data().password !== password) {
        response.status(400).json({success: false, error: 'incorrect password'});
        return;
    }
    response.status(200).json({success: true, account: account.data(), accountID: account.id});
    return;
});

export const getMenu = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const menu = await firebaseHelper.firestore.getDocument(db, 'menus', 'menu');
    response.status(200).json({success: true, menu: menu});
    return;
});

export const updateMenu = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const menu = request.body.menu;
    if (!menu) {
        response.status(400).json({success: false, error: 'menu argument required'});
        return;
    }
    await firebaseHelper.firestore.updateDocument(db, 'menus', 'menu', menu);
    response.status(200).json({success: true});
    return;
});

export const order = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const accountID = request.body.accountID;
    if (!accountID) {
        response.status(400).json({success: false, error: 'accountID argument required'});
        return;
    }
    const milliseconds = request.body.milliseconds;
    if (!milliseconds) {
        response.status(400).json({success: false, error: 'milliseconds argument required'});
        return;
    }
    if (typeof milliseconds !== 'number') {
        response.status(400).json({success: false, error: 'milliseconds argument must be a number'});
        return;
    }
    const cost = request.body.cost;
    if (!cost) {
        response.status(400).json({success: false, error: 'cost argument required'});
        return;
    }
    if (typeof cost !== 'number') {
        response.status(400).json({success: false, error: 'cost argument must be a number'});
        return;
    }
    const dishes = request.body.dishes;
    if (!dishes) {
        response.status(400).json({success: false, error: 'dishes argument required'});
        return;
    }
    await firebaseHelper.firestore.createNewDocument(db, 'orders', {
        accountID: accountID,
        milliseconds: milliseconds,
        cost: cost,
        dishes: dishes,
        status: 'ordered'
    });
    response.status(200).json({success: true});
    return;
});

export const getOrders = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const accountID = request.body.accountID;
    const onlyAccountOrders = request.body.onlyAccountOrders;
    let orders;
    if (onlyAccountOrders) {
        orders = await admin.firestore().collection('orders').where('accountID', '==', accountID).get();
    } else {
        orders = await admin.firestore().collection('orders').get();
    }
    let returnDocs: FirebaseFirestore.DocumentData[] = [];
    orders.docs.forEach((e) => {
        const data = e.data();
        data.orderID = e.id;
        returnDocs.push(data);
    });
    response.status(200).json({success: true, orders: returnDocs});
    return;
});

export const updateOrderStatus = functions.https.onRequest(async (request, response) => {
    if (!(await functionWrapper(request, response))) {
        return;
    }
    const orderID = request.body.orderID;
    if (!orderID) {
        response.status(400).json({success: false, error: 'orderID argument required'});
        return;
    }
    const status = request.body.status;
    if (!status) {
        response.status(400).json({success: false, error: 'status argument required'});
        return;
    }
    if (status !== 'in-progress' && status !== 'completed' && status !== 'delivered' && status !== 'cancelled') {
        response.status(400).json({success: false, error: 'status argument must be in-progress, completed, delivered, cancelled'});
        return;
    }
    const order = await firebaseHelper.firestore.getDocument(db, 'orders', orderID);
    if (!order) {
        response.status(400).json({success: false, error: `no order with that orderID (${orderID}) was found`});
        return;
    }
    if (status === 'delivered') {
        const account = await firebaseHelper.firestore.getDocument(db, 'accounts', order.accountID);
        account.money -= order.cost;
        await firebaseHelper.firestore.updateDocument(db, 'accounts', order.accountID, account);
    } else if (status === 'completed') {
        const menu = await firebaseHelper.firestore.getDocument(db, 'menus', 'menu');
        let items: {[k: string]: any} = {};
        order.dishes.forEach((dish: any) => {
            dish.dish.forEach((item: string) => {
                if (item in items) {
                    items[item] += 1;
                } else {
                    items[item] = 1;
                }
            });
        });
        menu.menu.forEach((menuItem: any) => {
            if (menuItem.name in items) {
                menuItem.amount -= items[menuItem.name];
            }
        });
        await firebaseHelper.firestore.updateDocument(db, 'menus', 'menu', menu);
    }
    order.status = status;
    await firebaseHelper.firestore.updateDocument(db, 'orders', orderID, order);
    response.status(200).json({success: true});
    return;
});

const functionWrapper = async function (request: any, response: any) {
    response.set('Access-Control-Allow-Origin', '*');
    if (request.method === 'OPTIONS') {
        response.set('Access-Control-Allow-Methods', 'POST');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.status(204).send('');
        return false;
    }
    if (request.method !== 'POST') {
        response.status(400).json({success: false, error: 'POST requests only'});
        return false;
    }
    if (request.header('Content-Type') !== 'application/json') {
        response.status(400).json({success: false, error: 'Content-Type header must be application/json'});
        return false;
    }
    return true;
};