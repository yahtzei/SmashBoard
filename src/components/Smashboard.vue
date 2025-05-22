<template>
  <div class="v-smashboard">
    <img :src="vsImage" />
    <v-button class="reset" icon="heartbeat" @click="reset" negative xsmall />
    <v-nameplate class="roster" :player="playerOne" @name-click="rollTheDie(playerOne)" @set-faves="playerOne.resetMains()" />
    <div class="middle-panel">
      <v-button @click="rollTheDice" :icon="isRolling ? 'spinner' : 'refresh'" :disabled="noMains || isRolling" dark />
      <div class="image-row">
        <img :src="!playerOne.activeFighter ? playerOneDieImage : playerOne.activeFighter.imagePath" class="char-image" />
        <img src="/src/assets/vs-img.png" class="vs-image"/>
        <img :src="!playerTwo.activeFighter ? playerTwoDieImage : playerTwo.activeFighter.imagePath" :class="['char-image', { 'p2-no-active-fighter': !playerTwo.activeFighter }]" />
      </div>
    </div>
    <v-nameplate class="roster" :player="playerTwo" @name-click="rollTheDie(playerTwo)" @set-faves="playerTwo.resetMains()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOne: P1,
      playerTwo: P2,
      isRolling: false,
      playerOneDieImage: "/src/assets/misc-images/SmashLogoRed.png",
      playerTwoDieImage: "/src/assets/misc-images/SmashLogoRed.png"
    }
  },
  methods: {
    reset() {
      const binIt = confirm("Bin the bastard lot?");
      if (!binIt) return;
      localStorage.clear();
      location.reload();
    },
    rollTheDice() {
      this.rollTheDie(this.playerOne);
      this.rollTheDie(this.playerTwo);
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
      return this.playerOne.mains.length === 0 || this.playerTwo.mains.length === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-smashboard {
  display: flex;
  gap: 16px;
  justify-content: center;
  height: 100vh;
  background-color: var(--greyscale-0);
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

  &.p2-no-active-fighter {
    filter: hue-rotate(210deg);
  }
}

.vs-image {
  max-width: 30%; 
  height: auto;
  align-items: center; 
}


</style>