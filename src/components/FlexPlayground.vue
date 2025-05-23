<template>
  <div class="parent">
    <div class="child"></div>
    <div class="child maverick"></div>
    <div id="whatever" class="child unwanted"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlStuff: "<button>I wanna be a div</button>"
    }
  }
}
</script>

<style lang="scss" scoped>

div {

}

div div {

}

div > div {

}

.child {

}

div.child {

}

div > div.child {

}

.parent > div.child {

}

div.parent > div.child {
  
}

.unwanted {

}

.child.unwanted {

}

.parent div#whatever {

}

.parent {
  display: flex;
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
    flex-grow: 3;
  }
}

#twat {

}
</style>