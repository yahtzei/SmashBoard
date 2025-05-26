<template>
  <div class="v-index">
    <v-menu />
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
</style>