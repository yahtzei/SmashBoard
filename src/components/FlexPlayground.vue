<template>
  <div>
    <div class="parent">
      <div class="child"></div>
      <div class="child maverick"></div>
      <div id="whatever" class="child unwanted"></div>
    </div>
    <v-toggle v-model="showIcons">Show all icons</v-toggle>
    <div v-if="showIcons" class="icon-display-container">
      <div v-for="iconName in allIconNames" :key="iconName" class="icon-item">
        <v-icon :type="iconName" :size="48" :colour="'#333'"></v-icon>
        <p>{{ iconName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponentDefinition from './Icon.vue';

export default {
  data() {
    return {
      htmlStuff: "<button>I wanna be a div</button>",
      allIconNames: [],
      showIcons: false
    };
  },
  created() {
   
    const iconDefinitions = IconComponentDefinition.data();

    if (iconDefinitions && iconDefinitions.icons) {
      this.allIconNames = Object.keys(iconDefinitions.icons);
      console.log('Successfully retrieved icon names:', this.allIconNames);
    } else {
      console.error("Failed to retrieve 'icons' data from Icon.vue component definition.");
    }
  }
};
</script>

<style lang="scss" scoped>
/* Your styles here */

div {}

div div {}

div>div {}

.child {}

div.child {}

div>div.child {}

.parent>div.child {}

div.parent>div.child {}

.unwanted {}

.child.unwanted {}

.parent div#whatever {}

.parent {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 4px solid blue;
  justify-content: space-evenly;
}

.child {
  border: 4px solid red;
  height: 40px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.maverick {
    flex-grow: 2;
  }
}

.icon-display-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  justify-content: center;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: 5px;
  background-color: #000000;
  min-width: 120px;
  text-align: center;
  color: #ffffff;
  /* White text color */
}

#twat {}
</style>