<template>
<div class="v-dicelist">
<input v-model="itemToAdd" />
<v-button icon="plus" @click="addItem">Add-button</v-button>
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
    }
   }
}

</script>


<style lang="scss" scoped>

* {
  color: red;
}

</style>