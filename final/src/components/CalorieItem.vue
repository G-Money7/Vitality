<template>
  <li class="entry-item">
    <span class="entry-details">{{ entry.label }} - {{ entry.calories }} calories</span>
    <button @click="editCalorie" class="edit-button">Edit</button>
    <button @click="deleteCalorie" class="delete-button">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'CalorieItem',
  props: {
    entry: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    editCalorie() {
      this.$emit('edit', this.index);
    },
    deleteCalorie() {
      this.$emit('delete', this.index);
    }
  }
}
</script>


<style scoped>

</style>