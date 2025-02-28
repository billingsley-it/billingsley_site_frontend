import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify'; // Import Vuetify

const app = createApp(App);

app.use(router);  // Register Vue Router
app.use(vuetify); // Register Vuetify

app.mount('#app'); // Mount the app
