import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAPvDA0DQAAIJ4XVSrt_GnnuUp_ops69x8",
  authDomain: "pwa-project-40386.firebaseapp.com",
  projectId: "pwa-project-40386",
  storageBucket: "pwa-project-40386.appspot.com",
  messagingSenderId: "137492609847",
  appId: "1:137492609847:web:43157f565ce10bace1f8b2",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const notificationFunc = () => {
  messaging.getToken({vapidKey: "BDYNGPVzE5TA1g5rRa4NfLCVbQFl1aTPy0-OJ0PrYyJIFwDReaL_uT2RxvC-JD6axbcq8lCMnni3gjd8Ycbzs0E"}).then((currentToken) => {
    if (currentToken) {
      console.log(currentToken)
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
  // messaging.onMessage((payload) => {
  //   console.log('Message received. ', payload);
  //   alert(payload.notification.body)
  // });
};


