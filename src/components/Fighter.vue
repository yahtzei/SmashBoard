<template>
  <div class="v-fighter">
    <img :src="fighter.imagePath" />
    <span class="name">{{ fighter.name }}</span>
    <button type="button" @click="player.toggleFave(fighter)" title="">
      <v-icon size="16" :type="player.hasFave(fighter) ? 'close' : 'star'" />
    </button>
    <button type="button" @click="player.toggleMain(fighter)">
      <v-icon size="16" :type="player.hasMain(fighter) ? 'close' : 'heart'" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fighter: { Fighter },
    player: { Player },
  },
}
</script>

<style lang="scss" scoped>
.v-fighter {
  display: inline-flex;
  max-width: 300px;
  align-items: center;
  gap: 8px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  padding-right: 12px;

  span {
    font-size: 16px;
    font-weight: 600;
    user-select: none;
    line-height: 100%;

    &.name {
      flex-grow: 1;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
}
</style>