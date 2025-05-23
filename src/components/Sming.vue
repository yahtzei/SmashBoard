<template>
  <div class="v-sming">
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
      numberJustForFunber: 0
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
    }
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
</style>