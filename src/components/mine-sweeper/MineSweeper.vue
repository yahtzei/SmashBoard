<template>
  <div class="v-minesweeper">
    <div class="game-config">
      <label>rows: <input type="number" v-model.number="rows" :min="1" /></label>
      <v-button icon="refresh" small @click="createGrid" />
      <label>columns: <input type="number" v-model.number="cols" :min="1" /></label>
    </div>
    <div class="game-grid">
      <div class="grid-row" v-for="(row, r) in grid" :key="r">
        <v-minecell v-for="(cell, c) in row" :key="`${r}-${c}`" :cell="cell" @reveal="cell.reveal(grid)" @flag="cell.flag()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cols: 10,
      rows: 10,
      grid: null
    }
  },
  mounted() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      this.grid = new Array(this.rows);

      for (let row = 0; row < this.rows; row++) {
        this.$set(this.grid, row, new Array(this.cols));

        for (let col = 0; col < this.cols; col++) {
          this.$set(this.grid[row], col, new MineCell(row, col));
        }
      }
    },
  },
  watch: {
    size() {
      this.createGrid();
    },
    rows() {
      this.createGrid();
    },
    cols() {
      this.createGrid();
    },
  }
}
</script>

<style lang="scss" scoped>
.v-minesweeper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.game-grid {
  border: 1px solid var(--mine-cell-border);
}

.grid-row {
  display: flex;
}

.game-config {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  input {
    width: 64px;
  }
}
</style>