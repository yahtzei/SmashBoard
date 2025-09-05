<template>
  <div class="v-toggle">
    <label class="v-toggle-container">
      <input v-show="false" type="checkbox" :value="value" @input="$emit('input', $event.target.checked)" />
      <v-icon type="toggle" />
      <span>
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Boolean },
    label: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.v-toggle {
  display: inline-block;
  margin: -1px;
  vertical-align: middle;
  flex-shrink: 0;
}

.v-toggle-container {
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
  width: max-content;
  color: var(--greyscale-0);
  background-color: var(--greyscale-100);
  border: 1px solid var(--greyscale-70);
  border-radius: 4px;
  margin: 1px;
  padding-block: 0;
  padding-inline: 4px 8px;
  cursor: pointer;

  span {
    line-height: 100%;
  }

  .v-icon {
    fill: var(--greyscale-40);
    transition: 0.35s ease-out;
  }

  &:has(input:checked) {
    .v-icon {
      fill: var(--red-dark);
      transform: rotateY(540deg);
    }
  }

  &:hover, &:active {
    margin: 0;
    padding-block: 1px;
    padding-inline: 5px 9px;
  }

  &:active {
    box-shadow: var(--active-outline);
  }
}
</style>