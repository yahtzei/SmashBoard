<template>
  <div class="v-diceboard">
    <div class="roll-button-container"> 
      <v-button icon="refresh" @click="rollAllDice()" dark></v-button>
    </div>
    <div class="dicelist-panel">
      <v-dicelist v-for="n in numberOfLists" :key="n" ref="dicelist" />
    </div>
    <div class="plus-minus-buttons">
      <v-button icon="plus" primary small @click="addDicelist()" :disabled="numberOfLists >= 4"></v-button>
      <v-button icon="minus" negative small @click="removeDicelist()" :disabled="numberOfLists <= 1"></v-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfLists: 4
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
      (this.$refs.dicelist || []).forEach(d => d.rollTheDie && d.rollTheDie());
    }
  }
}
</script>

<style lang="scss" scoped>
.v-diceboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink:5;
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

.roll-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%; 
}
</style>