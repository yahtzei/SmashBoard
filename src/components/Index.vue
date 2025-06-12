<template>
  <div class="v-index">
    <v-menu class="clock"/>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.v-index {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--greyscale-0);
}

.clock {
  position: fixed; 
  top: 0;
  left: 50%;
  transform: translate(-50%);
}


</style>