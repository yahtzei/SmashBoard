<template>
  <div class="roll-button-container">
      <v-button @click="rollTheDice" :icon="isRolling ? 'spinner' : 'refresh'" :disabled="noMains || isRolling" dark />    

  <div class="v-smashboard">
    <v-nameplate class="roster" :player="playerOne" @name-click="rollTheDie(playerOne)"
      @set-faves="playerOne.resetMains()" />
    <!-- <div class="middle-panel">
      <div class="image-row">
         <img :src="!playerOne.activeFighter ? playerOneDieImage : playerOne.activeFighter.imagePath"
          class="char-image" /> 
         <img :src="vsImage" class="vs-image" /> 
         <img :src="!playerTwo.activeFighter ? playerTwoDieImage : playerTwo.activeFighter.imagePath"
          :class="['char-image', { 'ジョシュ-no-active-fighter': !playerTwo.activeFighter }]" /> 
      </div>
    </div> -->
    <v-nameplate class="roster" :player="playerTwo" @name-click="rollTheDie(playerTwo)"
      @set-faves="playerTwo.resetMains()" />
          <v-nameplate class="roster" :player="playerThree" @name-click="rollTheDie(playerThree)"
      @set-faves="playerThree.resetMains()" />
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      playerOne: エリオ,
      playerTwo: ジョシュ,
      playerThree: ロブ,
      isRolling: false,
      vsImage: "src/assets/vs-img.png",
      playerOneDieImage: "src/assets/misc-images/SmashLogoRed.png",
      playerTwoDieImage: "src/assets/misc-images/SmashLogoRed.png",
      playerThreeDieImage: "src/assets/misc-images/SmashLogoRed.png"

    }
  },
  methods: {
    rollTheDice() {
      this.rollTheDie(this.playerOne);
      this.rollTheDie(this.playerTwo);
      this.rollTheDie(this.playerThree);
    },
    rollTheDie(player) {
      this.isRolling = true;
      const randomMainIndex = Math.floor(Math.random() * player.mains.length);
      let activeMainIndex = 0;
      const countTo = 60 + randomMainIndex
      let counter = Math.floor(Math.random() * player.mains.length);

      const spin = () => {
        activeMainIndex = counter % player.mains.length;
        player.activeFighter = player.mains[activeMainIndex];

        if (counter === countTo) {
          this.isRolling = false;

          if (player.lastRoll === player.activeFighter.name && player.preventRerolls && player.mains.length > 1) {
            this.rollTheDie(player);
            return;
          }

          player.lastRoll = player.activeFighter.name;

          return;
        }

        const progress = counter / countTo;
        const delay = 30 + Math.pow(progress, 3) * 100;

        counter++;
        setTimeout(spin, delay);
      };

      spin();
    }
  },
  computed: {
    noMains() {
      return (this.playerOne.mains.length === 0 || this.playerTwo.mains.length === 0) || this.playerOne.mains.length ===0;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-smashboard {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-block: 20px;

}

.roster {
  flex-basis: 25%;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.middle-panel {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}

.reset {
  position: absolute;
  bottom: 8px;
  margin-inline: auto;
}

.image-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}

.char-image {
  width: 220px;
  height: 240px;
  align-items: center;
  object-fit: contain;

  &.ジョシュ-no-active-fighter {
    filter: hue-rotate(210deg);
  }
}

.vs-image {
  max-width: 30%;
  height: auto;
  align-items: center;
}

.roll-button-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
  margin-top: 5%;
}
</style>