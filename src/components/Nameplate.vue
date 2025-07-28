<template>
  <div class="v-nameplate">
    <span @click="nameClick">{{ player.name }}</span>
    <div class="mains">
      <div v-for="fighter in player.mains">
        <v-fighter v-bind:fighter="fighter" :fighter="fighter" :player="player" />
        <v-button @click="player.toggleMain(fighter)" icon="close" negative xsmall />
      </div>
      <v-roster-modal :player="player" />
    </div>
    <div class="set-faves-container">
      <v-button class="set-faves-btn" 
      icon="heart" 
      @click="setFaves" 
      :negative="player.name === 'P1'" 
      :primary="player.name === 'P2'" 
      small />
      <v-toggle v-model="player.preventRerolls" :style="player.name === 'P1' ? 'filter: hue-rotate(140deg)' : ''">Prevent re-rolls</v-toggle>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Player }
  },
  methods: {
    nameClick() {
      this.$emit("name-click")
    },
    setFaves() {
      this.$emit("set-faves")
    }
  }
}
</script>

<style lang="scss" scoped>
.v-nameplate {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  gap: 20px;
  position: relative;

  >span {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color: white;
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 0.5;
    }
  }
}

.set-faves-btn {
  align-self: center;
  margin-top: auto;
}

.set-faves-container {
  display: flex;
  gap: 12px;
  align-self: center;
  align-items: center;
  margin-top: auto;

}

.mains {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  >div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 240px;
    position: relative;

    .v-fighter {
      flex-grow: 1;
    }

    .v-button {
      position: absolute;
      right: calc(100% + 8px);
      transform: scale(0.6);
    }
  }
}
</style>