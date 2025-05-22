<template>
  <div class="v-nameplate">
    <span @click="nameClick">{{player.name}}</span>
    <!--<span class="name">{{ fighter.name }}</span>-->
    <div class="mains">
      <div v-for="fighter in player.mains">
        <v-fighter v-bind:fighter="fighter" :fighter="fighter" :player="player" />
        <v-button @click="player.toggleMain(fighter)" icon="close" negative xsmall />
      </div>
      <v-roster-modal :player="player" />
    </div>
    <v-button class="set-faves-btn" icon="mask-happy" @click="setFaves" :style="setFavesButtonStyles" small dark />
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Player }
  },
  computed: {
    setFavesButtonStyles() {
      return [
        {'background-color': `var(--${this.player.colour}-light)`},
        {'color': `var(--${this.player.colour}-dark)`},
        {'box-shadow': `0px 0px 4px 3px var(--${this.player.colour}-primary)`}
      ];
    }
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
  position: relative; // Add this line

  > span {
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

.mains {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 260px;
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