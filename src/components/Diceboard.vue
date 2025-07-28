<template>
  <div class="v-diceboard">
    <div class="roll-button-container">
      <v-button icon="refresh" @click="rollAllDice(), !muted && playRollSound()" dark></v-button>
    </div>
    <div class="dicelist-panel">
      <v-dicelist v-for="n in numberOfLists" :key="n" ref="dicelist" />
    </div>
    <div class="plus-minus-buttons">
      <v-button icon="plus" primary small @click="addDicelist()" :disabled="numberOfLists >= 4"></v-button>
      <v-button icon="minus" negative small @click="removeDicelist()" :disabled="numberOfLists <= 1"></v-button>
    </div>
    <div class="options-buttons">
    <v-toggle icon="mute" v-model="muted">Mute</v-toggle>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfLists: 1,
      muted: false
    }
  },
  methods: {
    addDicelist() {
      this.numberOfLists++;
    },
    removeDicelist() {
      this.numberOfLists--;
    },
    rollAllDice() {
      const rollEffectPicker = Math.floor(Math.random() * 3);
      (this.$refs.dicelist || []).forEach(d => d.rollTheDie && d.rollTheDie());
    },
    playRollSound() {
      const rollSounds = {
        1: 'src/assets/audio/wheel_spin_1.mp3',
        2: 'src/assets/audio/wheel_spin_2.mp3',
        3: 'src/assets/audio/wheel_spin_3.mp3'
      };

      try {
        const random = Math.random();
        let soundChoice;

        if (random < 0.45) {
          soundChoice = 1;
        } else if (random < 0.90) {
          soundChoice = 2;
        } else {
          soundChoice = 3;
        }
        const audio = new Audio(rollSounds[soundChoice]);
        audio.play().catch(error => {
          console.error("Error playing sound:", error);
        });
      } catch (error) {
        console.error("Error creating audio object:", error);
      }
    },
    toggleMute() {
      this.muted = !this.muted;
    }
  },
  computed:
  {
    muteToggleStyles() {
      const styles = [
        { 'box-shadow': `0px 0px 0px 0px green` }
      ];

      if (this.muted) {
        styles.push({ 'box-shadow': `0 0 4px 3px green` });
      }

      return styles;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-diceboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 5;
}

.dicelist-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 16px;

  >div {
    justify-content: center;
    top: 200px;
  }
}

// .v-dicelist {
//   flex: auto;
//   min-width: 0;
//   max-width: 100%; 
//   margin-inline: 5px;
// }

.plus-minus-buttons {
  position: fixed;
  top: 20px;
  right: 20px;
}

.options-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.roll-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%;
}
</style>