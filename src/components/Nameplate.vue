<template>
  <div class="v-nameplate" :style="activeFighterStyles">
    <span @click="nameClick">{{ player.name }}</span>
    <!--<span class="name">{{ fighter.name }}</span>-->
    <div class="mains">
      <div v-for="fighter in player.mains">
        <v-fighter :fighter="fighter" :player="player" />
        <v-button @click="player.toggleMain(fighter)" icon="close" negative xsmall />
      </div>
      <v-roster-modal :player="player" />
    </div>
    <v-button class="setFaves" icon="mask-happy" :style="{
    'background-color': `var(--${player.colour}-light)`,
    'color': `var(--${player.colour}-dark)`,
    'box-shadow': `0px 0px 4px 3px var(--${player.colour}-primary)`
  }" @click="setFaves" small />
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
  position: relative; // Add this line

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

  .setFaves {
    position: absolute;
    bottom: 8px;
    left: 50%;
     transform: translateX(-50%);
     background-color: transparent;
      cursor: pointer;
     // opacity: 0;
    }
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