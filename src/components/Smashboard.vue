<template>
  <div class="v-smashboard">
    <v-button class="reset" icon="heartbeat" label="Reset everything" @click="reset" negative xsmall />
    <v-nameplate :player="playerOne" />
    <v-nameplate :player="playerTwo" />
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
    reset() {
      const binIt = confirm("Bin the bastard lot?");
      if (!binIt) return;
      localStorage.clear();
      location.reload();
    }
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

.reset {
  position: absolute;
  bottom: 8px;
  margin-inline: auto;
}
</style>