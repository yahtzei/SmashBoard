import Mixin from './mixin'
import Smashboard from './components/Smashboard.vue';
import Button from './components/Button.vue';
import Icon from './components/Icon.vue';
import Modal from './components/Modal.vue';
import Nameplate from './components/Nameplate.vue';
import Fighter from './components/Fighter.vue';

if (typeof Vue !== 'undefined') {
  Vue.mixin(Mixin);
  Vue.component('v-smashboard', Smashboard);
  Vue.component('v-button', Button);
  Vue.component('v-icon', Icon);
  Vue.component('v-modal', Modal);
  Vue.component('v-nameplate', Nameplate);
  Vue.component('v-fighter', Fighter);
}