<template>
  <div class="v-matchup">
  
  </div>
</template>

<script>
export default {
  props: {
    playerOne: { type: Player },
    playerTwo: { type: Player }
  }
}
</script>

<style lang="scss" scoped>
.v-matchup {
  flex-grow: 1;
}
</style>