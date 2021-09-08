import { createApp } from 'vue'


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

import App from './App.vue'
import router from './router'
import store from './store'

const firebaseConfig = {
  apiKey: "AIzaSyCyAGLOhmnY6PJOoynOkdhFmdPWXTWOHrw",
  authDomain: "ticketweb-backstage.firebaseapp.com",
  projectId: "ticketweb-backstage",
  storageBucket: "ticketweb-backstage.appspot.com",
  messagingSenderId: "1006538887131",
  appId: "1:1006538887131:web:0b5be84e0e5495e7ca61fe"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')