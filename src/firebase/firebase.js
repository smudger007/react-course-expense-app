import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//     description: 'Air Fare', 
//     note: 'Man to Southampton',
//     amount: 150,
//     createdAt: 2000
// });

// database.ref('expenses').push({
//     description: 'Hotel', 
//     note: 'The Village - Portsmouth',
//     amount: 125.00,
//     createdAt: 2000
// });

// database.ref('expenses').push({
//     description: 'Train Fare', 
//     note: 'Southmapton Airport to Cosham',
//     amount: 9.95,
//     createdAt: 2001
// });

// database.ref('expenses').on('value', (snapshot) => {
//     var expenses = [];

//     snapshot.forEach((childSnapShot) => {
//         expenses.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref().set({
//     name: 'Jimmy P Cricket', 
//     age: 46, 
//     location: {
//         country: 'Botswana', 
//         city: 'Kajagoogoo'
//     }, 
//     dob: '12/12/1941'
// }).then(() => {
//     console.log('Initial data was written!');
// }).catch((e) => {
//     console.log('There was an error: ', e);
// });

// database.ref()
// .update({
//     name: 'Smudger',   
//     age: 32,
//     job: 'Dustbin man'
// })
// .then(() => console.log('Record updated....'))
// .catch((e) => console.log('Error updating', e));



// database.ref('isSingle')
// .remove()
// .then(() => console.log('Removed it'))
// .catch((e) => console.log('Error removing', e));


// database.ref('attributes').set({
//     height: 6.3, 
//     weight: 13.1
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => console.log('Error Fetching Data', e));

// database.ref().on('value', (snapshot) => console.log(snapshot.val()));
