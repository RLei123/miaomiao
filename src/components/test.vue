<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style scoped>
</style>