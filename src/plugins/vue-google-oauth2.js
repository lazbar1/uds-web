import Vue from 'vue';
import VueGAPI from 'vue-gapi';

// create the 'options' object
const apiConfig = {
  apiKey: 'AIzaSyDVYXxCtQkNaAyxXRTANtoW6zQ5k-NpZz4',
  clientId: '235997116992-m263i4c7qu6m784sa6kbe4ubi48iuoj9.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope: 'https://www.googleapis.com/auth/drive'
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
};

// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig);
