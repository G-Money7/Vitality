<template>
  <div>
    <input type="text" v-model="filterText" placeholder="Filter by content" @input="filterEntries" />
    <button @click="sortEntries('asc')">Sort Ascending</button>
    <button @click="sortEntries('desc')">Sort Descending</button>
    <ul>
      <li v-for="entry in filteredEntries" :key="entry.id">
        {{ entry.date }} - {{ entry.content }}
        <button @click="deleteEntry(entry.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { deleteJournalEntry } from '@/journalService';

export default {
  props: {
    entries: Array
  },
  data() {
    return {
      filterText: '',
      filteredEntries: []
    };
  },
  watch: {
    entries: {
      immediate: true,
      handler(newEntries) {
        this.filteredEntries = [...newEntries];
      }
    },
    filterText() {
      this.filterEntries();
    }
  },
  methods: {
    filterEntries() {
      this.filteredEntries = this.filterText
          ? this.entries.filter(entry =>
              entry.content.toLowerCase().includes(this.filterText.toLowerCase()))
          : [...this.entries];
    },
    sortEntries(order) {
      this.filteredEntries.sort((a, b) => {
        const dateA = new Date(a.date), dateB = new Date(b.date);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      });
    },
    async deleteEntry(id) {
      await deleteJournalEntry(id);
      this.$emit('update-entries');
    }
  }
};
</script>

<style>

</style>
