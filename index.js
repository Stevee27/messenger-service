import admin from 'firebase-admin';
import serviceAccount from "./serviceAccountKey.json" assert { type: 'json' }

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
