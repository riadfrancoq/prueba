import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '567469908867-3jgam9p2gf2r0vb57qic9trri1dpd27t.apps.googleusercontent.com',
});

app.use(router);
app.mount('#app');