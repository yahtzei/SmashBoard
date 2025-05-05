<template>
  <div class="v-nameplate">
    <span>{{ player.name }}</span>
    <div class="mains">
      <div v-for="fighter in player.mains">
        <img :src="fighter.imagePath" />
        <span>{{ fighter.name }}</span>
        <button @click="player.toggleMain(fighter)">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Player }
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.v-nameplate {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > span {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
  }
}

.mains {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 260px;

    > span {
      font-size: 18px;
      flex-grow: 1;
      text-align: center;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  }
}
</style>