<template>
  <div :class="['v-minecell', { 'revealed': cell.isRevealed }, { 'flagged': cell.isFlagged}]" 
    @click="$emit('reveal')" 
    @click.right.prevent="$emit('flag')">
    {{ cell.display }}
  </div>
</template>

<script>
export default {
  props: {
    cell: { type: MineCell }
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
  }
}
</style>