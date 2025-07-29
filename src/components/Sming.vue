<template>
  <div class="v-sming">
    <div class="marquee-container" :style="{ '--item-height': itemHeight + 'px' }">
      <v-icon type="arrow-right" class="arrow"/>
      <div class="marquee-content" :class="{ paused: isPaused }">
        <div v-for="item in dicelist" :key="'first-' + item" class="marquee-item">
          {{ item }}
        </div>
        <!-- Duplicated for marquee effect -->
        <div v-for="item in dicelist" :key="'second-' + item" class="marquee-item">
          {{ item }}
        </div>
      </div>
      <v-icon type="arrow-left" class="arrow"/>
    </div>
    <button @click="startMarquee" :disabled="isRunning">
      {{ isRunning ? 'Spinning...' : 'Spin' }}
    </button>
    <h1>
      {{ someData }}
      {{ exampleProp }}'s Playground
      {{ someOtherData }}
    </h1>
    <div class="numbers-and-buttons">
      <v-button @click="incrementTheNumber" icon="plus" positive />
      {{ numberJustForFunber }}
      <v-button @click="decrementTheNumber" icon="minus" negative />
    </div>
    <div>
      {{ numberJustForFunber }} x 10 = {{ numberJustForFunberTimesTen }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exampleProp: { type: String }
  },
  data() {
    return {
      someData: "🤷‍♀️",
      someOtherData: "💩",
      dicelist: ["item 1", "item 2", "item 3", "item 4"],
      numberJustForFunber: 0,
      isRunning: false,
      isPaused: false,
      itemHeight: 50
    }
  },
  mounted() {
    // mounted() is called just once when the component first loads, so you can use it kinda like a constructor
    // open up dev tools (f12)
    console.log("What up it's ya boy I just got mounted am I right?");
    console.info("Deeply informative 👍");
    console.warn("You've been warned...");
    console.error("Hardly know 'er");
  },
  methods: {
    incrementTheNumber() {
      this.numberJustForFunber++;
    },
    decrementTheNumber() {
      this.numberJustForFunber--;
    },
    startMarquee() {
      if (this.isRunning) return;

      this.isRunning = true;
      this.isPaused = false;
console.log(this.marqueeHeight)
      let position = 0;
      let speed = 14;
      let animationId;

      const animate = () => {
        if (this.isPaused) return;

        position += speed;
        if (position >= 216) position = 0;

        const marqueeElement = this.$el.querySelector('.marquee-content');
        marqueeElement.style.transform = `translateY(-${position}px)`;

        animationId = requestAnimationFrame(animate);
      };

      animate();

      const randomTime = 2000 + Math.random() * 3000;

      setTimeout(() => {
        const slowDown = () => {
          if (speed > 0.5) { //lower for more abrupt stop - slow 0.1 fast 0.4
            speed *= 0.94; // lower for quicker slowdown - 0.9 to 0.98 seems okay
            setTimeout(slowDown, 50);
          } else {
            this.isPaused = true;
            this.isRunning = false;
            cancelAnimationFrame(animationId);
          }
        };
        slowDown();
      }, randomTime);
    }

    // New manual stop method

  },
  computed: {
    numberJustForFunberTimesTen() {
      return this.numberJustForFunber * 10;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-size: 30px;
}

.v-sming {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  color: var(--greyscale-0);
  background-color: var(--greyscale-70);
  height: 100vh;
}

.numbers-and-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.marquee-container {
  display: flex;
  flex-direction: row;
  min-height: 216px;
  overflow: hidden;
  position: relative;
  align-items: center;

  .arrow {
    transform: scale(2);
    transform-origin: center;
    font-size: 40px;
    margin-top: -40px;
    margin-inline: 8px;
  }
}

.marquee-content {
  display: flex;
  height: 216px;
  flex-direction: column;
}

.marquee-item {
  height: var(--item-height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  padding-inline: 8px;
  margin: 2px;
  background-color: #7979b5;

}

.marquee-container {
  min-height: calc(var(--item-height) * 4);
  overflow: hidden;
  position: relative;
}

.marquee-content {
  display: flex;
  flex-direction: column;
}

.marquee-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

}
</style>