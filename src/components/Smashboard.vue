<template>
  <div class="v-smashboard">
    <h1>{{ playerOne.name }}</h1>
    <h1>Faves:</h1>
    <v-fighter v-for="fighter in playerOne.faves" :fighter="fighter" :player="playerOne" />
    <h1>Mains:</h1>
    <v-fighter v-for="fighter in playerOne.mains" :fighter="fighter" :player="playerOne" />
    <hr>
    <div class="roster">
      <v-fighter v-for="fighter in playerOne.roster" :fighter="fighter" :player="playerOne" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fighters: Roster,
      playerOne: P1,
      playerTwo: P2
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
.v-smashboard {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.roster {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>