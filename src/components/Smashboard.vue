<template>
  <div class="v-smashboard">
    <v-button class="reset" icon="heartbeat" @click="reset" negative xsmall />
    <v-nameplate :player="playerOne" @name-click="rollTheDie(playerOne)" />
    <v-button @click="rollTheDice" 
      :icon="isRolling ? 'spinner' : 'refresh'"
      :disabled="noMains || isRolling" 
      dark />
    <v-nameplate :player="playerTwo" @name-click="rollTheDie(playerTwo)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOne: P1,
      playerTwo: P2,
      isRolling: false
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
        player.activeFighter = player.mains[activeMainIndex]

        if (counter === countTo) {
          this.isRolling = false;
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
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.reset {
  position: absolute;
  bottom: 8px;
  margin-inline: auto;
}
</style>