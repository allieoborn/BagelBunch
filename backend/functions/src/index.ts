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
    const favorite = request.body.favorite;
    await firebaseHelper.firestore.createNewDocument(db, 'accounts', {
        name: name,
        email: email,
        password: password,
        type: type,
        money: money,
        favorite: favorite === undefined ? null : favorite,
        orders: []
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