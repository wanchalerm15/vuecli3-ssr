<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="list-item">
      <li v-for="item of posts" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.list-item {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 45%;
  li {
    display: block;
    background-color: #e0e0e0;
    padding: 5px;
    margin-bottom: 5px;
    &:hover {
      background-color: #c0c0c0;
    }
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["posts"])
  },
  asyncData({ store }) {
    return store.dispatch("init_posts");
  }
};
</script>
