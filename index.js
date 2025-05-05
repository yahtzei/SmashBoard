window.eventBus = new Vue();
Vue.prototype.$bus = window.eventBus;
new Vue({ el: '#app' });