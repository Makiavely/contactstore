
require('./bootstrap');

window.Vue = require('vue');

/*Vue.component('example-component', require('./components/ExampleComponent.vue').default);*/
/*Vue.component('contacts', require('./components/Contacts.vue'));*/

let axios = require('axios');

import Contacts from './components/Contacts.vue';
Vue.component('Contacts', Contacts);

const app = new Vue({
    el: '#app'
});
