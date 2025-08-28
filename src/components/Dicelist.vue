<template>
  <div class="v-dicelist">
    <div class="active-item">
      {{ activeItem ? activeItem : 'What shall we do today?' }}
    </div>
    <v-button v-if="!isRolling && containsWord('smash')" dark @click="goToPage('smashboard')">Take me to
      Smashboard</v-button>
    <div>
      <v-button :icon="isRolling ? 'spinner' : 'refresh'" @click="rollTheDie" class="input-zone" dark></v-button>
    </div>
    <div class="input-zone">
      <input v-model="itemToAdd" @keydown.enter="addItem" class="input-box" maxlength="20" />
    </div>
    <div v-for="(item, idx) in diceList" :key="idx" class="dicelist-item">
      <template v-if="editIndex === idx">
        <input v-model="editValue" @blur="saveEdit(idx)" @keydown.enter="saveEdit(idx)" @keydown.esc="cancelEdit"
          class="input-box" autofocus />
      </template>
      <template v-else>
        <div :style="{ animationDuration: item === activeItem ? '0.5s' : '30s' }" @dblclick="startEdit(idx, item)">
          {{ item }} <v-button icon="close" @click="removeItem(idx)" negative xsmall />
        </div>
      </template>
    </div>
    <div>
      <v-button class="clear-all-btn" icon="close" @click="removeAll()" dark xsmall />
    </div>
  </div>
</template>

<script>
export default {
  props: {
          listID: {type: String}
  },
  
  data() {
    return {
      diceList: [],
      isRolling: false,
      itemToAdd: "",
      activeItem: "",
      editIndex: null,
      editValue: "",
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addItem() {
      this.diceList.splice(0, 0, this.itemToAdd);
      this.itemToAdd = "";
    },
    removeItem(index) {
      this.diceList.splice(index, 1);
      //this.diceList = this.diceList.filter(i => i.toLowerCase() !== item.toLowerCase())
    },
    removeAll(confirmed = null) {
      if (confirmed) {
        this.diceList = []
      }
      else {
        if (confirm("Bin the whole bastard list?")) {
          this.diceList = []
        }
      } 
    },
    startEdit(idx, item) {
      this.editIndex = idx;
      this.editValue = item;
    },
    saveEdit(idx) {
      if (this.editValue.trim()) {
        this.$set(this.diceList, idx, this.editValue.trim());
      }
      this.editIndex = null;
      this.editValue = "";
    },
    cancelEdit() {
      this.editIndex = null;
      this.editValue = "";
    },
    rollTheDie() {
      this.isRolling = true;
      const randomMainIndex = Math.floor(Math.random() * this.diceList.length);
      let activeMainIndex = 0;
      const countTo = 100 + randomMainIndex
      let counter = Math.floor(Math.random() * this.diceList.length);

      const spin = () => {
        activeMainIndex = counter % this.diceList.length;
        this.activeItem = this.diceList[activeMainIndex];

        if (counter === countTo) {
          this.isRolling = false;
          return;
        }

        const progress = counter / countTo;
        const delay = 30 + Math.pow(progress, 3) * 100;

        counter++;
        setTimeout(spin, delay);
      };

      spin();
    },
    containsWord(word) {
      return (
        this.activeItem &&
        this.activeItem.toLowerCase().includes(word.toLowerCase())
      );
    },
    goToPage(path) {
      this.$router.push({ path });
    },
    saveData() {
      localStorage.setItem(`dicelist-${this.listID}`, JSON.stringify(this.diceList));
    },
    loadData() {
      this.diceList = JSON.parse(localStorage.getItem(`dicelist-${this.listID}`)) || [];
    }
  },
  watch: {
    diceList() {
      this.saveData();
    }
  }
}
</script>

<style lang="scss" scoped>
.v-dicelist {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  gap: 16px;

  >div {
    display: flex;
    flex-direction: row;
  }
}

.dicelist-item {
  display: flex;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  font-size: 40px;

  >div {
    font-size: 40px;
    flex-shrink: 1;
    border: 1px solid var(--greyscale-20);
    border-radius: 8px;
    background-color: var(--greyscale-10);
    text-align: center;
    position: relative;
    padding: 16px 24px;
    flex-grow: 1;
    flex-basis: 100%;

  }

  .v-button {
    position: absolute;
    right: -12px;
    top: -12px;
    transform: scale(0.8);
  }
}

.input-zone {
  display: flex;
  flex-basis: 50%;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
}

.input-box {
  display: flex;
  flex-basis: 30%;
  min-height: 30px;
  flex-direction: row;
  align-items: center;
  font-size: 40px;
  background-color: #16161f;
  padding: 8px;
  text-align: center;
}

.active-item {
  display: flex;
  flex-basis: 50%;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  font-size: 50px;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-bottom: 20px;
  text-align: center;
}

@keyframes color-cycle {
  0% {
    color: #FBAF00;
  }

  20% {
    color: #FFD639;
  }

  40% {
    color: #FFA3AF;
  }

  60% {
    color: #007CBE;
  }

  80% {
    color: #00AF54;
  }

  100% {
    color: #FBAF00;
  }
}

* {
  animation: color-cycle 30s infinite ease-in;
  font-weight: bold;
}

.buttons-container {
  display: flex;
  gap: 20px;
  align-self: center;
  margin-top: auto;
}

.clear-all-btn {
  align-self: center;
  margin-top: auto;
}
</style>