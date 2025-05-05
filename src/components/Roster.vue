<template>
  <div class="v-roster">
    <v-fighter v-for="fighter in player.roster" :player="player" :fighter="fighter" />
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Player }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.v-roster {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  padding: 8px;
}
</style>