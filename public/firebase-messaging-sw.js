importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAPvDA0DQAAIJ4XVSrt_GnnuUp_ops69x8",
    authDomain: "pwa-project-40386.firebaseapp.com",
    projectId: "pwa-project-40386",
    storageBucket: "pwa-project-40386.appspot.com",
    messagingSenderId: "137492609847",
    appId: "1:137492609847:web:43157f565ce10bace1f8b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Quiz App';
    const notificationOptions = {
      body: 'Welcome to quiz app',
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });

