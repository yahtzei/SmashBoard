<template>
  <div class="v-roster-modal">
    <v-button @click="showSelectionModal"
      icon="plus" 
      label="Add another" 
      tertiary 
      small />
    <dialog ref="selectionModal" class="selection-modal" v-click-outside="closeSelectionModal">
      <div class="modal-top">
        <button class="sort-by-button" type="button" @click="sortBy++">
          <v-icon size="16" type="filter" />
          {{ sortByLabel }}
        </button>
        <v-button @click="closeSelectionModal" icon="close" tertiary xsmall />
      </div>
      <div class="modal-body">
        <v-fighter v-for="fighter in player.roster(sorting)" :player="player" :fighter="fighter" />
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Player }
  },
  data() {
    return {
      sortBy: 0
    }
  },
  methods: {
    showSelectionModal() {
      this.$refs.selectionModal.show();
    },
    closeSelectionModal() {
      this.$refs.selectionModal.close();
    }
  },
  computed: {
    sorting() {
      return this.sortBy % 2;
    },
    sortByLabel() {
      switch(this.sorting) {
        case SortBy.favouritesFirst:
          return "favourites first";
        case SortBy.default:
        default:
          return "default ordering";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-roster-modal {
  display: flex;
  position: relative;

  > .v-button {
    margin-inline: auto;
  }
}

.selection-modal {
  top: calc(100% + 4px);
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;

  .modal-top {
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 4px;
    padding: 4px;
    background-color: white;
    border-bottom: 1px solid var(--greyscale-80);
  }

  .modal-body {
    overflow-y: auto;
    padding: 4px;
    max-height: 400px;
  }
}

.sort-by-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  height: 24px;
  padding-inline: 4px 8px;
  cursor: pointer;
  color: var(--greyscale-20);
  flex-grow: 1;

  &:hover {
    background-color: var(--greyscale-90);
  }
}
</style>