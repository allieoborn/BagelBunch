import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.set('Access-Control-Allow-Origin', '*');
 response.status(200).json({message: 'hello from firebase'});
});

