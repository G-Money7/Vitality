<template>
  <div class="journal-entry">
    <h3>{{ entry.date }}</h3>
    <p>{{ entry.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'JournalEntry',
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.journal-entry {
  border: 1px solid #ccc;}
</style>