import VueRouter from "vue-router";
import Mixin from './mixin'
import Index from './components/Index.vue';
import Menu from './components/Menu.vue';
import SmashBoard from './components/SmashBoard.vue';
import Sming from './components/Sming.vue';
import FlexPlayground from './components/FlexPlayground.vue';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import RosterModal from './components/RosterModal.vue';
import Nameplate from './components/Nameplate.vue';
import Fighter from './components/Fighter.vue';
import Roster from './components/Roster.vue';

if (typeof Vue !== 'undefined') {
  Vue.mixin(Mixin);
  Vue.component('v-index', Index);
  Vue.component('v-menu', Menu);
  Vue.component('v-smashboard', SmashBoard);
  Vue.component('v-sming', Sming);
  Vue.component('v-flex-playground', FlexPlayground);
  Vue.component('v-button', Button);
  Vue.component('v-icon', Icon);
  Vue.component('v-roster-modal', RosterModal);
  Vue.component('v-nameplate', Nameplate);
  Vue.component('v-fighter', Fighter);
  Vue.component('v-roster', Roster);
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/smashboard', component: SmashBoard },
    { path: '/flex', component: FlexPlayground }
  ]
});

window.eventBus = new Vue();
Vue.prototype.$bus = window.eventBus;

const app = new Vue({ router }).$mount('#app');