<template>
  <div class="v-dicelist">
    <div class="input-zone">
      <input v-model="itemToAdd" class="input-box"/>
      <v-button icon="plus" @click="addItem" class="input-box">Add-button</v-button>
    </div>
    <div v-for="item in diceList">
      <span>{{ item }}</span> <v-button icon="close" @click="removeItem(item)" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      diceList: [],
      itemToAdd: ""
    }
  },
  methods: {
    addItem() {
      this.diceList.push(this.itemToAdd);
      this.itemToAdd = "";
    },
    removeItem(item) {
      this.diceList = this.diceList.filter(i => i.toLowerCase() !== item.toLowerCase())
    },
    rollTheDie(eldenplayer) {
      this.isRolling = true;
      const randomMainIndex = Math.floor(Math.random() * eldenplayer.mains.length);
      let activeMainIndex = 0;
      const countTo = 60 + randomMainIndex
      let counter = Math.floor(Math.random() * eldenplayer.mains.length);
      const isRollBeaten = (eldenplayer.lastRoll && eldenplayer.hasBeaten(eldenplayer.lastRoll));
      
      const spin = () => {
        activeMainIndex = counter % eldenplayer.mains.length;
        eldenplayer.activeBoss = eldenplayer.mains[activeMainIndex];
        const doesLastRollExistInBeaten = eldenplayer.beaten.some(beatenBoss => {return beatenBoss.name === eldenplayer.activeBoss.name;})

        if (counter === countTo) {
          this.isRolling = false;
          
          //if preventRerolls AND ignoreBeaten
          if (eldenplayer.lastRoll === eldenplayer.activeBoss.name && eldenplayer.preventRerolls
          && eldenplayer.beaten.some(beatenBoss => beatenBoss.name === eldenplayer.activeBoss.name) && eldenplayer.ignoreBeaten && eldenplayer.mains.length > 1) {
            this.rollTheDie(eldenplayer);
            console.log("1")
            console.log(eldenplayer.lastRoll,eldenplayer.activeBoss.name,eldenplayer.preventRerolls, eldenplayer.beaten, eldenplayer.ignoreBeaten)
            return;
          }

          //if just preventRerolls
          if (eldenplayer.lastRoll === eldenplayer.activeBoss.name && eldenplayer.preventRerolls && eldenplayer.mains.length > 1) {
            this.rollTheDie(eldenplayer);
            console.log("2")
            console.log(eldenplayer.lastRoll,eldenplayer.activeBoss.name,eldenplayer.preventRerolls, eldenplayer.beaten, eldenplayer.ignoreBeaten)
            return;
          }

          //if just ignoreBeaten
            if (eldenplayer.beaten.some(beatenBoss => beatenBoss.name === eldenplayer.activeBoss.name) && eldenplayer.ignoreBeaten && eldenplayer.mains.length > 1) {
            this.rollTheDie(eldenplayer);
            console.log("3")
            console.log(eldenplayer.lastRoll,eldenplayer.activeBoss.name,eldenplayer.preventRerolls, eldenplayer.beaten, eldenplayer.ignoreBeaten)
            return;
          }

          if (eldenplayer.lastRoll === eldenplayer.activeBoss.name && eldenplayer.preventRerolls && eldenplayer.mains.length > 1) {
            this.rollTheDie(eldenplayer);
            console.log("4")
            return;
          }

          eldenplayer.lastRoll = eldenplayer.activeBoss.name;
          return;
        }

        const progress = counter / countTo;
        const delay = 30 + Math.pow(progress, 3) * 100;

        counter++;
        setTimeout(spin, delay);
      };

      spin();
    }
  }
}

</script>


<style lang="scss" scoped>
.v-dicelist {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}

.input-zone {
  display: flex;
  flex-basis: 50%;
  flex-direction: row;
  align-items: center;
  //padding-top: 5%;
}

.input-box {
  display: flex;
  flex-basis: 50%;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  //padding-top: 5%;
}

* {
  color: red;
}
</style>