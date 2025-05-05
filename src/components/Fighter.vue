<template>
  <div class="v-fighter" @click="player.toggleMain(fighter)">
    <img :src="fighter.imagePath" />
    <span class="name">{{ fighter.name }}</span>
    <button type="button" 
      :class="['favourite', { 'active': player.hasFave(fighter) }]" 
      @click.stop="player.toggleFave(fighter)">
      <v-icon type="heart" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fighter: { Fighter },
    player: { Player },
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.v-fighter {
  display: flex;
  max-width: 300px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px;
  padding-right: 12px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--greyscale-90);

    .favourite {
      opacity: 1;
    }
  }
}

.name {
  flex-grow: 1;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  line-height: 100%;
}

.favourite {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--greyscale-70);
  opacity: 0;

  &.active {
    opacity: 1;
    color: var(--red-primary);

    &:hover {
      animation: none;
    }
  }

  &:hover {
    animation: wobble-animation 1s ease-in-out infinite alternate;
  }
}


@keyframes wobble-animation {
  0%, 100% {
    transform: scale(1.1); //rotate(-8deg);
  }
  50% {
    transform: scale(0.9); //rotate(8deg);
  }
}
</style>