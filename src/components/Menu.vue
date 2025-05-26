<template>
  <div class="v-menu">
    <div class="clock-container" @click="showMenu">
      <div class="clock">{{ timeDisplay }}</div>
    </div>
    <dialog ref="menuModal" class="menu-modal" v-click-outside="closeMenu">
      <div>
        <v-button dark @click="goToPage('smashboard')">SMASH</v-button>
        <v-button dark @click="goToPage('flex')">FLEX</v-button>
        <v-button class="reset" icon="heartbeat" @click="reset" negative xsmall />
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeDisplay: ''
    }
  },
  mounted() {
    this.startClock();
  },
  methods: {
    goToPage(path) {
      this.$router.push({ path });
      this.closeMenu();
    },
    showMenu() {
      this.$refs.menuModal.showModal();
    },
    closeMenu() {
      this.$refs.menuModal.close();
    },
    reset() {
      const binIt = confirm("Bin the bastard lot?");
      if (!binIt) return;
      localStorage.clear();
      location.reload();
    },
    startClock() {
      this.setTime();
      setInterval(this.setTime, 10000);
    },
    setTime() {
      const date = new Date();
      const hours = date.getHours();
      const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
      const minutes = date.getMinutes();
      const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
      this.timeDisplay = `${hoursString}:${minutesString}`;
    }
  },
}
</script>

<style lang="scss" scoped>
.v-menu {
  display: flex;
  justify-content: center;
}

.clock-container {
  opacity: 0.8;
  cursor: pointer;
  --outline-colour: var(--greyscale-20);
  filter: drop-shadow(1px 0px 0px var(--outline-colour))
          drop-shadow(-1px 0px 0px var(--outline-colour))
          drop-shadow(0px 1px 0px var(--outline-colour))
          drop-shadow(0px -1px 0px var(--outline-colour))
          drop-shadow(1px 1px 0px var(--outline-colour))
          drop-shadow(-1px -1px 0px var(--outline-colour))
          drop-shadow(-1px 1px 0px var(--outline-colour))
          drop-shadow(1px -1px 0px var(--outline-colour));

  &:hover {
    opacity: 1;
  }

  .clock {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    padding: 4px;
    background-color: var(--greyscale-10);
    color: white;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 15% 100%);
    font-size: 24px;
    user-select: none;
    font-family: monospace;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
  }
}

.menu-modal {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border: 1px solid var(--greyscale-20);
    border-radius: 8px;
    background-color: var(--greyscale-10);
  }
}

.menu-modal::backdrop {
    background-color: rgba(0,0,0,0.5);
  }
</style>