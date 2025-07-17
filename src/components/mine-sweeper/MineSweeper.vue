<template>
  <div class="v-minesweeper">
    <div class="game-config">
      <label>bomb rate (1/x): <input type="number" v-model.number="bombRate" :min="1" /></label>
      <label>rows: <input type="number" v-model.number="rows" :min="1" /></label>
      <v-button icon="refresh" small @click="createGrid" />
      <label>columns: <input type="number" v-model.number="cols" :min="1" /></label>
      <label>fucked-up mode: <input type="checkbox" v-model="fuckedUpMode" /></label>
      <span>bombs left to bomb:  {{ bombsLeft }}</span>
    </div>
    <div class="game-grid">
      <div class="grid-row" v-for="(row, r) in grid" :key="r">
        <v-minecell v-for="(cell, c) in row" :key="`${r}-${c}`" 
          :fucked-up-mode="fuckedUpMode"
          :cell="cell" 
          @reveal="cell.reveal(grid)" 
          @flag="cell.flag()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 15,
      cols: 21,
      bombRate: 5,
      fuckedUpMode: false,
      grid: null,
      gameStarted: false
    }
  },
  mounted() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      this.gameStarted = false;
      this.grid = new Array(this.rows);

      for (let row = 0; row < this.rows; row++) {
        this.$set(this.grid, row, new Array(this.cols));

        for (let col = 0; col < this.cols; col++) {
          this.$set(this.grid[row], col, new MineCell(row, col, this.bombRate));
        }
      }

      this.gameStarted = true;
    },
  },
  watch: {
    rows() {
      this.createGrid();
    },
    cols() {
      this.createGrid();
    },
    bombRate() {
      this.createGrid();
    },
    fuckedUpMode() {
      this.rows = this.fuckedUpMode ? 35 : 15;
      this.cols = this.fuckedUpMode ? 60 : 21;
      this.bombRate = this.fuckedUpMode ? 12 : 5;
    }
  },
  computed: {
    bombsLeft() {
      if (!this.gameStarted) {
        return "🍷";
      }
      
      const bombCount = this.grid.flat().filter(c => c.isBomb).length; //length of the array of the cells that isBomb = true
      const flagCount = this.grid.flat().filter(c => c.isFlagged).length; //above but for flagged
      return bombCount - flagCount;
    }
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
  justify-content: center;
  gap: 12px;

  label,span {
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