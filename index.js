//
// import { initializeApp, credential as _credential, messaging } from 'firebase-admin';
// 1. Download a service account key (JSON file) from your Firebase console and add to the example/scripts directory
// import serviceAccount from './google-services.json' assert { type: "json" };

// var admin = require('firebase-admin');
// import { initializeApp, messaging } from 'firebase-admin';
// import pkg from 'firebase-admin'
// import serviceAccount from './google-services.json' assert { type: "json" };


// 1. Download a service account key (JSON file) from your Firebase console and add to the example/scripts directory
// pkg.initializeApp({
//   // credential: pkg._credential.cert(serviceAccount),
//   credential: pkg.credential.cert(s)
// });

// import { applicationDefault, initializeApp } from "firebase-admin/app" 
// import admin, { credential } from 'firebase-admin';
import admin from 'firebase-admin';
// var serviceAccount = require("path/to/serviceAccountKey.json");
import serviceAccount from "./serviceAccountKey.json" assert { type: 'json' }
// assert { type: "json" };

const registrationToken = 'cPZy2ohdTQODCOKrLLOYgp:APA91bE7gFN0X4pLl3y1kNs9lLSn58G-X6A6HbWdkGJTeDinfigo0zj9PU-j4_MYDlXJBlvsJMmhQLjIX0O1012vaWOnyqxaLH9yDXfGFgMB7JkraosfaAz5RaOhd2x7eIlk-0mruhHp';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

await admin.messaging().send(message)
  .then((response) => {
    console.log('Send successful', response)
  })
  .catch((error) => {
    console.log('Error sending message', error)
  })


// 2. Copy the token for your device that is printed in the console on app start (`flutter run`) for the FirebaseMessaging example


// 3. From your terminal, root to example/scripts directory & run `npm install`.
// 4. Run `npm run send-message` in the example/scripts directory and your app will receive messages in any state; foreground, background, terminated.
// If you find your messages have stopped arriving, it is extremely likely they are being throttled by the platform. iOS in particular
// are aggressive with their throttling policy.

// messaging()
//   .sendToDevice(
//     [token],
//     {
//       data: {
//         foo:'bar',
//       },
//       notification: {
//         title: 'A great title',
//         body: 'Great content',
//       },
//     },
//     {
//       // Required for background/terminated app state messages on iOS
//       contentAvailable: true,
//       // Required for background/terminated app state messages on Android
//       priority: 'high',
//     }
//   )
//   .then((res) => {
//     if (res.failureCount) {
//       console.log('Failed', res.results[0].error);
//     } else {
//       console.log('Success');
//     }
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });