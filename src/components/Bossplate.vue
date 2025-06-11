<template>
  <div class="v-bossplate">
    <span @click="nameClick">{{eldenplayer.name}}</span>
    <!--<span class="name">{{ fighter.name }}</span>-->
    <div class="mains">
      <div v-for="boss in eldenplayer.mains">
        <v-boss v-bind:boss="boss" :boss="boss" :eldenplayer="eldenplayer" />
        <v-button @click="eldenplayer.toggleMain(boss)" icon="close" negative xsmall />
      </div>
      <v-bossroster-modal :eldenplayer="eldenplayer" />
    </div>
    <div class="set-faves-container">
      <v-button class="set-faves-btn" icon="mask-happy" @click="setFaves" :style="setFavesButtonStyles" small dark />
      <v-button class="set-faves-btn" icon="search-history" @click="togglePreventRerolls" :style="togglePreventRerollsButtonStyles" small dark />
      <v-button class="set-unbeaten-btn" icon="no-ghost" @click="setUnbeaten" :style="setFavesButtonStyles" small dark />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eldenplayer: { type: EldenPlayer }
  },
  computed: {
    setFavesButtonStyles() {
      return [
        {'background-color': `var(--${BossboardPalette.colour7})`},
        {'color': `var(--${BossboardPalette.colour7})`}
       // {'box-shadow': `0px 0px 4px 3px var(--${BossboardPalette.colour7}))`}
      ];
    },
    togglePreventRerollsButtonStyles() {
    const styles = [
      {'background-color': `var(--${BossboardPalette.colour7})`},
      {'color': `var(--${BossboardPalette.colour7}`},
      {'box-shadow': `0px 0px 0px 0px var(--${BossboardPalette.colour7})`}
    ];

    if (this.eldenplayer.preventRerolls) {
      styles.push({'box-shadow': `0 0 4px 3px var(--${BossboardPalette.colour7})`});
    }

    return styles;
  }
  },
  methods: {
    nameClick() {
      this.$emit("name-click")
    },
    setFaves() {
      this.$emit("set-faves")
    },
        setUnbeaten() {
      this.$emit("set-unbeaten")
    },
    togglePreventRerolls() {
      this.eldenplayer.preventRerolls = !this.eldenplayer.preventRerolls;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-bossplate {
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

.set-unbeaten-btn {
  align-self: center;
  margin-top: auto;
}

.set-faves-container {
  display: flex;
  gap: 20px;
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
    width: 240px;
    position: relative;

    .v-boss {
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