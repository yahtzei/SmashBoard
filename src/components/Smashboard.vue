<template>
  <div class="v-smashboard">
    <v-roster :player="playerOne" />
    <v-nameplate :player="playerOne" />
    <v-nameplate :player="playerTwo" />
    <v-roster :player="playerTwo" />
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
  gap: 16px;
  justify-content: center;
}

.roster {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>