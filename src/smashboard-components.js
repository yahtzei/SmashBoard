import Mixin from './mixin'
import SmashBoard from './components/Smashboard.vue';
import Sming from './components/Sming.vue';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import RosterModal from './components/RosterModal.vue';
import Nameplate from './components/Nameplate.vue';
import Fighter from './components/Fighter.vue';
import Roster from './components/Roster.vue';

if (typeof Vue !== 'undefined') {
  Vue.mixin(Mixin);
  Vue.component('v-smashboard', SmashBoard);
  Vue.component('v-sming', Sming);
  Vue.component('v-button', Button);
  Vue.component('v-icon', Icon);
  Vue.component('v-roster-modal', RosterModal);
  Vue.component('v-nameplate', Nameplate);
  Vue.component('v-fighter', Fighter);
  Vue.component('v-roster', Roster);
}