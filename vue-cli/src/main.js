import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';
import User from './components/User.vue';
import NewUser from './components/NewUser.vue';
import ShowUser from './components/ShowUser.vue';

const app = createApp(App);

app.component('User', User);
app.component('NewUser', NewUser);
app.component('ShowUser', ShowUser);

app.mount('#app');
