<template>
  <div :class="['v-minecell', classes]" 
    @click="$emit('reveal')" 
    @click.right.prevent="$emit('flag')">
    {{ cell.display }}
  </div>
</template>

<script>
export default {
  props: {
    cell: { type: MineCell },
    fuckedUpMode: { type: Boolean }
  },
  computed: {
    classes() {
      return [
        { 'fucked-up-mode': this.fuckedUpMode },
        { 'revealed': this.cell.isRevealed },
        { 'flagged': this.cell.isFlagged },
        { 'womp-womp': this.cell.display == "💩" },
        { 'bad-neighbours n-one': this.cell.display == "1" },
        { 'bad-neighbours n-two': this.cell.display == "2" },
        { 'bad-neighbours n-three': this.cell.display == "3" },
        { 'bad-neighbours n-four': this.cell.display == "4" },
        { 'bad-neighbours n-five': this.cell.display == "5" },
        { 'bad-neighbours n-six': this.cell.display == "6" },
        { 'bad-neighbours n-seven': this.cell.display == "7" },
        { 'bad-neighbours n-eight': this.cell.display == "8" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-minecell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  cursor: default;
  background-color: var(--mine-cell-background);
  border: 4px solid var(--mine-cell-border);
  border-top-color: var(--mine-cell-highlight);
  border-left-color: var(--mine-cell-highlight);

  &.revealed {
    border: none;
    outline: 1px solid var(--mine-cell-border);

    &.fucked-up-mode {
      animation: fuck-my-shit-up 1500ms;
    }
  }

  &.bad-neighbours {
    font-size: 30px;
  }

  &.n-one {
    color: #0000ff;
  }

  &.n-two {
    color: #007b00;
  }

  &.n-three {
    color: #ff0000;
  }

  &.n-four {
    color: #00007b;
  }

  &.n-five {
    color: #7b0000;
  }

  &.n-six {
    color: #007b7b;
  }

  &.n-seven {
    color: #000000;
  }

  &.n-eight {
    color: #7b7b7b;
  }
}

@keyframes fuck-my-shit-up {
  0% {
    
  }

  25% {
    filter: hue-rotate(180deg) brightness(90%) blur(2px) saturate(150%);
    transform: scale(0.75);
  }

  50% {
    filter: hue-rotate(360deg) brightness(120%) blur(4px) saturate(200%);
    transform: scale(1.5);
  }

  75% {
    filter: hue-rotate(180deg) brightness(105%) blur(2px) saturate(150%);
    transform: scale(0.8);
  }

  100% {
    
  }
}
</style>